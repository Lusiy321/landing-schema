import { useState } from "react";
import { content } from "../../config/content";
import styles from "./Testimonials.module.css";

function StarRating({ count = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 1.5l1.75 3.5 3.87.56-2.81 2.73.66 3.85L8 10.35l-3.47 1.79.66-3.85L2.38 5.56l3.87-.56L8 1.5z"
            fill="#f5a623"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { testimonials } = content;
  const [active, setActive] = useState(0);
  const total = testimonials.items.length;
  const item = testimonials.items[active];

  const prev = () => setActive((active - 1 + total) % total);
  const next = () => setActive((active + 1) % total);

  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <h2 className={`section-title ${styles.title}`}>
            {testimonials.title}
          </h2>
          <p className={`section-description ${styles.desc}`}>
            {testimonials.description}
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

        <div className={styles.card}>
          <div className={styles.reviewer}>
            <div className={styles.avatarWrap}>
              <img
                src={item.avatar}
                alt={item.name}
                className={styles.avatar}
              />
            </div>
            <div>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.role}>{item.role}</div>
            </div>
          </div>

          <StarRating count={item.rating} />

          <p className={styles.quote}>{item.text}</p>

          <div className={styles.clutchRow}>
            <span className={styles.verified}>✓ Verified Review</span>
            <a
              href={item.clutchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.clutchLink}
            >
              Read on Clutch →
            </a>
          </div>
          <div className={styles.poweredBy}>Powered by Clutch</div>
        </div>

        <div className={styles.dots}>
          {testimonials.items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
