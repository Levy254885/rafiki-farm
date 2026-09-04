"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const existing = JSON.parse(localStorage.getItem("rafikiEnquiries") || "[]");
    existing.push({ ...data, date: new Date().toISOString(), status: "New" });
    localStorage.setItem("rafikiEnquiries", JSON.stringify(existing));
    form.reset();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[15px] border border-farm-line bg-white p-6">
        <h3 className="text-xl font-bold">Enquiry received</h3>
        <p className="mt-2 text-farm-muted">
          Thank you. The farm team can follow up by phone or WhatsApp. This demo stores the enquiry in your
          browser until Firebase is connected.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[15px] border border-farm-line bg-white p-6">
      <h3 className="text-xl font-bold">Send an enquiry</h3>
      <label className="mt-4 block text-[11px] font-black">Name</label>
      <input name="name" required className="mt-1 w-full rounded-lg border border-[#d7ded8] px-3 py-2.5" />
      <label className="mt-3 block text-[11px] font-black">Phone</label>
      <input name="phone" required className="mt-1 w-full rounded-lg border border-[#d7ded8] px-3 py-2.5" />
      <label className="mt-3 block text-[11px] font-black">Email</label>
      <input name="email" type="email" className="mt-1 w-full rounded-lg border border-[#d7ded8] px-3 py-2.5" />
      <label className="mt-3 block text-[11px] font-black">Subject</label>
      <input name="subject" required className="mt-1 w-full rounded-lg border border-[#d7ded8] px-3 py-2.5" />
      <label className="mt-3 block text-[11px] font-black">Message</label>
      <textarea name="message" required className="mt-1 min-h-[110px] w-full rounded-lg border border-[#d7ded8] px-3 py-2.5" />
      <button type="submit" className="mt-4 rounded-[10px] bg-farm-green px-4 py-3 text-sm font-extrabold text-white">
        Send enquiry
      </button>
    </form>
  );
}
