import { content } from "../../config/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const { footer } = content;

  return (
    <footer className={styles.footer} id="contacts">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <div className={styles.companyName}>{footer.companyName}</div>
            <div className={styles.tagline}>{footer.tagline}</div>
          </div>

          <div className={styles.contacts}>
            <a
              href={`mailto:${footer.contacts.email}`}
              className={styles.contactItem}
            >
              <span className={styles.contactLabel}>E.</span>
              {footer.contacts.email}
            </a>
            <a href={footer.contacts.phoneHref} className={styles.contactItem}>
              <span className={styles.contactLabel}>M.</span>
              {footer.contacts.phone}
            </a>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>A.</span>
              {footer.contacts.address}
            </div>
          </div>

          <div className={styles.right}>
            <a
              href={footer.ctaButton.href}
              className={`btn-primary ${styles.cta}`}
            >
              {footer.ctaButton.text}
            </a>
            <div className={styles.socials}>
              {footer.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
