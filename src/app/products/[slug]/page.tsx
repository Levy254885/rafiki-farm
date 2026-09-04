import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getPublishedProducts } from "@/lib/data";
import { featuredImage, money } from "@/lib/format";
import { productEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return getPublishedProducts().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const price = money(product.price, product.currency);

  return (
    <section className="py-14">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-4 md:grid-cols-2 sm:px-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={featuredImage(product.images)}
          alt={product.name}
          className="h-[370px] w-full rounded-[13px] object-cover"
        />
        <div>
          <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">{product.category}</p>
          <h1 className="mt-2 text-4xl font-semibold">{product.name}</h1>
          <p className="my-4 text-2xl font-black text-farm-green">
            {price} <span className="text-sm font-semibold text-farm-muted">{product.unit}</span>
          </p>
          <p>{product.description}</p>
          <p className="mt-3 text-sm text-farm-muted">Availability: {product.availability}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={whatsappLink(productEnquiryMessage(product.name, price, product.unit))}
              target="_blank"
              rel="noreferrer"
              className="rounded-[10px] bg-farm-green px-5 py-3 text-sm font-extrabold text-white"
            >
              Enquire on WhatsApp ↗
            </a>
            <Link href="/contact" className="rounded-[10px] border border-[#bdd0c2] px-5 py-3 text-sm font-extrabold text-farm-green">
              Contact the farm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
