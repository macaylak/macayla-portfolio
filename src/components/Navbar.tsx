import { useEffect, useMemo, useState } from "react";
import { scrollToId } from "../utils/scroll";
import { Sun, Moon, Menu, X } from "lucide-react";
import { toggleMode } from "../theme";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (best?.target?.id) setActive(best.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.2, 0.35] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header className="navWrap" data-open={open ? "true" : "false"}>
        <div className="container navInner">
          <button className="logoBtn" onClick={() => go("home")} type="button">
            MK<span className="logoDot">.</span>
          </button>

          {/* Desktop */}
          <nav className="navDesktop" aria-label="Primary navigation">
            <div className="navPill">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  className={`navLink ${active === s.id ? "navLinkActive" : ""}`}
                  type="button"
                >
                  {s.label}
                </button>
              ))}
            </div>

            <button className="modeSwitch" onClick={toggleMode} type="button" aria-label="Toggle light/dark mode">
              <span className="modeThumb" aria-hidden="true" />
              <span className="modeIconLeft" aria-hidden="true">
                <Moon size={16} />
              </span>
              <span className="modeIconRight" aria-hidden="true">
                <Sun size={16} />
              </span>
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="navMobileBtn"
            onClick={() => setOpen((v) => !v)}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <button
        className={`navBackdrop ${open ? "navBackdropOpen" : ""}`}
        onClick={() => setOpen(false)}
        aria-label="Close menu"
        type="button"
      />

      {/* Drawer */}
      <aside className={`navDrawer ${open ? "navDrawerOpen" : ""}`} aria-hidden={!open}>
        <div className="navDrawerCard">
          <div className="navDrawerTop">
            <div className="navDrawerTitle">Menu</div>

            <button className="modeSwitch modeSwitch--sm" onClick={toggleMode} type="button" aria-label="Toggle mode">
              <span className="modeThumb" aria-hidden="true" />
              <span className="modeIconLeft" aria-hidden="true">
                <Moon size={14} />
              </span>
              <span className="modeIconRight" aria-hidden="true">
                <Sun size={14} />
              </span>
            </button>
          </div>

          <div className="navMobileDivider" />

          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`navMobileLink ${active === s.id ? "navMobileLinkActive" : ""}`}
              onClick={() => go(s.id)}
              type="button"
            >
              <span>{s.label}</span>
              <span className="navBullet" aria-hidden="true">
                {active === s.id ? "•" : ""}
              </span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}