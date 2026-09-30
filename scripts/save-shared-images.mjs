import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cdpPath =
  "C:/Users/farha/.cursor/browser-logs/cdp-response-Runtime.evaluate-2026-09-30T11-39-42-185Z.json";
const outDir = path.join(__dirname, "../public/services/detail/_shared");
fs.mkdirSync(outDir, { recursive: true });

const raw = JSON.parse(fs.readFileSync(cdpPath, "utf8").replace(/^\uFEFF/, ""));
const payload = raw.result?.value || {};
console.log("total", payload.total, "ok", payload.ok, "fail", payload.fail);

const manifest = [];
for (const item of payload.items || []) {
  if (!item.ok) {
    console.log("fail", item.url, item.status);
    continue;
  }
  if (!item.b64) {
    console.log("tooBig no b64", item.name, item.size);
    continue;
  }
  const name = item.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const buf = Buffer.from(item.b64, "base64");
  fs.writeFileSync(path.join(outDir, name), buf);
  manifest.push(`/services/detail/_shared/${name}`);
  console.log("saved", name, buf.length);
}

fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("manifest", manifest.length);
