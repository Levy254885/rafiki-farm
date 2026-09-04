import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts } from "@/lib/data";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return getPublishedPosts().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return { title: post.seoTitle || post.title, description: post.seoDescription || post.excerpt };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getPublishedPosts().filter((item) => item.id !== post.id).slice(0, 2);

  return (
    <article className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-5">
        <Link href="/blog" className="text-sm text-farm-green">
          ← Blog
        </Link>
        <p className="mt-4 text-[11px] font-black uppercase tracking-[2px] text-farm-green">{post.category}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{post.title}</h1>
        <p className="mt-2 text-sm text-farm-muted">
          {post.author} · {new Date(post.publishedAt).toLocaleDateString("en-KE")}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.featuredImage} alt={post.title} className="mt-6 h-80 w-full rounded-2xl object-cover" />
        <p className="mt-6 text-lg">{post.excerpt}</p>
        <p className="mt-4">{post.content}</p>
        <a
          href={whatsappLink(generalEnquiryMessage())}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-[10px] bg-farm-green px-4 py-3 text-sm font-extrabold text-white"
        >
          Talk to Rafiki Farm on WhatsApp ↗
        </a>
        {related.length ? (
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Related articles</h2>
            <div className="mt-4 grid gap-3">
              {related.map((item) => (
                <Link key={item.id} href={`/blog/${item.slug}`} className="font-bold text-farm-green">
                  {item.title} →
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
