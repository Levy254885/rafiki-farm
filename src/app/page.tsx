"use client";

import Link from "next/link";
import Hero from "@/components/home/Hero";
import LivestockCard from "@/components/livestock/LivestockCard";
import ProductCard from "@/components/products/ProductCard";
import {
  FadeUp,
  ScaleIn,
  Stagger,
  StaggerItem,
  TextReveal,
  HoverLift,
} from "@/components/motion/Reveal";
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
        <Stagger className="mx-auto grid max-w-[1240px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Quality livestock", "Healthy, carefully raised animals."],
            ["Proper nutrition", "Balanced care for productive stock."],
            ["Farm knowledge", "Practical information for farmers."],
            ["Responsible farming", "Careful and sustainable practices."],
          ].map(([title, copy]) => (
            <StaggerItem key={title}>
              <div className="flex gap-3 border-farm-line p-5 sm:border-r last:border-0">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-[#cbd8cd] text-farm-green">
                  ✓
                </div>
                <div>
                  <b className="block text-[13px]">{title}</b>
                  <span className="text-[11px] text-farm-muted">{copy}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 md:grid-cols-2 sm:px-5">
          <ScaleIn>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1100&q=85"
              alt="Green agricultural farm"
              className="h-[330px] w-full rounded-2xl object-cover md:h-[470px]"
            />
          </ScaleIn>
          <div>
            <FadeUp>
              <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">About Rafiki Farm</p>
            </FadeUp>
            <TextReveal
              text="Better farming starts with better care."
              className="mt-2 text-4xl font-semibold tracking-tight"
              as="h2"
              delay={0.08}
            />
            <FadeUp delay={0.15}>
              <p className="mt-4 text-farm-muted">
                Rafiki Farm is built around a simple idea: livestock thrive when farmers have quality animals, sound
                nutrition and practical knowledge.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <Link
                href="/about"
                className="mt-6 inline-flex rounded-[10px] bg-farm-green px-4 py-3 text-sm font-extrabold text-white transition hover:bg-farm-green-light"
              >
                Learn more about us →
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="bg-farm-cream py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
          <FadeUp>
            <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Our livestock</p>
          </FadeUp>
          <TextReveal
            text="Animals raised with purpose."
            className="mt-2 text-4xl font-semibold tracking-tight"
            as="h2"
          />
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {livestock.map((animal) => (
              <StaggerItem key={animal.id}>
                <HoverLift>
                  <LivestockCard animal={animal} />
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.1}>
            <Link
              href="/livestock"
              className="mt-8 inline-flex rounded-[10px] border border-[#bdd0c2] px-4 py-3 text-sm font-extrabold text-farm-green transition hover:bg-white"
            >
              View all livestock →
            </Link>
          </FadeUp>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
          <FadeUp>
            <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Farm products</p>
          </FadeUp>
          <TextReveal text="Good things from the farm." className="mt-2 text-4xl font-semibold tracking-tight" as="h2" />
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <HoverLift>
                  <ProductCard product={product} />
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-farm-cream py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
          <FadeUp>
            <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Training & knowledge</p>
          </FadeUp>
          <TextReveal
            text="Practical knowledge for the farm."
            className="mt-2 text-4xl font-semibold tracking-tight"
            as="h2"
          />
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {training.map((item) => (
              <StaggerItem key={item.id}>
                <HoverLift>
                  <article className="overflow-hidden rounded-[15px] border border-farm-line bg-white">
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
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
          <FadeUp>
            <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Farm gallery</p>
          </FadeUp>
          <TextReveal text="Life around Rafiki Farm." className="mt-2 text-4xl font-semibold tracking-tight" as="h2" />
          <Stagger className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((item) => (
              <StaggerItem key={item.id}>
                <HoverLift>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full rounded-[13px] object-cover md:h-52"
                  />
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp>
            <Link href="/gallery" className="mt-6 inline-flex text-sm font-extrabold text-farm-green">
              View gallery →
            </Link>
          </FadeUp>
        </div>
      </section>

      <section className="bg-farm-cream py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
          <FadeUp>
            <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">From the farm</p>
          </FadeUp>
          <TextReveal text="Latest knowledge." className="mt-2 text-4xl font-semibold tracking-tight" as="h2" />
          <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post.id}>
                <HoverLift>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block min-h-[300px] overflow-hidden rounded-[15px] text-white"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.featuredImage} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <span className="text-[10px] uppercase tracking-wide">{post.category}</span>
                      <h3 className="text-2xl font-semibold leading-tight">{post.title}</h3>
                    </div>
                  </Link>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-farm-green py-16 text-white">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center sm:px-5">
          <FadeUp>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[2px] text-[#bcd6c3]">Have a question?</p>
              <h2 className="text-4xl font-semibold tracking-tight">Let&apos;s talk farming.</h2>
              <p className="text-[#d5e4d8]">Ask about livestock, products, availability or practical farm guidance.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.12}>
            <a
              href={whatsappLink(generalEnquiryMessage())}
              target="_blank"
              rel="noreferrer"
              className="rounded-[10px] bg-farm-gold-light px-5 py-3 font-extrabold text-[#26311f] transition hover:brightness-105"
            >
              Chat on WhatsApp ↗
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
