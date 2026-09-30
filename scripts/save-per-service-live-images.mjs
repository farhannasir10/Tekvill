import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cdpPath =
  "C:/Users/farha/.cursor/browser-logs/cdp-response-Runtime.evaluate-2026-09-30T11-45-47-869Z.json";
const root = path.join(__dirname, "../public/services/detail");

const raw = JSON.parse(fs.readFileSync(cdpPath, "utf8").replace(/^\uFEFF/, ""));
const data = raw.result?.value || {};

const summary = {};
for (const [slug, info] of Object.entries(data)) {
  const dir = path.join(root, slug);
  fs.mkdirSync(dir, { recursive: true });
  summary[slug] = { uploads: info.uploads || [], savedData: [] };

  let n = 0;
  for (const src of info.data || []) {
    const idx = src.indexOf(";base64,");
    if (idx < 0) continue;
    const mime = src.slice(5, idx);
    const b64 = src.slice(idx + 8);
    const ext = mime.includes("png")
      ? "png"
      : mime.includes("webp")
        ? "webp"
        : "jpg";
    const buf = Buffer.from(b64, "base64");
    if (buf.length < 20000) continue;
    n += 1;
    const name = `live-${String(n).padStart(2, "0")}.${ext}`;
    fs.writeFileSync(path.join(dir, name), buf);
    summary[slug].savedData.push(`/services/detail/${slug}/${name}`);
    console.log(slug, "saved", name, buf.length);
  }
  console.log(slug, "uploads", (info.uploads || []).length, info.uploads);
}

fs.writeFileSync(
  path.join(root, "scrape-summary.json"),
  JSON.stringify(summary, null, 2),
);
console.log("done");
