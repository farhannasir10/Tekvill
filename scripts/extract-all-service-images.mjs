import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cdpPath =
  "C:/Users/farha/.cursor/browser-logs/cdp-response-Runtime.evaluate-2026-09-30T11-37-47-703Z.json";
const root = path.join(__dirname, "../public/services/detail");
fs.mkdirSync(root, { recursive: true });

const raw = JSON.parse(fs.readFileSync(cdpPath, "utf8").replace(/^\uFEFF/, ""));
const data = raw.result?.value || {};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    lib
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          try {
            fs.unlinkSync(dest);
          } catch {}
          download(res.headers.location, dest).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          reject(new Error("status " + res.statusCode + " " + url));
          return;
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve()));
      })
      .on("error", reject);
  });
}

for (const [slug, info] of Object.entries(data)) {
  const dir = path.join(root, slug);
  fs.mkdirSync(dir, { recursive: true });
  console.log("\\n===", slug, "count", info.count, "data", info.dataCount, "url", info.urlCount);
  let n = 0;
  const manifest = [];
  for (const im of info.images || []) {
    if (im.skipped) {
      console.log("skipped large", im.len);
      continue;
    }
    if (im.kind === "data" && im.full) {
      const idx = im.full.indexOf(";base64,");
      if (idx < 0) continue;
      const mime = im.full.slice(5, idx);
      const b64 = im.full.slice(idx + 8);
      const ext = mime.includes("png")
        ? "png"
        : mime.includes("webp")
          ? "webp"
          : mime.includes("jpeg") || mime.includes("jpg")
            ? "jpg"
            : "bin";
      const buf = Buffer.from(b64, "base64");
      if (buf.length < 8000) continue;
      n += 1;
      const name = `${String(n).padStart(2, "0")}.${ext}`;
      fs.writeFileSync(path.join(dir, name), buf);
      manifest.push(`/services/detail/${slug}/${name}`);
      console.log("saved", name, buf.length);
      continue;
    }
    if (im.kind === "url" && im.url) {
      // skip client logo strips / tiny brand marks from /images/home if many duplicates - keep first few webp
      if (/html-.*\\.svg$/i.test(im.url)) continue;
      n += 1;
      const ext = path.extname(im.url.split("?")[0]) || ".webp";
      const name = `${String(n).padStart(2, "0")}${ext}`;
      try {
        await download(im.url, path.join(dir, name));
        const sz = fs.statSync(path.join(dir, name)).size;
        if (sz < 1500) {
          fs.unlinkSync(path.join(dir, name));
          n -= 1;
          continue;
        }
        manifest.push(`/services/detail/${slug}/${name}`);
        console.log("dl", name, sz);
      } catch (e) {
        console.log("fail", im.url, e.message);
        n -= 1;
      }
    }
  }
  fs.writeFileSync(path.join(dir, "manifest.json"), JSON.stringify(manifest, null, 2));
}

console.log("done");
