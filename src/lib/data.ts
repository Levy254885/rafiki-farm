import {
  seedBlog,
  seedGallery,
  seedLivestock,
  seedProducts,
  seedTraining,
} from "@/lib/seed";

export function getPublishedLivestock() {
  return seedLivestock.filter((item) => item.published);
}

export function getLivestockBySlug(slug: string) {
  return getPublishedLivestock().find((item) => item.slug === slug || item.id === slug);
}

export function getPublishedProducts() {
  return seedProducts.filter((item) => item.published);
}

export function getProductBySlug(slug: string) {
  return getPublishedProducts().find((item) => item.slug === slug || item.id === slug);
}

export function getPublishedPosts() {
  return seedBlog.filter((item) => item.published);
}

export function getPostBySlug(slug: string) {
  return getPublishedPosts().find((item) => item.slug === slug);
}

export function getPublishedTraining() {
  return seedTraining.filter((item) => item.published);
}

export function getTrainingBySlug(slug: string) {
  return getPublishedTraining().find((item) => item.slug === slug);
}

export function getGallery() {
  return seedGallery;
}

export const livestockCategories = [
  "All Animals",
  "Cows",
  "Heifers",
  "Bulls",
  "Calves",
  "Goats",
  "Sheep",
  "Other Livestock",
];
