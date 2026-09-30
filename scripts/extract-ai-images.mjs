import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cdpPath =
  "C:/Users/farha/.cursor/browser-logs/cdp-response-Runtime.evaluate-2026-09-30T11-36-40-437Z.json";
const outDir = path.join(
  __dirname,
  "../public/services/detail/ai-development",
);
fs.mkdirSync(outDir, { recursive: true });

const raw = JSON.parse(fs.readFileSync(cdpPath, "utf8").replace(/^\uFEFF/, ""));
const items = raw.result?.value || raw.result?.result?.value || [];
console.log("items", items.length);

let n = 0;
for (const item of items) {
  const full = item.full;
  if (!full) {
    console.log("skip no full", item.path?.slice?.(0, 80), "nw", item.nw);
    continue;
  }
  if (full.startsWith("data:image")) {
    const m = full.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.+)$/s);
    if (!m) {
      console.log("bad data uri");
      continue;
    }
    const ext = m[1].includes("png")
      ? "png"
      : m[1].includes("webp")
        ? "webp"
        : m[1].includes("jpeg") || m[1].includes("jpg")
          ? "jpg"
          : "bin";
    const buf = Buffer.from(m[2], "base64");
    if (buf.length < 5000) {
      console.log("skip tiny", buf.length);
      continue;
    }
    n += 1;
    const name = `${String(n).padStart(2, "0")}-${item.nw}x${item.nh}.${ext}`;
    fs.writeFileSync(path.join(outDir, name), buf);
    console.log("saved", name, buf.length);
  } else if (full.startsWith("http") || full.startsWith("/")) {
    const url = full.startsWith("/")
      ? `https://www.tekvill.com${full}`
      : full;
    n += 1;
    const ext = path.extname(url.split("?")[0]) || ".webp";
    const name = `${String(n).padStart(2, "0")}-remote${ext}`;
    await download(url, path.join(outDir, name));
    console.log("downloaded", name, url);
  }
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    lib
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          fs.unlinkSync(dest);
          download(res.headers.location, dest).then(resolve, reject);
          return;
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve()));
      })
      .on("error", reject);
  });
}

console.log("done, files:", fs.readdirSync(outDir));
