export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -78; // sticky nav height
  const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}