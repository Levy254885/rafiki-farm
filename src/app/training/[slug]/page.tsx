import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedTraining, getTrainingBySlug } from "@/lib/data";

export function generateStaticParams() {
  return getPublishedTraining().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getTrainingBySlug(slug);
  if (!item) return { title: "Training" };
  return { title: item.title, description: item.description };
}

export default async function TrainingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getTrainingBySlug(slug);
  if (!item) notFound();

  return (
    <article className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-5">
        <Link href="/training" className="text-sm text-farm-green">
          ← Training
        </Link>
        <p className="mt-4 text-[11px] font-black uppercase tracking-[2px] text-farm-green">{item.category}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{item.title}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title} className="mt-6 h-72 w-full rounded-2xl object-cover" />
        <p className="mt-6 text-lg text-farm-muted">{item.description}</p>
        <p className="mt-4">{item.content}</p>
      </div>
    </article>
  );
}
