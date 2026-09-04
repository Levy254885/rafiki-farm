import { defaultSettings } from "@/lib/seed";

export function whatsappLink(message: string, number = defaultSettings.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function livestockEnquiryMessage(name: string, price: string, id?: string) {
  const idPart = id ? ` (${id})` : "";
  return `Hello Rafiki Farm, I am interested in the ${name}${idPart} listed at ${price}. Please confirm if it is still available.`;
}

export function productEnquiryMessage(name: string, price: string, unit?: string) {
  const unitPart = unit ? ` ${unit}` : "";
  return `Hello Rafiki Farm, I am interested in ${name} at ${price}${unitPart}. Please confirm availability.`;
}

export function generalEnquiryMessage() {
  return "Hello Rafiki Farm, I would like to enquire about your livestock and farm products.";
}
