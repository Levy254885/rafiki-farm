import Link from "next/link";
import type { Livestock } from "@/types";
import { featuredImage, money } from "@/lib/format";
import { livestockEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export default function LivestockCard({ animal }: { animal: Livestock }) {
  const price = money(animal.price, animal.currency);
  const available = animal.availability === "Available";

  return (
    <article className="overflow-hidden rounded-[15px] border border-farm-line bg-white transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,35,20,0.08)]">
      <div className="relative h-[215px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={featuredImage(animal.images)} alt={animal.name} className="h-full w-full object-cover" />
        <span className={`absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-black ${available ? "bg-[#eaf5ec] text-farm-green" : "bg-[#f8e8e8] text-[#a92e2e]"}`}>
          {animal.availability.toUpperCase()}
        </span>
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-[17px] font-bold">{animal.name}</h3>
        <p className="text-[11px] text-farm-muted">{animal.breed} · {animal.age} · {animal.gender}</p>
        <p className="my-3 text-lg font-black text-farm-green-dark">{price}</p>
        <div className="flex gap-2">
          <Link href={`/livestock/${animal.slug}`} className="flex-1 rounded-[10px] border border-[#bdd0c2] px-2 py-2 text-center text-[11px] font-extrabold text-farm-green">View details</Link>
          <a href={available ? whatsappLink(livestockEnquiryMessage(animal.name, price, animal.id)) : undefined} target="_blank" rel="noreferrer" className={`flex-1 rounded-[10px] bg-farm-green px-2 py-2 text-center text-[11px] font-extrabold text-white ${available ? "" : "pointer-events-none opacity-45"}`}>WhatsApp ↗</a>
        </div>
      </div>
    </article>
  );
}
