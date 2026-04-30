import { content } from "../../config/content";
import styles from "./Services.module.css";

export default function Services() {
  const { services } = content;

  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <div className={styles.grid}>
          {/* Left info */}
          <div className={styles.info}>
            <p className={styles.tagline}>{services.tagline}</p>
            <p className={styles.forNonprofits}>{services.subtitle}</p>
            <h2 className={`section-title ${styles.title}`}>
              {services.title}
            </h2>
          </div>

          {/* Card */}
          <div className={styles.card}>
            <div className={styles.cardBadge}>
              <span className={styles.badgePercent}>{services.badge}</span>
              <span className={styles.badgeNote}>{services.badgeNote}</span>
            </div>

            <ul className={styles.items}>
              {services.items.map((item, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.checkIcon}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.pricing}>
              <div className={styles.priceOld}>{services.priceFull}</div>
              <div className={styles.priceNew}>
                {services.priceDiscounted}
                <span>/mo</span>
              </div>
            </div>

            <a
              href={services.ctaButton.href}
              className={`btn-primary ${styles.cta}`}
            >
              {services.ctaButton.text}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
