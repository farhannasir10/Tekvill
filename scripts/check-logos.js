const sharp = require("sharp");
const path = require("path");

const out = "C:/Users/farha/.cursor/projects/c-Users-farha-Desktop-New-Tekvill-home/assets";

async function compositeOnPaper(name) {
  const logo = path.join("public/brands", name);
  const meta = await sharp(logo).metadata();
  const pad = 40;
  const w = meta.width + pad * 2;
  const h = meta.height + pad * 2;
  const paper = Buffer.from(
    `<svg width="${w}" height="${h}"><rect width="100%" height="100%" fill="#eef0f2"/></svg>`
  );
  await sharp(paper)
    .composite([{ input: logo, left: pad, top: pad }])
    .png()
    .toFile(path.join(out, `check-${name}`));
  console.log("wrote", name);
}

(async () => {
  for (const f of [
    "logo2-clear.png",
    "css-2480d12c880a-clear.png",
    "css-2bb631e02957-clear.png",
    "css-5d480488d55b-clear.png",
    "logo3-clear.png",
  ]) {
    await compositeOnPaper(f);
  }
})();
