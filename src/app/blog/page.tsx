import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Farm knowledge and articles from Rafiki Farm.",
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">From the farm</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Latest knowledge.</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="relative min-h-[300px] overflow-hidden rounded-[15px] text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.featuredImage} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="text-[10px] uppercase tracking-wide">{post.category}</span>
                <h2 className="text-2xl font-semibold leading-tight">{post.title}</h2>
                <p className="mt-1 text-xs text-white/80">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
