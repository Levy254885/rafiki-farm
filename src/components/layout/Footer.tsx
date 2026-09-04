import Link from "next/link";
import { defaultSettings } from "@/lib/seed";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#062b16] px-4 pb-5 pt-14 text-[#d5e0d7] sm:px-5">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-3 font-extrabold text-white">
            <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-white">🌿</span>
            <span>
              RAFIKI FARM
              <small className="block text-[10px] font-bold tracking-[1.2px] text-[#9db1a2]">QUALITY • CARE • GROWTH</small>
            </span>
          </div>
          <p className="max-w-xs text-[13px] text-[#9db1a2]">
            Quality livestock, farm products and practical farming knowledge — with people at the heart of the farm.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-white">Explore</h4>
          <Link className="mb-2 block text-[13px] text-[#afc0b4]" href="/about">About us</Link>
          <Link className="mb-2 block text-[13px] text-[#afc0b4]" href="/livestock">Livestock</Link>
          <Link className="mb-2 block text-[13px] text-[#afc0b4]" href="/products">Products</Link>
          <Link className="mb-2 block text-[13px] text-[#afc0b4]" href="/training">Training</Link>
        </div>
        <div>
          <h4 className="mb-2 text-white">Knowledge</h4>
          <Link className="mb-2 block text-[13px] text-[#afc0b4]" href="/nutrition">Nutrition</Link>
          <Link className="mb-2 block text-[13px] text-[#afc0b4]" href="/blog">Blog</Link>
          <Link className="mb-2 block text-[13px] text-[#afc0b4]" href="/gallery">Gallery</Link>
        </div>
        <div>
          <h4 className="mb-2 text-white">Contact</h4>
          <Link className="mb-2 block text-[13px] text-[#afc0b4]" href="/contact">Contact the farm</Link>
          <a className="mb-2 block text-[13px] text-[#afc0b4]" href={whatsappLink("Hello Rafiki Farm.")} target="_blank" rel="noreferrer">WhatsApp</a>
          <p className="text-[13px] text-[#afc0b4]">{defaultSettings.phone}</p>
          <p className="text-[13px] text-[#afc0b4]">{defaultSettings.location}</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1240px] justify-between border-t border-white/10 pt-4 text-[11px] text-[#91a398]">
        <span>© 2026 Rafiki Farm. All rights reserved.</span>
        <span>Quality livestock. Better farming.</span>
      </div>
    </footer>
  );
}
