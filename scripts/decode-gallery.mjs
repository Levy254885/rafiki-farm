import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const b64Dir = join(root, "scripts", "gallery-b64");
const outDir = join(root, "public", "gallery");

mkdirSync(outDir, { recursive: true });

const manifestPath = join(b64Dir, "manifest.txt");
if (!existsSync(manifestPath)) {
  console.log("No gallery-b64 manifest; skipping decode.");
  process.exit(0);
}

const names = readFileSync(manifestPath, "utf8")
  .split("\n")
  .map((s) => s.trim())
  .filter(Boolean);

for (const name of names) {
  const b64Path = join(b64Dir, `${name}.b64`);
  if (!existsSync(b64Path)) {
    console.warn("Missing", b64Path);
    continue;
  }
  const buf = Buffer.from(readFileSync(b64Path, "utf8"), "base64");
  writeFileSync(join(outDir, name), buf);
  console.log("decoded", name, buf.length);
}

console.log(`Gallery decode complete (${names.length} files).`);
