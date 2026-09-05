import type { GalleryPhoto } from "@/components/gallery/AnimatedGallery";

/** Public gallery photos — cattle, calves, goats and Dorper sheep only (no dogs). */
export const farmPhotos: GalleryPhoto[] = [
  {
    id: "pasture",
    src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=85",
    title: "Open pasture",
    category: "Cattle",
    description: "Healthy grazing land for dairy and beef stock.",
  },
  {
    id: "cattle-1",
    src: "https://images.unsplash.com/photo-1555661059-7e755c1c3c1d?auto=format&fit=crop&w=1400&q=85",
    title: "Dairy cattle",
    category: "Cattle",
  },
  {
    id: "cattle-2",
    src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=1400&q=85",
    title: "Herd in the field",
    category: "Cattle",
  },
  {
    id: "landscape",
    src: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1400&q=85",
    title: "Farm landscape",
    category: "Cattle",
  },
  {
    id: "cow-close",
    src: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1400&q=85",
    title: "Dairy cow",
    category: "Cattle",
  },
  {
    id: "calves",
    src: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?auto=format&fit=crop&w=1400&q=85",
    title: "Young calves",
    category: "Calves",
  },
  {
    id: "goat",
    src: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=1400&q=85",
    title: "Boer goat",
    category: "Goats",
  },
  {
    id: "dorper-1",
    src: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=1400&q=85",
    title: "Dorper sheep",
    category: "Sheep",
    description: "Dorper sheep on the farm.",
  },
  {
    id: "dorper-2",
    src: "https://images.unsplash.com/photo-1516467508143-3f5d3b0d2b8b?auto=format&fit=crop&w=1400&q=85",
    title: "Sheep flock",
    category: "Sheep",
  },
];
