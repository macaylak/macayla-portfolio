export type Theme = "pomegranate" | "plumbutter" | "winesmoke";
export type Mode = "dark" | "light";

export function setTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export function setMode(mode: Mode) {
  document.documentElement.setAttribute("data-mode", mode);
  localStorage.setItem("mode", mode);
}

export function toggleMode() {
  const current = (document.documentElement.getAttribute("data-mode") as Mode) || "dark";
  setMode(current === "dark" ? "light" : "dark");
}

export function initTheme() {
  const theme = (localStorage.getItem("theme") as Theme) ?? "pomegranate";
  const mode =
    (localStorage.getItem("mode") as Mode) ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  setTheme(theme);
  setMode(mode);
}