import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LivestockCard from "@/components/livestock/LivestockCard";
import { getLivestockBySlug, getPublishedLivestock } from "@/lib/data";
import { featuredImage, money } from "@/lib/format";
import { livestockEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return getPublishedLivestock().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const animal = getLivestockBySlug(slug);
  if (!animal) return { title: "Livestock" };
  return {
    title: animal.name,
    description: animal.shortDescription,
  };
}

export default async function LivestockDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const animal = getLivestockBySlug(slug);
  if (!animal) notFound();

  const price = money(animal.price, animal.currency);
  const available = animal.availability === "Available";
  const related = getPublishedLivestock()
    .filter((item) => item.id !== animal.id)
    .slice(0, 4);

  return (
    <section className="py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <p className="text-sm text-farm-muted">
          <Link href="/livestock">Livestock</Link> / {animal.name}
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featuredImage(animal.images)}
            alt={animal.name}
            className="h-[370px] w-full rounded-[13px] object-cover"
          />
          <div>
            <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">
              {animal.category} · {animal.availability}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{animal.name}</h1>
            <p className="my-4 text-2xl font-black text-farm-green">{price}</p>
            <p className="text-sm text-farm-muted">
              {animal.breed} · {animal.gender} · {animal.age} · {animal.weight}
            </p>
            <p className="mt-4">{animal.description}</p>
            <p className="mt-4">
              <b>Health:</b> {animal.healthStatus}
              <br />
              <b>Vaccination:</b> {animal.vaccination}
              {animal.pregnancyStatus ? (
                <>
                  <br />
                  <b>Pregnancy:</b> {animal.pregnancyStatus}
                </>
              ) : null}
              {animal.lactationStatus ? (
                <>
                  <br />
                  <b>Lactation:</b> {animal.lactationStatus}
                </>
              ) : null}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={available ? whatsappLink(livestockEnquiryMessage(animal.name, price, animal.id)) : undefined}
                target="_blank"
                rel="noreferrer"
                className={`rounded-[10px] bg-farm-green px-5 py-3 text-sm font-extrabold text-white ${
                  available ? "" : "pointer-events-none opacity-45"
                }`}
              >
                Enquire on WhatsApp ↗
              </a>
              <Link
                href="/contact"
                className="rounded-[10px] border border-[#bdd0c2] px-5 py-3 text-sm font-extrabold text-farm-green"
              >
                Contact Rafiki Farm
              </Link>
            </div>
          </div>
        </div>

        <h2 className="mt-16 text-2xl font-semibold">Related livestock</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <LivestockCard key={item.id} animal={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
