"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/seed";

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#17351f] md:min-h-[600px]">
      {heroSlides.map((item, i) => (
        <div key={item.id} className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? "opacity-100" : "opacity-0"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt="" className={`h-[560px] w-full object-cover brightness-[.67] md:h-[600px] ${i === slide ? "kenburn" : ""}`} />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-[1240px] px-4 text-white sm:px-5">
              <div className="mb-4 text-xs font-black uppercase tracking-[2px] text-[#dce8dc]">{item.eyebrow}</div>
              <h1 className="mb-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-3px] md:text-7xl whitespace-pre-line">{item.title}</h1>
              <p className="max-w-xl text-[#edf3ed]">{item.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={item.primaryCta.href} className="rounded-[10px] bg-farm-green px-5 py-3 text-sm font-extrabold text-white">{item.primaryCta.label} →</Link>
                {item.secondaryCta ? (
                  <Link href={item.secondaryCta.href} className="rounded-[10px] border border-[#bdd0c2] bg-white px-5 py-3 text-sm font-extrabold text-farm-green">{item.secondaryCta.label} →</Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, i) => (
          <button key={item.id} aria-label={`Go to slide ${i + 1}`} className={`h-[3px] w-8 ${i === slide ? "bg-white" : "bg-white/40"}`} onClick={() => setSlide(i)} />
        ))}
      </div>
    </section>
  );
}
