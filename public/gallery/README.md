# Gallery images

These photos must be present for Vercel:

- jersey-cow-front.jpg (hero)
- dorper-flock.jpg (hero)
- holstein-cows-rear.jpg (hero)
- jersey-cow-rear.jpg
- dorper-rams.jpg
- dorper-ewe.jpg
- calves-barn.jpg
- holstein-cow-rear.jpg
- ayrshire-cow-barn.jpg
- calves-group.jpg
- holstein-cow-barn.jpg

## Upload (recommended)

1. Open https://github.com/Levy254885/rafiki-farm
2. Go to `public/gallery/`
3. Click **Add file → Upload files**
4. Upload the JPGs from your computer
5. Commit to `main` — Vercel redeploys with images visible

## Or terminal

```bash
git clone https://github.com/Levy254885/rafiki-farm.git
cd rafiki-farm
# place optimized JPGs in public/gallery/
git add public/gallery/*.jpg
git commit -m "Add farm gallery photos"
git push
```

The build also runs `scripts/decode-gallery.mjs` which can restore JPGs from `scripts/gallery-b64/*.b64` when those files are in the repo.
