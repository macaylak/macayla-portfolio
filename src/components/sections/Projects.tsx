import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../../data/portfolio";
import ImageLightbox from "../ui/ImageLightbox";

export default function Projects() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">Projects</h2>
        </div>

        <div className="cardsGrid">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              className="card cardPad projectCard"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="projectTop">
                <div className="projectHead">
                  <h3 className="h3">{p.title}</h3>

                  <div className="projectMetaRow">
                    <p className="p projectMeta">{p.meta}</p>
                  </div>

                  {p.highlight && (
                    <div className="projectHighlightRow">
                      <span className="projectHighlightChip" title={p.highlight}>
                        {p.highlight}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <p className="p" style={{ marginTop: 12 }}>
                {p.description}
              </p>

              {/* ✅ Clickable images */}
              {p.images?.length ? (
                <div className="projImages">
                  {p.images.map((img) => (
                    <button
                      key={img.src}
                      type="button"
                      className="projMediaBtn"
                      onClick={() => setActiveImage({ src: img.src, alt: img.alt })}
                      aria-label={`Open image: ${img.alt}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className={`projImage ${img.fit === "contain" ? "projImageContain" : ""}`}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              ) : null}

              <ul className="list" style={{ marginTop: 12 }}>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="tagRow" style={{ marginTop: 12 }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              {p.links?.length ? (
                <div className="btnRow" style={{ marginTop: 14 }}>
                  {p.links.map((l) => (
                    <a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>

      {activeImage && (
        <ImageLightbox
          src={activeImage.src}
          alt={activeImage.alt}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
}