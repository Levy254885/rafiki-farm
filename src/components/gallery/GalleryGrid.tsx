"use client";

import { useState } from "react";
import type { GalleryItem } from "@/types";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            className="h-44 w-full cursor-pointer rounded-[13px] object-cover md:h-56"
            onClick={() => setActive(item.image)}
          />
        ))}
      </div>
      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-[#111]">
            <div className="flex items-center justify-between px-4 py-3 text-white">
              <b>Rafiki Farm Gallery</b>
              <button className="h-8 w-8 rounded-md bg-white/10" onClick={() => setActive(null)} aria-label="Close">
                ×
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active} alt="" className="max-h-[80vh] w-full object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
