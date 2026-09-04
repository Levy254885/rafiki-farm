"use client";

import { useMemo, useState } from "react";
import type { Livestock } from "@/types";
import { livestockCategories } from "@/lib/data";
import LivestockCard from "./LivestockCard";

export default function LivestockGrid({ items }: { items: Livestock[] }) {
  const [category, setCategory] = useState("All Animals");
  const list = useMemo(
    () => (category === "All Animals" ? items : items.filter((item) => item.category === category)),
    [category, items]
  );

  return (
    <>
      <div className="mb-6 flex gap-2 overflow-auto pb-2">
        {livestockCategories.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)} className={`whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-extrabold ${cat === category ? "border-farm-green bg-farm-green text-white" : "border-farm-line bg-white"}`}>
            {cat}
          </button>
        ))}
      </div>
      {list.length ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((animal) => (
            <LivestockCard key={animal.id} animal={animal} />
          ))}
        </div>
      ) : (
        <p className="text-farm-muted">No livestock currently available in this category.</p>
      )}
    </>
  );
}
