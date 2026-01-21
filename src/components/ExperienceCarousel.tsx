import { useState } from "react";
import { motion } from "framer-motion";
import type { ExperienceItem } from "../data/portfolio";
import ImageLightbox from "../components/ui/ImageLightbox";

export default function ExperienceCarousel({ items }: { items: ExperienceItem[] }) {
  const [index, setIndex] = useState(0);

  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const item = items[index];

  const images = item.images?.slice(0, 4) ?? [];
  const mediaCount = Math.min(images.length, 4);
  const tags = item.tags ?? [];

  return (
    <div className="expCarousel">
      <div className="expViewport">
        <motion.article
          key={index}
          className="card cardPad expCard"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {/* Header */}
          <div className="expTop">
            <div>
              <div className="expRole">{item.role}</div>
              <div className="p" style={{ marginTop: 4 }}>
                {item.org}
              </div>
            </div>
            <div className="expTime">{item.timeframe}</div>
          </div>

          {/* Body */}
          <div className="expBody">
            <div className="expContent">
              <ul className="list" style={{ marginTop: 12 }}>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {/* Tags directly under bullets (left column) */}
              {tags.length > 0 && (
                <div className="expTagsUnderText">
                  <div className="tagRow">
                    {tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {mediaCount > 0 && (
              <div className={`expMedia expMedia--${mediaCount}`}>
                {images.map((img) => (
                  <button
                    key={img.src}
                    className="expMediaBtn"
                    type="button"
                    onClick={() => setActiveImage({ src: img.src, alt: img.alt })}
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`expImage ${img.fit === "contain" ? "expImageContain" : ""}`}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.article>
      </div>

      {/* controls UNDER the card */}
      <div className="expCarouselBottom">
        <button className="btn" onClick={prev} aria-label="Previous experience">
          ← Prev
        </button>

        <div className="expDots" aria-label="Experience carousel position">
          {items.map((_, i) => (
            <button
              key={i}
              className={`expDot ${i === index ? "expDotActive" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to experience ${i + 1}`}
            />
          ))}
        </div>

        <button className="btn" onClick={next} aria-label="Next experience">
          Next →
        </button>
      </div>

      {activeImage && (
        <ImageLightbox
          src={activeImage.src}
          alt={activeImage.alt}
          onClose={() => setActiveImage(null)}
        />
      )}
    </div>
  );
}