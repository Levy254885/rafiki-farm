"use client";

import { FadeUp, TextReveal } from "@/components/motion/Reveal";

export default function GalleryIntro() {
  return (
    <>
      <FadeUp>
        <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Farm gallery</p>
      </FadeUp>
      <TextReveal text="Life around Rafiki Farm." className="mt-2 text-4xl font-semibold tracking-tight" as="h1" />
      <FadeUp delay={0.12}>
        <p className="mt-2 max-w-2xl text-farm-muted">
          Dairy cattle, goats, sheep and young stock — a visual look at the farm.
        </p>
      </FadeUp>
    </>
  );
}
