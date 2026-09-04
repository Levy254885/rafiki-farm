# Rafiki Farm

**Quality Livestock. Better Farming.**

Modern Next.js website for Rafiki Farm (Kenya) — livestock catalogue, farm products, training, blog, gallery, contact, and WhatsApp-first enquiries.

## Repository

https://github.com/Levy254885/rafiki-farm

## Quick start

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Public routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, featured livestock & products |
| `/about` | About Rafiki Farm |
| `/livestock` | Catalogue with category filters |
| `/livestock/[slug]` | Animal detail + WhatsApp enquire |
| `/products` | Farm products |
| `/products/[slug]` | Product detail |
| `/nutrition` | Nutrition guidance |
| `/training` · `/training/[slug]` | Training resources |
| `/blog` · `/blog/[slug]` | Articles |
| `/gallery` | Photo gallery + lightbox |
| `/contact` | Contact details + enquiry form |
| `/search` | Site search |

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Seed data in `src/lib/seed.ts` (replace with Firebase later)
- WhatsApp deep links (`src/lib/whatsapp.ts`)
- Cloudinary + Firebase ready via `.env.local.example`

## Demo data

Livestock, products, blog, training and gallery ship with sample records so the site works offline before Firebase is connected.

## Production next steps

1. Add Firebase Auth + Firestore
2. Wire Cloudinary secure upload (`/api/upload`)
3. Protect `/admin/*` routes
4. Deploy to Vercel with env vars

## Licence

Private project for Rafiki Farm.
