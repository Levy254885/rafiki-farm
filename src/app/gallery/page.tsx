import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { getGallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from around Rafiki Farm.",
};

export default function GalleryPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Farm gallery</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Life around Rafiki Farm.</h1>
        <div className="mt-8">
          <GalleryGrid items={getGallery()} />
        </div>
      </div>
    </section>
  );
}
