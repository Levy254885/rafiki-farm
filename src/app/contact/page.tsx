import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { defaultSettings } from "@/lib/seed";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Rafiki Farm in Samaru, Murang'a, Kenya.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <p className="text-[11px] font-black uppercase tracking-[2px] text-farm-green">Contact us</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Come say hello.</h1>
        <p className="mt-2 max-w-xl text-farm-muted">
          For livestock enquiries, product availability, training and general farm questions.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-[15px] border border-farm-line bg-white p-6">
            <h2 className="text-xl font-bold">Rafiki Farm</h2>
            <p className="text-sm text-farm-muted">{defaultSettings.address}</p>
            <p className="mt-3">☎ {defaultSettings.phone}</p>
            <p>✉ {defaultSettings.email}</p>
            <p>{defaultSettings.openingHours}</p>
            <a
              href={whatsappLink(generalEnquiryMessage())}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-[10px] bg-farm-green px-4 py-3 text-sm font-extrabold text-white"
            >
              WhatsApp the farm ↗
            </a>
            <div className="mt-6 min-h-[180px] rounded-xl bg-farm-cream p-4 text-sm text-farm-muted">
              Google Maps can be embedded here once the exact farm coordinates are confirmed. Current location:
              {` ${defaultSettings.location}.`}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
