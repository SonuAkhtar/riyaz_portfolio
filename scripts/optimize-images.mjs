/**
 * Batch-converts PNG/JPG/JPEG images under public/assets/ to WebP at quality 82.
 * Deletes the original after a successful conversion. Skips GIFs (animated handling
 * is fragile — convert those manually if needed).
 *
 * Usage:  node scripts/optimize-images.mjs
 */
import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "assets");
const QUALITY = 82;
const CONVERTIBLE = new Set([".png", ".jpg", ".jpeg"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

const fmt = (bytes) =>
  bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(2)} MB`
    : `${(bytes / 1024).toFixed(0)} KB`;

let totalBefore = 0;
let totalAfter = 0;
let converted = 0;
let skipped = 0;

for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (!CONVERTIBLE.has(ext)) {
    if (ext === ".gif") skipped++;
    continue;
  }
  const target = file.replace(/\.[^.]+$/, ".webp");
  const before = (await stat(file)).size;
  try {
    await sharp(file).webp({ quality: QUALITY, effort: 4 }).toFile(target);
    const after = (await stat(target)).size;
    await unlink(file);
    totalBefore += before;
    totalAfter += after;
    converted++;
    const saved = (((before - after) / before) * 100).toFixed(0);
    console.log(`  ${file.replace(ROOT, "assets")}  ${fmt(before)} -> ${fmt(after)}  (-${saved}%)`);
  } catch (err) {
    console.error(`  FAILED: ${file}  ${err.message}`);
  }
}

console.log("");
console.log(`Converted: ${converted} files`);
console.log(`Skipped (GIFs): ${skipped} files`);
console.log(`Total: ${fmt(totalBefore)} -> ${fmt(totalAfter)}  (saved ${fmt(totalBefore - totalAfter)})`);
