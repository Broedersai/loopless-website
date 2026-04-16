import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync } from "node:fs";

const src = "public/favicon-48.png";
const b16 = await sharp(src).resize(16, 16).png().toBuffer();
const b32 = await sharp(src).resize(32, 32).png().toBuffer();
const b48 = await sharp(src).toBuffer();

const ico = await pngToIco([b16, b32, b48]);
writeFileSync("src/app/favicon.ico", ico);
console.log("favicon.ico written:", ico.length, "bytes");
