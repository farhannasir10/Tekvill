const sharp = require("sharp");
const fs = require("fs");

const T =
  "M4 5C2.44769 17.2722 0.00136768 29.6088 0 42L30 42C31.5511 29.7374 34.4697 17.3521 35 5L4 5M39 42L70 42C70.9753 29.6419 73.4452 17.3026 75 5L53 5C50.5703 5.0011 46.7845 4.37651 44.7423 6.02779C42.356 7.95728 42.6445 13.2146 42.2816 16L39 42M84 5C83.7442 17.3941 80.2558 29.6059 80 42L97 42C93.8935 81.3625 86.8673 120.843 81.7184 160C79.3015 178.38 75.0512 197.449 75 216L119 216C119.181 194.153 124.019 171.671 126.715 150C131.194 114.007 135.452 77.986 140 42L198 42C198.534 29.5741 202.022 17.3877 203 5L84 5z";

function svgFor(size, radius) {
  const pad = Math.round(size * 0.16);
  const iw = size - pad * 2;
  const ih = Math.round(iw * (221 / 203));
  const y = Math.round((size - ih) / 2);
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="#07080a"/><svg x="${pad}" y="${y}" width="${iw}" height="${ih}" viewBox="0 0 203 221"><path d="${T}" fill="#59abff"/></svg></svg>`
  );
}

function icoFromPngs(pngs, sizes) {
  const count = pngs.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  const bodies = [];
  pngs.forEach((png, i) => {
    const size = sizes[i];
    dir.writeUInt8(size >= 256 ? 0 : size, i * 16 + 0);
    dir.writeUInt8(size >= 256 ? 0 : size, i * 16 + 1);
    dir.writeUInt8(0, i * 16 + 2);
    dir.writeUInt8(0, i * 16 + 3);
    dir.writeUInt16LE(1, i * 16 + 4);
    dir.writeUInt16LE(32, i * 16 + 6);
    dir.writeUInt32LE(png.length, i * 16 + 8);
    dir.writeUInt32LE(offset, i * 16 + 12);
    offset += png.length;
    bodies.push(png);
  });
  return Buffer.concat([header, dir, ...bodies]);
}

(async () => {
  const sizes = [16, 32, 48];
  const pngs = [];
  for (const size of sizes) {
    const radius = size <= 16 ? 3 : size <= 32 ? 7 : 10;
    pngs.push(await sharp(svgFor(size, radius)).png().toBuffer());
  }
  const ico = icoFromPngs(pngs, sizes);
  fs.writeFileSync("public/favicon.ico", ico);
  fs.writeFileSync("src/app/favicon.ico", ico);
  fs.writeFileSync("public/favicon-32.png", pngs[1]);
  console.log("wrote favicons", ico.length, "bytes");
})();
