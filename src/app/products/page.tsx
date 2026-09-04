import type { Metadata } from "next";
import ProductCard from "@/components/products/ProductCard";
import { getPublishedProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Farm Products",
  description: "Fresh milk, feed, manure and farm produce from Rafiki Farm.",
};

export default function ProductsPage() {
  const products = getPublishedProducts();
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Farm products</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Good things from the farm.</h1>
        <p className="mt-2 max-w-xl text-farm-muted">Selected farm products available directly through Rafiki Farm.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
