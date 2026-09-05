import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { defaultSettings } from "@/lib/seed";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rafiki Farm in Naromoru, Nyeri County, Kenya.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 md:grid-cols-2 sm:px-5">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Contact</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Visit or message the farm.</h1>
          <p className="mt-3 text-farm-muted">
            Rafiki Farm is located in <strong className="text-farm-ink">Naromoru, Nyeri County, Kenya</strong>.
            Reach us by phone, WhatsApp, or the form — we respond as soon as we can during farm hours.
          </p>

          <div className="mt-6 space-y-3 rounded-2xl border border-farm-line bg-farm-cream p-5">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[1.5px] text-farm-green">Farm location</p>
              <p className="mt-1 text-lg font-bold text-farm-ink">Naromoru, Nyeri County</p>
              <p className="text-sm text-farm-muted">{defaultSettings.address}</p>
            </div>
            <p className="text-sm">
              ☎ <a className="font-semibold text-farm-green" href={`tel:${defaultSettings.phone.replace(/\s/g, "")}`}>{defaultSettings.phone}</a>
            </p>
            <p className="text-sm">
              ✉ <a className="font-semibold text-farm-green" href={`mailto:${defaultSettings.email}`}>{defaultSettings.email}</a>
            </p>
            <p className="text-sm text-farm-muted">{defaultSettings.openingHours}</p>
            <a
              href={whatsappLink(generalEnquiryMessage())}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-[10px] bg-farm-green px-4 py-2.5 text-sm font-extrabold text-white"
            >
              Chat on WhatsApp ↗
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-farm-line shadow-sm">
            <div className="border-b border-farm-line bg-white px-4 py-3">
              <p className="text-[11px] font-black uppercase tracking-[1.5px] text-farm-green">Map — Naromoru, Nyeri County</p>
              <p className="text-xs text-farm-muted">Farm area marked on the map below</p>
            </div>
            <div className="relative aspect-[16/11] w-full bg-[#e8efe9]">
              <iframe
                title="Rafiki Farm location — Naromoru, Nyeri County, Kenya"
                src="https://maps.google.com/maps?q=Naromoru,+Nyeri+County,+Kenya&z=13&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-farm-line bg-white px-4 py-3">
              <p className="text-xs text-farm-muted">
                <span className="font-bold text-farm-ink">📍 Naromoru</span> · Nyeri County, Kenya
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Naromoru,+Nyeri+County,+Kenya"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-extrabold text-farm-green"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
