import sharp from "sharp";
import { mkdirSync, copyFileSync, rmSync, existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve(".");
const src = path.join(root, "public", "logo-icon-final.png");
const appDir = path.join(root, "src", "app");
const pubDir = path.join(root, "public");

const meta = await sharp(src).metadata();
const size = Math.max(meta.width, meta.height);
const padX = Math.floor((size - meta.width) / 2);
const padY = Math.floor((size - meta.height) / 2);

const squareBuf = await sharp(src)
  .extend({
    top: padY,
    bottom: size - meta.height - padY,
    left: padX,
    right: size - meta.width - padX,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

async function writePng(outPath, px) {
  await sharp(squareBuf).resize(px, px).png({ compressionLevel: 9 }).toFile(outPath);
  console.log("wrote", outPath);
}

await writePng(path.join(appDir, "icon.png"), 512);
await writePng(path.join(appDir, "apple-icon.png"), 180);
await writePng(path.join(pubDir, "favicon-48.png"), 48);
await writePng(path.join(pubDir, "favicon-192.png"), 192);
await writePng(path.join(pubDir, "favicon-512.png"), 512);

console.log("done");
