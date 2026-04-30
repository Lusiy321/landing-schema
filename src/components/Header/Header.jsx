import { useState, useEffect } from "react";
import { content } from "../../config/content";
import styles from "./Header.module.css";

export default function Header() {
  const { header } = content;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href={header.logo.href} className={styles.logo}>
          <span className={styles.logoText}>{header.logo.text}</span>
          <span className={styles.logoSub}>{header.logo.subtitle}</span>
        </a>
        <a href={header.ctaButton.href} className={`btn-primary ${styles.cta}`}>
          {header.ctaButton.text}
        </a>
      </div>
    </header>
  );
}
