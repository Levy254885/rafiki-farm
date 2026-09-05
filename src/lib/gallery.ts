import type { GalleryPhoto } from "@/components/gallery/AnimatedGallery";

/** Original Rafiki Farm photos (decoded into public/gallery at build time). */
export const farmPhotos: GalleryPhoto[] = [
  { id: "jersey-front", src: "/gallery/jersey-cow-front.jpg", title: "Jersey cow — pasture portrait", category: "Cattle", description: "Healthy dairy stock on green pasture." },
  { id: "jersey-side", src: "/gallery/jersey-cow-side.jpg", title: "Jersey cow — side profile", category: "Cattle" },
  { id: "jersey-rear", src: "/gallery/jersey-cow-rear.jpg", title: "Jersey cow — dairy conformation", category: "Cattle" },
  { id: "jersey-grazing", src: "/gallery/jersey-cow-grazing.jpg", title: "Jersey cow grazing", category: "Cattle" },
  { id: "jersey-grazing-2", src: "/gallery/jersey-cow-grazing-2.jpg", title: "Jersey cow at pasture", category: "Cattle" },
  { id: "ayrshire-barn", src: "/gallery/ayrshire-cow-barn.jpg", title: "Ayrshire cow in the barn", category: "Cattle" },
  { id: "holstein-barn", src: "/gallery/holstein-cow-barn.jpg", title: "Holstein dairy cow", category: "Cattle" },
  { id: "holstein-side", src: "/gallery/holstein-cow-side.jpg", title: "Holstein cow — side view", category: "Cattle" },
  { id: "holstein-pair", src: "/gallery/holstein-cows-pair.jpg", title: "Holstein dairy pair", category: "Cattle" },
  { id: "holstein-group", src: "/gallery/holstein-cows-group.jpg", title: "Holstein herd", category: "Cattle" },
  { id: "holstein-rear", src: "/gallery/holstein-cows-rear.jpg", title: "Holstein milking group", category: "Cattle" },
  { id: "calves-barn", src: "/gallery/calves-barn.jpg", title: "Calves in the barn", category: "Calves" },
  { id: "calves-group", src: "/gallery/calves-group.jpg", title: "Young calves", category: "Calves" },
  { id: "calves-young", src: "/gallery/calves-young.jpg", title: "Calf pen", category: "Calves" },
  { id: "calves-closeup", src: "/gallery/calves-closeup.jpg", title: "Calves up close", category: "Calves" },
  { id: "boer-barn", src: "/gallery/boer-goats-barn.jpg", title: "Boer goats", category: "Goats" },
  { id: "boer-family", src: "/gallery/boer-goat-family.jpg", title: "Boer doe with kids", category: "Goats" },
  { id: "dorper-rams", src: "/gallery/dorper-rams.jpg", title: "Dorper rams", category: "Sheep" },
  { id: "dorper-flock", src: "/gallery/dorper-flock.jpg", title: "Dorper flock in the field", category: "Sheep" },
  { id: "dorper-pen", src: "/gallery/dorper-sheep-pen.jpg", title: "Dorper sheep in the pen", category: "Sheep" },
  { id: "sheep-white", src: "/gallery/sheep-white-group.jpg", title: "White sheep group", category: "Sheep" },
];
