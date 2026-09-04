"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { defaultSettings } from "@/lib/seed";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/livestock", label: "Our Livestock" },
  { href: "/products", label: "Farm Products" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/training", label: "Training" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-farm-line">
      <div className="bg-farm-green-dark text-[#dce9df] text-xs">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-2 sm:px-5">
          <span>Quality livestock. Better farming.</span>
          <div className="hidden gap-5 md:flex">
            <span>☎ {defaultSettings.phone}</span>
            <span>✉ {defaultSettings.email}</span>
            <span>📍 {defaultSettings.location}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between gap-4 px-4 sm:px-5">
        <Link href="/" className="flex items-center gap-3 font-extrabold tracking-tight">
          <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-farm-green text-xl text-farm-green">🌿</span>
          <span>
            RAFIKI FARM
            <small className="block text-[10px] font-bold tracking-[1.2px] text-farm-muted">QUALITY • CARE • GROWTH</small>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-[13px] font-bold lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "text-farm-green" : "text-[#273029] hover:text-farm-green"}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/search" className="grid h-10 w-10 place-items-center rounded-[10px] border border-farm-line bg-white" aria-label="Search">⌕</Link>
          <a className="hidden rounded-[10px] bg-farm-green px-4 py-3 text-sm font-extrabold text-white sm:inline-flex" href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <button className="grid h-10 w-10 place-items-center rounded-[10px] border border-farm-line lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Open menu">☰</button>
        </div>
      </div>
      {open ? (
        <nav className="grid gap-2 border-t border-farm-line bg-white px-5 py-3 lg:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 font-bold">{item.label}</Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
