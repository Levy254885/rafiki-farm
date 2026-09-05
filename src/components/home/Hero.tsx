"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/seed";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const reduce = useReducedMotion();
  const current = heroSlides[slide];
  const lines = current.title.split("\n");

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#17351f] md:min-h-[640px]">
      {heroSlides.map((item, i) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt=""
            className={`h-[560px] w-full object-cover brightness-[.64] md:h-[640px] ${i === slide ? "kenburn" : ""}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1240px] px-4 text-white sm:px-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease }}
            >
              <motion.p
                className="mb-4 text-xs font-black uppercase tracking-[2px] text-[#dce8dc]"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.5, ease }}
              >
                {current.eyebrow}
              </motion.p>

              <h1 className="mb-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-3px] md:text-7xl">
                {lines.map((line, i) => (
                  <span key={i} className="block overflow-hidden">
                    <motion.span
                      className="block"
                      initial={reduce ? false : { y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{ delay: 0.12 + i * 0.1, duration: 0.65, ease }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                className="max-w-xl text-[#edf3ed]"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.55, ease }}
              >
                {current.description}
              </motion.p>

              <motion.div
                className="mt-7 flex flex-wrap gap-3"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.55, ease }}
              >
                <Link
                  href={current.primaryCta.href}
                  className="rounded-[10px] bg-farm-green px-5 py-3 text-sm font-extrabold text-white transition hover:bg-farm-green-light"
                >
                  {current.primaryCta.label}
                </Link>
                {current.secondaryCta ? (
                  <Link
                    href={current.secondaryCta.href}
                    className="rounded-[10px] border border-white/35 bg-white/10 px-5 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    {current.secondaryCta.label}
                  </Link>
                ) : null}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex gap-2">
            {heroSlides.map((item, i) => (
              <button
                key={item.id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-10 bg-white" : "w-3 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
