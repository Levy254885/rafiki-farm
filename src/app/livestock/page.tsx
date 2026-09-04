import type { Metadata } from "next";
import LivestockGrid from "@/components/livestock/LivestockGrid";
import { getPublishedLivestock } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Livestock",
  description: "Browse quality livestock from Rafiki Farm in Murang'a, Kenya.",
};

export default function LivestockPage() {
  const items = getPublishedLivestock();
  return (
    <section className="bg-farm-cream py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Our livestock</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Animals raised with purpose.</h1>
        <p className="mt-2 max-w-xl text-farm-muted">Explore the current catalogue. Availability and pricing can be updated from the farm dashboard.</p>
        <div className="mt-8">
          <LivestockGrid items={items} />
        </div>
      </div>
    </section>
  );
}
