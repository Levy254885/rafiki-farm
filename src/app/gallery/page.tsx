import type { Metadata } from "next";
import AnimatedGallery from "@/components/gallery/AnimatedGallery";
import { farmPhotos } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Original photos from Rafiki Farm — cattle, goats, sheep and calves.",
};

export default function GalleryPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Farm gallery</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Life around Rafiki Farm.</h1>
        <p className="mt-2 max-w-2xl text-farm-muted">
          Original farm photos — dairy cattle, goats, sheep and young stock. More images will be added as they arrive.
        </p>
        <div className="mt-8">
          <AnimatedGallery photos={farmPhotos} />
        </div>
      </div>
    </section>
  );
}
