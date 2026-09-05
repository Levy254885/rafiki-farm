"use client";

import { FadeUp, TextReveal } from "@/components/motion/Reveal";

export default function LivestockPageIntro() {
  return (
    <>
      <FadeUp>
        <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Our livestock</p>
      </FadeUp>
      <TextReveal text="Animals raised with purpose." className="mt-2 text-4xl font-semibold tracking-tight" as="h1" />
      <FadeUp delay={0.1}>
        <p className="mt-2 max-w-xl text-farm-muted">
          Explore the current catalogue. Availability and pricing can be updated from the farm dashboard.
        </p>
      </FadeUp>
    </>
  );
}
