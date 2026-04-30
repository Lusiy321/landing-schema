import { useState } from "react";
import { content } from "../../config/content";
import styles from "./CaseStudies.module.css";

export default function CaseStudies() {
  const { caseStudies } = content;
  const [active, setActive] = useState(0);
  const total = caseStudies.items.length;
  const item = caseStudies.items[active];

  const prev = () => setActive((active - 1 + total) % total);
  const next = () => setActive((active + 1) % total);

  return (
    <section className={`section ${styles.section}`} id="case-studies">
      <div className="container">
        <div className={styles.header}>
          <h2 className={`section-title ${styles.title}`}>
            {caseStudies.title}
          </h2>
          <p className={`section-description ${styles.desc}`}>
            {caseStudies.description}
          </p>
          <div className={styles.navRow}>
            <button
              className="carousel-btn"
              onClick={prev}
              aria-label="Previous"
            >
              ←
            </button>
            <button className="carousel-btn" onClick={next} aria-label="Next">
              →
            </button>
          </div>
        </div>

        <div className={styles.slide}>
          <div className={styles.slideInfo}>
            <h3 className={styles.caseName}>{item.name}</h3>
            <div className={styles.stats}>
              {item.stats.map((stat, i) => (
                <div key={i} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.slideImage}>
            <img src={item.image} alt={`${item.name} — case study results`} />
          </div>
        </div>

        <div className={styles.dots}>
          {caseStudies.items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
