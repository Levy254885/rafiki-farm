"use client";

import { useEffect, useMemo, useState } from "react";

export type GalleryPhoto = {
  id: string;
  src: string;
  title: string;
  category: string;
  description?: string;
};

const FILTERS = ["All", "Cattle", "Goats", "Sheep", "Calves"];

export default function AnimatedGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  const list = useMemo(
    () => (filter === "All" ? photos : photos.filter((p) => p.category === filter)),
    [filter, photos]
  );

  useEffect(() => {
    if (list.length < 2) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % list.length), 4200);
    return () => clearInterval(id);
  }, [list.length]);

  useEffect(() => {
    setSlide(0);
  }, [filter]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % list.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? 0 : (i - 1 + list.length) % list.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, list.length]);

  if (!photos.length) {
    return <p className="text-farm-muted">Gallery photos coming soon.</p>;
  }

  const featured = list[slide] ?? list[0];

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-[22px] border border-farm-line bg-black shadow-soft">
        <div className="relative h-[320px] md:h-[460px]">
          {list.map((photo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={photo.id}
              src={photo.src}
              alt={photo.title}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                i === slide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
            <p className="text-[11px] font-black uppercase tracking-[2px] text-[#dce8dc]">{featured.category}</p>
            <h2 className="mt-1 text-2xl font-semibold md:text-4xl">{featured.title}</h2>
            {featured.description ? <p className="mt-2 max-w-xl text-sm text-white/85">{featured.description}</p> : null}
          </div>
          <div className="absolute bottom-5 right-5 flex gap-2">
            {list.map((photo, i) => (
              <button
                key={photo.id}
                aria-label={`Show ${photo.title}`}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-white" : "w-3 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-lg border px-3 py-2 text-xs font-extrabold transition ${
              filter === cat
                ? "border-farm-green bg-farm-green text-white"
                : "border-farm-line bg-white text-farm-ink hover:border-farm-green"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {list.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setActive(i)}
            className="group relative aspect-[4/5] overflow-hidden rounded-[16px] border border-farm-line bg-farm-cream text-left shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft"
            style={{ animation: `galleryIn 0.55s ease ${Math.min(i * 0.04, 0.4)}s both` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/80">{photo.category}</p>
              <p className="text-sm font-bold leading-tight">{photo.title}</p>
            </div>
          </button>
        ))}
      </div>

      {active !== null && list[active] ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm md:p-8"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#111] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-white/60">{list[active].category}</p>
                <b>{list[active].title}</b>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/50">
                  {active + 1} / {list.length}
                </span>
                <button
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-lg"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={list[active].src} alt={list[active].title} className="max-h-[75vh] w-full object-contain" />
              <button
                className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white"
                onClick={() => setActive((i) => (i === null ? 0 : (i - 1 + list.length) % list.length))}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white"
                onClick={() => setActive((i) => (i === null ? 0 : (i + 1) % list.length))}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <style jsx global>{`
        @keyframes galleryIn {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
