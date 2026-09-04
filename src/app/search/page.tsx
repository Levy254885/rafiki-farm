"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  getPublishedLivestock,
  getPublishedPosts,
  getPublishedProducts,
  getPublishedTraining,
} from "@/lib/data";

export default function SearchPage() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const query = q.toLowerCase().trim();
    if (!query) return [];
    return [
      ...getPublishedLivestock().map((item) => ({
        type: "Livestock",
        title: item.name,
        desc: `${item.breed} · ${item.category}`,
        href: `/livestock/${item.slug}`,
      })),
      ...getPublishedProducts().map((item) => ({
        type: "Product",
        title: item.name,
        desc: item.category,
        href: `/products/${item.slug}`,
      })),
      ...getPublishedPosts().map((item) => ({
        type: "Blog",
        title: item.title,
        desc: item.category,
        href: `/blog/${item.slug}`,
      })),
      ...getPublishedTraining().map((item) => ({
        type: "Training",
        title: item.title,
        desc: "Training & Knowledge",
        href: `/training/${item.slug}`,
      })),
    ].filter((item) => `${item.title} ${item.desc}`.toLowerCase().includes(query));
  }, [q]);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-5">
        <h1 className="text-3xl font-semibold">Search Rafiki Farm</h1>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search livestock, products, training or articles..."
          className="mt-6 w-full rounded-lg border border-[#d7ded8] px-4 py-3"
        />
        <div className="mt-6">
          {!q ? (
            <p className="text-farm-muted">Start typing to search the farm catalogue and knowledge pages.</p>
          ) : results.length ? (
            results.map((item) => (
              <Link key={item.href} href={item.href} className="block border-b border-farm-line py-3">
                <div className="text-[11px] text-farm-muted">{item.type}</div>
                <b>{item.title}</b>
                <div className="text-sm text-farm-muted">{item.desc}</div>
              </Link>
            ))
          ) : (
            <p className="text-farm-muted">No results found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
