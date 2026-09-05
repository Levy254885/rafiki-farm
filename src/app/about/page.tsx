import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Rafiki Farm in Naromoru, Nyeri County — quality livestock and practical farming knowledge.",
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 md:grid-cols-2 sm:px-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1100&q=85"
          alt="Rafiki Farm landscape"
          className="h-[330px] w-full rounded-2xl object-cover md:h-[470px]"
        />
        <div>
          <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">About Rafiki Farm</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Better farming starts with better care.</h1>
          <p className="mt-4 text-farm-muted">
            At Rafiki Farm, we believe better farming starts with healthy livestock, proper care and practical
            knowledge. We work with Kenyan farmers who want reliable animals and clear information.
          </p>
          <p className="mt-3 text-farm-muted">
            Based in <strong className="text-farm-ink">Naromoru, Nyeri County, Kenya</strong>, the farm focuses on
            responsible breeding, everyday nutrition and straightforward management practices — not slogans.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c5d6c9] bg-farm-cream px-4 py-2 text-sm font-bold text-farm-ink">
            <span aria-hidden>📍</span> Naromoru · Nyeri County
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Our story", "Growing with farmers, one healthy animal at a time."],
              ["Our approach", "Care, nutrition and practical management."],
              ["Our values", "Integrity, quality and responsible farming."],
            ].map(([title, copy]) => (
              <div key={title} className="border-t-2 border-farm-green pt-3">
                <b className="text-sm">{title}</b>
                <p className="text-xs text-farm-muted">{copy}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="mt-8 inline-flex rounded-[10px] bg-farm-green px-4 py-3 text-sm font-extrabold text-white">
            Talk to Rafiki Farm →
          </Link>
        </div>
      </div>
    </section>
  );
}
