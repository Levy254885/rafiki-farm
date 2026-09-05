import type { Metadata } from "next";
import LivestockGrid from "@/components/livestock/LivestockGrid";
import LivestockPageIntro from "@/components/livestock/LivestockPageIntro";
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
        <LivestockPageIntro />
        <div className="mt-8">
          <LivestockGrid items={items} />
        </div>
      </div>
    </section>
  );
}
