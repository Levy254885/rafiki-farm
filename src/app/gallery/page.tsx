import type { Metadata } from "next";
import AnimatedGallery from "@/components/gallery/AnimatedGallery";
import { farmPhotos } from "@/lib/gallery";
import GalleryIntro from "@/components/gallery/GalleryIntro";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Rafiki Farm — cattle, goats, sheep and young stock.",
};

export default function GalleryPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <GalleryIntro />
        <div className="mt-8">
          <AnimatedGallery photos={farmPhotos} />
        </div>
      </div>
    </section>
  );
}
