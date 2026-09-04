export function money(amount: number, currency = "KES") {
  return `${currency} ${Number(amount).toLocaleString("en-KE")}`;
}

export function featuredImage(images?: { url: string; featured?: boolean }[]) {
  if (!images?.length) return "/window.svg";
  return images.find((img) => img.featured)?.url ?? images[0].url;
}
