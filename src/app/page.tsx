import Link from "next/link";
import Hero from "@/components/home/Hero";
import LivestockCard from "@/components/livestock/LivestockCard";
import ProductCard from "@/components/products/ProductCard";
import {
  getGallery,
  getPublishedLivestock,
  getPublishedPosts,
  getPublishedProducts,
  getPublishedTraining,
} from "@/lib/data";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export default function HomePage() {
  const livestock = getPublishedLivestock().filter((item) => item.featured).slice(0, 4);
  const products = getPublishedProducts().slice(0, 4);
  const training = getPublishedTraining();
  const posts = getPublishedPosts();
  const gallery = getGallery();

  return (
    <>
      <Hero />

      <section className="border-b border-farm-line bg-white">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Quality livestock", "Healthy, carefully raised animals."],
            ["Proper nutrition", "Balanced care for productive stock."],
            ["Farm knowledge", "Practical information for farmers."],
            ["Responsible farming", "Careful and sustainable practices."],
          ].map(([title, copy]) => (
            <div key={title} className="flex gap-3 border-farm-line p-5 sm:border-r last:border-0">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-[#cbd8cd] text-farm-green">✓</div>
              <div>
                <b className="block text-[13px]">{title}</b>
                <span className="text-[11px] text-farm-muted">{copy}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 md:grid-cols-2 sm:px-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1100&q=85"
            alt="Green agricultural farm"
            className="h-[330px] w-full rounded-2xl object-cover md:h-[470px]"
          />
          <div>
            <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">About Rafiki Farm</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">Better farming starts with better care.</h2>
            <p className="mt-4 text-farm-muted">
              Rafiki Farm is built around a simple idea: livestock thrive when farmers have quality animals, sound
              nutrition and practical knowledge.
            </p>
            <Link href="/about" className="mt-6 inline-flex rounded-[10px] bg-farm-green px-4 py-3 text-sm font-extrabold text-white">
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-farm-cream py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
          <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Our livestock</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight">Animals raised with purpose.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {livestock.map((animal) => (
              <LivestockCard key={animal.id} animal={animal} />
            ))}
          </div>
          <Link href="/livestock" className="mt-8 inline-flex rounded-[10px] border border-[#bdd0c2] px-4 py-3 text-sm font-extrabold text-farm-green">
            View all livestock →
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
          <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Farm products</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight">Good things from the farm.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-farm-cream py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
          <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Training & knowledge</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight">Practical knowledge for the farm.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {training.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-[15px] border border-farm-line bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className="h-[180px] w-full object-cover" />
                <div className="p-4">
                  <p className="text-[11px] text-farm-muted">{item.category}</p>
                  <h3 className="text-[17px] font-bold">{item.title}</h3>
                  <p className="mt-1 text-xs text-farm-muted">{item.description}</p>
                  <Link href={`/training/${item.slug}`} className="mt-3 inline-block text-sm font-extrabold text-farm-green">
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
          <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Farm gallery</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight">Life around Rafiki Farm.</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((item) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={item.id} src={item.image} alt={item.title} className="h-44 w-full rounded-[13px] object-cover md:h-52" />
            ))}
          </div>
          <Link href="/gallery" className="mt-6 inline-flex text-sm font-extrabold text-farm-green">
            View gallery →
          </Link>
        </div>
      </section>

      <section className="bg-farm-cream py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
          <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">From the farm</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight">Latest knowledge.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="relative min-h-[300px] overflow-hidden rounded-[15px] text-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.featuredImage} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <span className="text-[10px] uppercase tracking-wide">{post.category}</span>
                  <h3 className="text-2xl font-semibold leading-tight">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-farm-green py-16 text-white">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center sm:px-5">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[2px] text-[#bcd6c3]">Have a question?</p>
            <h2 className="text-4xl font-semibold tracking-tight">Let&apos;s talk farming.</h2>
            <p className="text-[#d5e4d8]">Ask about livestock, products, availability or practical farm guidance.</p>
          </div>
          <a
            href={whatsappLink(generalEnquiryMessage())}
            target="_blank"
            rel="noreferrer"
            className="rounded-[10px] bg-farm-gold-light px-5 py-3 font-extrabold text-[#26311f]"
          >
            Chat on WhatsApp ↗
          </a>
        </div>
      </section>
    </>
  );
}
