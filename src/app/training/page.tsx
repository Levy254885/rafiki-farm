import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedTraining } from "@/lib/data";

export const metadata: Metadata = {
  title: "Training",
  description: "Practical training and farm knowledge from Rafiki Farm.",
};

export default function TrainingPage() {
  const items = getPublishedTraining();

  return (
    <section className="bg-farm-cream py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Training & knowledge</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Practical knowledge for the farm.</h1>
        <p className="mt-2 max-w-xl text-farm-muted">
          Simple, useful resources across livestock management, breeding, nutrition and farm records.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-[15px] border border-farm-line bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.title} className="h-[180px] w-full object-cover" />
              <div className="p-4">
                <p className="text-[11px] text-farm-muted">{item.category}</p>
                <h2 className="text-[17px] font-bold">{item.title}</h2>
                <p className="mt-1 text-xs text-farm-muted">{item.description}</p>
                <Link href={`/training/${item.slug}`} className="mt-3 inline-block text-sm font-extrabold text-farm-green">
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
