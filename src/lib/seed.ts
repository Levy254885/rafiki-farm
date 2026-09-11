import type {
  Livestock,
  Product,
  BlogPost,
  TrainingItem,
  GalleryItem,
  FarmSettings,
  HeroSlide,
} from "@/types";

export const defaultSettings: FarmSettings = {
  farmName: "Rafiki Farm",
  tagline: "Quality Livestock. Better Farming.",
  phone: "+254 787 277 528",
  whatsapp: "254787277528",
  email: "info@rafikifarm.co.ke",
  address: "Naromoru, Nyeri County, Kenya",
  location: "Naromoru, Nyeri County, Kenya",
  openingHours: "Mon–Sat · 8:00 AM–5:30 PM",
};

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    eyebrow: "Welcome to Rafiki Farm · Naromoru, Nyeri",
    title: "Premium livestock.\nBetter farming.",
    description: "Quality dairy cows, Dorper sheep and breeding stock from our farm in Naromoru, Nyeri County.",
    image: "/gallery/jersey-cow-front.jpg",
    primaryCta: { label: "Explore our livestock", href: "/livestock" },
    secondaryCta: { label: "Contact us", href: "/contact" },
  },
  {
    id: "2",
    eyebrow: "Dorper sheep",
    title: "Hardy Dorpers.\nStrong genetics.",
    description: "Browse carefully selected Dorper sheep with clear information and direct WhatsApp access to our farm team.",
    image: "/gallery/dorper-flock.jpg",
    primaryCta: { label: "View livestock", href: "/livestock" },
  },
  {
    id: "3",
    eyebrow: "Dairy cattle",
    title: "Healthy cows.\nProductive herds.",
    description: "Dairy stock raised with attention to nutrition, health and practical farm management.",
    image: "/gallery/holstein-cows-rear.jpg",
    primaryCta: { label: "View cattle", href: "/livestock" },
  },
];

const ts = () => new Date().toISOString();
const img = (url: string, alt = "") => [{ url, order: 0, featured: true, alt }];

