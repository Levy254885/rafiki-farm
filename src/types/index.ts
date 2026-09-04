export type Availability = "Available" | "Sold" | "Reserved";

export interface LivestockImage {
  url: string;
  publicId?: string;
  width?: number;
  height?: number;
  format?: string;
  alt?: string;
  order: number;
  featured?: boolean;
}

export interface Livestock {
  id: string;
  name: string;
  slug: string;
  category: string;
  breed: string;
  gender: "Male" | "Female";
  age: string;
  weight: string;
  price: number;
  currency: string;
  shortDescription: string;
  description: string;
  healthStatus: string;
  vaccination: string;
  pregnancyStatus?: string;
  lactationStatus?: string;
  location?: string;
  availability: Availability;
  featured: boolean;
  published: boolean;
  images: LivestockImage[];
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  unit: string;
  shortDescription: string;
  description: string;
  availability: Availability;
  featured: boolean;
  published: boolean;
  images: LivestockImage[];
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  featuredImage: string;
  published: boolean;
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  image: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description?: string;
  image: string;
  publicId?: string;
  featured: boolean;
  createdAt: string;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
  itemType?: "livestock" | "product" | "general";
  itemId?: string;
  itemName?: string;
  status: "New" | "Contacted" | "Closed";
  createdAt: string;
}

export interface FarmSettings {
  farmName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  location: string;
  openingHours: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  logoUrl?: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}
