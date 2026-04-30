import { content } from "../../config/content";
import styles from "./Features.module.css";

export default function Features() {
  const { features } = content;

  return (
    <section className={`section ${styles.section}`} id="features">
      <div className="container">
        <div className={styles.header}>
          <h2 className={`section-title ${styles.title}`}>{features.title}</h2>
          <p className={`section-description ${styles.desc}`}>
            {features.description}
          </p>
        </div>
        <div className={styles.grid}>
          {features.items.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.num}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