export const seedLivestock: Livestock[] = [
  { id: "rf001", name: "Friesian Heifer", slug: "friesian-heifer", category: "Heifers", breed: "Friesian", gender: "Female", age: "18 Months", weight: "420 kg", price: 180000, currency: "KES", shortDescription: "A well-grown dairy heifer selected for sound body condition.", description: "A well-grown dairy heifer selected for sound body condition and productive potential.", healthStatus: "Healthy", vaccination: "Up to date", availability: "Available", featured: true, published: true, images: img("/gallery/holstein-cow-barn.jpg", "Friesian Heifer"), createdAt: ts(), updatedAt: ts() },
  { id: "rf002", name: "Ayrshire Cow", slug: "ayrshire-cow", category: "Cows", breed: "Ayrshire", gender: "Female", age: "3 Years", weight: "510 kg", price: 160000, currency: "KES", shortDescription: "A strong dairy cow with a balanced frame.", description: "A strong dairy cow with a balanced frame and good farm management history.", healthStatus: "Healthy", vaccination: "Up to date", lactationStatus: "In milk", availability: "Available", featured: true, published: true, images: img("/gallery/ayrshire-cow-barn.jpg", "Ayrshire Cow"), createdAt: ts(), updatedAt: ts() },
  { id: "rf003", name: "Friesian Bull", slug: "friesian-bull", category: "Bulls", breed: "Friesian", gender: "Male", age: "2 Years", weight: "620 kg", price: 200000, currency: "KES", shortDescription: "A mature dairy bull with good body condition.", description: "A mature dairy bull maintained with attention to nutrition, health and body condition.", healthStatus: "Healthy", vaccination: "Up to date", availability: "Available", featured: false, published: true, images: img("/gallery/holstein-cow-rear.jpg", "Friesian Bull"), createdAt: ts(), updatedAt: ts() },
  { id: "rf004", name: "Jersey Cow", slug: "jersey-cow", category: "Cows", breed: "Jersey", gender: "Female", age: "4 Years", weight: "430 kg", price: 150000, currency: "KES", shortDescription: "Compact dairy cow with a practical farm profile.", description: "Compact dairy cow with a practical farm profile.", healthStatus: "Healthy", vaccination: "Up to date", availability: "Sold", featured: false, published: true, images: img("/gallery/jersey-cow-front.jpg", "Jersey Cow"), createdAt: ts(), updatedAt: ts() },
  { id: "rf005", name: "Friesian Calf", slug: "friesian-calf", category: "Calves", breed: "Friesian", gender: "Male", age: "6 Months", weight: "180 kg", price: 45000, currency: "KES", shortDescription: "Young Friesian calf under careful feeding.", description: "Young Friesian calf receiving careful feeding and routine health management.", healthStatus: "Healthy", vaccination: "Up to date", availability: "Available", featured: true, published: true, images: img("/gallery/calves-barn.jpg", "Friesian Calf"), createdAt: ts(), updatedAt: ts() },
  { id: "rf006", name: "Boer Goat", slug: "boer-goat", category: "Goats", breed: "Boer", gender: "Male", age: "14 Months", weight: "65 kg", price: 28000, currency: "KES", shortDescription: "Healthy meat goat with good body condition.", description: "Healthy meat goat with good body condition.", healthStatus: "Healthy", vaccination: "Up to date", availability: "Available", featured: false, published: true, images: img("/gallery/boer-goat-family.jpg", "Boer Goat"), createdAt: ts(), updatedAt: ts() },
  { id: "rf007", name: "Dorper Sheep", slug: "dorper-sheep", category: "Sheep", breed: "Dorper", gender: "Male", age: "16 Months", weight: "55 kg", price: 22000, currency: "KES", shortDescription: "Hardy Dorper ram with strong body condition.", description: "Hardy Dorper sheep selected for meat production and easy care on Kenyan farms.", healthStatus: "Healthy", vaccination: "Up to date", availability: "Available", featured: true, published: true, images: img("/gallery/dorper-rams.jpg", "Dorper Sheep"), createdAt: ts(), updatedAt: ts() },
  { id: "rf008", name: "Dorper Ewe", slug: "dorper-ewe", category: "Sheep", breed: "Dorper", gender: "Female", age: "2 Years", weight: "48 kg", price: 20000, currency: "KES", shortDescription: "Breeding Dorper ewe from the farm flock.", description: "Breeding Dorper ewe maintained for flock growth and meat production.", healthStatus: "Healthy", vaccination: "Up to date", availability: "Available", featured: false, published: true, images: img("/gallery/dorper-ewe.jpg", "Dorper Ewe"), createdAt: ts(), updatedAt: ts() },
];

export const seedProducts: Product[] = [
  { id: "p1", name: "Fresh Farm Milk", slug: "fresh-farm-milk", category: "Fresh Milk", price: 90, currency: "KES", unit: "per litre", shortDescription: "Fresh milk supplied directly from the farm.", description: "Fresh milk supplied directly from the farm, subject to daily availability.", availability: "Available", featured: true, published: true, images: img("/gallery/jersey-cow-rear.jpg"), createdAt: ts(), updatedAt: ts() },
  { id: "p2", name: "Dairy Feed", slug: "dairy-feed", category: "Animal Feed", price: 2800, currency: "KES", unit: "per 50 kg", shortDescription: "Feed for practical dairy-farm nutrition programmes.", description: "Feed for practical dairy-farm nutrition programmes.", availability: "Available", featured: true, published: true, images: img("/gallery/calves-group.jpg"), createdAt: ts(), updatedAt: ts() },
  { id: "p3", name: "Farm Manure", slug: "farm-manure", category: "Manure", price: 500, currency: "KES", unit: "per bag", shortDescription: "Well-managed farm manure for soil improvement.", description: "Well-managed farm manure for soil improvement.", availability: "Available", featured: false, published: true, images: img("/gallery/dorper-flock.jpg"), createdAt: ts(), updatedAt: ts() },
  { id: "p4", name: "Mixed Farm Produce", slug: "mixed-farm-produce", category: "Farm Produce", price: 1200, currency: "KES", unit: "from", shortDescription: "Selected seasonal produce depending on availability.", description: "Selected seasonal produce, depending on farm availability.", availability: "Available", featured: false, published: true, images: img("/gallery/jersey-cow-front.jpg"), createdAt: ts(), updatedAt: ts() },
];

