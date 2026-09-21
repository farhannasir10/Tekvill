const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join("public", "brands");
const files = [
  "logo2.png",
  "logo3.webp",
  "css-2480d12c880a.webp",
  "css-2bb631e02957.webp",
  "css-5d480488d55b.webp",
];

function isBg(r, g, b) {
  const minc = Math.min(r, g, b);
  const maxc = Math.max(r, g, b);
  const chroma = maxc - minc;
  // Near-white / light gray background
  return minc >= 230 && chroma <= 20;
}

async function removeBackground(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const visited = new Uint8Array(w * h);
  const queue = [];

  const idx = (x, y) => y * w + x;
  const pushIfBg = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const p = idx(x, y);
    if (visited[p]) return;
    const i = p * 4;
    if (!isBg(data[i], data[i + 1], data[i + 2])) return;
    visited[p] = 1;
    queue.push(p);
  };

  // Seed flood fill from all edge pixels
  for (let x = 0; x < w; x++) {
    pushIfBg(x, 0);
    pushIfBg(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    pushIfBg(0, y);
    pushIfBg(w - 1, y);
  }

  while (queue.length) {
    const p = queue.pop();
    const x = p % w;
    const y = (p / w) | 0;
    data[p * 4 + 3] = 0;
    pushIfBg(x + 1, y);
    pushIfBg(x - 1, y);
    pushIfBg(x, y + 1);
    pushIfBg(x, y - 1);
  }

  // Soften fringe: any near-white pixel adjacent to transparent becomes more transparent
  const alpha = new Uint8Array(w * h);
  for (let p = 0; p < w * h; p++) alpha[p] = data[p * 4 + 3];

  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const p = idx(x, y);
      const i = p * 4;
      if (alpha[p] === 0) continue;
      const r = data[i],
        g = data[i + 1],
        b = data[i + 2];
      if (!isBg(r, g, b) && Math.min(r, g, b) < 200) continue;
      const nearClear =
        alpha[idx(x + 1, y)] === 0 ||
        alpha[idx(x - 1, y)] === 0 ||
        alpha[idx(x, y + 1)] === 0 ||
        alpha[idx(x, y - 1)] === 0;
      if (nearClear && Math.min(r, g, b) >= 200) {
        data[i + 3] = Math.round(data[i + 3] * 0.15);
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .trim({ threshold: 0 })
    .png()
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  console.log("ok", path.basename(outputPath), `${meta.width}x${meta.height}`);
}

(async () => {
  for (const f of files) {
    const input = path.join(dir, f);
    if (!fs.existsSync(input)) {
      console.log("missing", f);
      continue;
    }
    const base = path.basename(f, path.extname(f));
    await removeBackground(input, path.join(dir, `${base}-clear.png`));
  }
  console.log("done");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
