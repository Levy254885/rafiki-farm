import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nutrition",
  description: "Practical livestock nutrition guidance from Rafiki Farm.",
};

const topics = [
  ["Animal nutrition", "How feed quality, quantity and timing support growth and production."],
  ["Feeding", "Daily routines that keep animals in good body condition."],
  ["Water management", "Clean, reliable water is as important as feed."],
  ["Calf nutrition", "Early feeding sets the foundation for later performance."],
  ["Dairy nutrition", "Balanced rations for milking animals on small and medium farms."],
  ["Feed management", "Storage, wastage and simple planning for the season."],
  ["Supplements", "When minerals and extra feed actually help — and when they do not."],
];

export default function NutritionPage() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1594761051656-8f0a7b3e3c31?auto=format&fit=crop&w=1200&q=85"
            alt="Cattle feeding"
            className="min-h-[320px] w-full object-cover"
          />
          <div className="flex flex-col justify-center bg-farm-green-dark px-8 py-16 text-white md:px-16">
            <p className="text-[11px] font-black uppercase tracking-[2px] text-[#bcd6c3]">Nutrition & care</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Feed well. Manage well. Grow well.</h1>
            <p className="mt-4 text-[#c9d8cc]">
              Practical nutrition information for farmers who want healthier animals and more predictable results.
            </p>
            {["Calf and dairy nutrition", "Feeding and water management", "Feed management and supplements", "Everyday animal-care principles"].map(
              (item) => (
                <p key={item} className="mt-3 text-sm">
                  <span className="mr-2 text-[#c8a05c]">✓</span>
                  {item}
                </p>
              )
            )}
            <Link href="/training" className="mt-6 inline-flex w-max rounded-[10px] bg-farm-gold-light px-4 py-3 text-sm font-extrabold text-[#26311f]">
              Explore farm knowledge →
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-farm-cream py-16">
        <div className="mx-auto grid max-w-[1240px] gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-5">
          {topics.map(([title, copy]) => (
            <article key={title} className="rounded-[15px] border border-farm-line bg-white p-5">
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm text-farm-muted">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