export const seedBlog: BlogPost[] = [
  { id: "b1", title: "Better calf nutrition starts early", slug: "better-calf-nutrition-starts-early", excerpt: "Healthy calves need consistent feeding, clean water and close observation.", content: "Healthy calves need consistent feeding, clean water and close observation. Early nutrition sets the foundation for lifelong productivity.", category: "Nutrition", author: "Rafiki Farm", featuredImage: "/gallery/calves-barn.jpg", published: true, publishedAt: ts(), createdAt: ts(), updatedAt: ts() },
  { id: "b2", title: "Reading your animal's body condition", slug: "reading-body-condition", excerpt: "Body condition can tell a farmer a lot before a problem becomes obvious.", content: "Body condition can tell a farmer a lot before a problem becomes obvious. Regular scoring helps catch issues early.", category: "Livestock", author: "Rafiki Farm", featuredImage: "/gallery/jersey-cow-front.jpg", published: true, publishedAt: ts(), createdAt: ts(), updatedAt: ts() },
  { id: "b3", title: "Simple farm records that actually help", slug: "simple-farm-records", excerpt: "Good records turn daily farm activity into useful decisions.", content: "Good records turn daily farm activity into useful decisions. Start with milk yield, feed costs and health events.", category: "Farm Management", author: "Rafiki Farm", featuredImage: "/gallery/holstein-cows-rear.jpg", published: true, publishedAt: ts(), createdAt: ts(), updatedAt: ts() },
];

export const seedTraining: TrainingItem[] = [
  { id: "t1", title: "Dairy Farming", slug: "dairy-farming", description: "A practical look at the daily routines behind productive dairy animals.", content: "Practical guidance on dairy farming routines and management.", category: "Dairy Farming", image: "/gallery/ayrshire-cow-barn.jpg", published: true, createdAt: ts(), updatedAt: ts() },
  { id: "t2", title: "Animal Nutrition", slug: "animal-nutrition", description: "How feeding, water and body condition work together.", content: "Understanding the fundamentals of livestock nutrition.", category: "Animal Nutrition", image: "/gallery/calves-group.jpg", published: true, createdAt: ts(), updatedAt: ts() },
  { id: "t3", title: "Farm Records", slug: "farm-records", description: "Simple records that help farmers understand costs and performance.", content: "Keeping useful farm records without complexity.", category: "Farm Management", image: "/gallery/dorper-rams.jpg", published: true, createdAt: ts(), updatedAt: ts() },
  { id: "t4", title: "Disease Prevention", slug: "disease-prevention", description: "Routine observation and management practices for healthier stock.", content: "Prevention-focused livestock health practices.", category: "Livestock Management", image: "/gallery/jersey-cow-rear.jpg", published: true, createdAt: ts(), updatedAt: ts() },
];

export const seedGallery: GalleryItem[] = [
  { id: "g1", title: "Jersey cow", category: "Cattle", image: "/gallery/jersey-cow-front.jpg", featured: true, createdAt: ts() },
  { id: "g2", title: "Dorper flock", category: "Sheep", image: "/gallery/dorper-flock.jpg", featured: true, createdAt: ts() },
  { id: "g3", title: "Holstein group", category: "Cattle", image: "/gallery/holstein-cows-rear.jpg", featured: false, createdAt: ts() },
  { id: "g4", title: "Calves", category: "Calves", image: "/gallery/calves-barn.jpg", featured: false, createdAt: ts() },
  { id: "g5", title: "Dorper rams", category: "Sheep", image: "/gallery/dorper-rams.jpg", featured: false, createdAt: ts() },
  { id: "g6", title: "Young stock", category: "Calves", image: "/gallery/calves-group.jpg", featured: false, createdAt: ts() },
  { id: "g7", title: "Dorper ewe", category: "Sheep", image: "/gallery/dorper-ewe.jpg", featured: true, createdAt: ts() },
  { id: "g8", title: "Jersey conformation", category: "Cattle", image: "/gallery/jersey-cow-rear.jpg", featured: false, createdAt: ts() },
];
