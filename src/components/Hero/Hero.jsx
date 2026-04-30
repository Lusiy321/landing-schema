import { content } from "../../config/content";
import styles from "./Hero.module.css";

export default function Hero() {
  const { hero, header } = content;

  return (
    <section className={styles.hero}>
      <div className={styles.banner}>
        <p className={styles.bannerBrand}>{header.logo.text}</p>
        <span className={styles.bannerSubtitle}>{header.logo.subtitle}</span>
      </div>

      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.badges}>
            <span className={styles.badge}>
              <span className={styles.badgeDesktopPrefix}>Special </span>
              {hero.badges[0]}
            </span>
            <span className={styles.badge}>{hero.badges[1]}</span>
            <span className={styles.badge}>
              <span
                className={styles.partnerLogo}
                style={{ backgroundImage: `url(${hero.googlePartnerLogo})` }}
                aria-label="Google Partner"
              />
            </span>
          </div>

          <h1 className={styles.title}>{hero.title}</h1>

          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: hero.description }}
          />

          <a
            href={hero.ctaButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            {hero.ctaButton.text}
            <span className={styles.ctaIcon} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
