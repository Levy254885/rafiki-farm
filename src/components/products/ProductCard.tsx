import Link from "next/link";
import type { Product } from "@/types";
import { featuredImage, money } from "@/lib/format";
import { productEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  const price = money(product.price, product.currency);
  return (
    <article className="overflow-hidden rounded-[15px] border border-farm-line bg-white">
      <div className="relative h-[180px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={featuredImage(product.images)} alt={product.name} className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-md bg-[#eaf5ec] px-2 py-1 text-[10px] font-black text-farm-green">{product.availability.toUpperCase()}</span>
      </div>
      <div className="p-4">
        <p className="text-[11px] text-farm-muted">{product.category}</p>
        <h3 className="text-[17px] font-bold">{product.name}</h3>
        <p className="mt-1 text-[12px] text-farm-muted">{product.shortDescription}</p>
        <p className="my-3 text-lg font-black text-farm-green-dark">{price} <small className="text-[10px] font-semibold">{product.unit}</small></p>
        <div className="flex gap-2">
          <Link href={`/products/${product.slug}`} className="flex-1 rounded-[10px] border border-[#bdd0c2] px-2 py-2 text-center text-[11px] font-extrabold text-farm-green">View product</Link>
          <a href={whatsappLink(productEnquiryMessage(product.name, price, product.unit))} target="_blank" rel="noreferrer" className="flex-1 rounded-[10px] bg-farm-green px-2 py-2 text-center text-[11px] font-extrabold text-white">WhatsApp ↗</a>
        </div>
      </div>
    </article>
  );
}
