import { content } from "../../config/content";
import styles from "./Stats.module.css";

export default function Stats() {
  const { stats } = content;

  return (
    <section className={`section ${styles.section}`} id="stats">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className={`section-title ${styles.title}`}>{stats.title}</h2>
            <p className={`section-description ${styles.desc}`}>
              {stats.description}
            </p>
            <div className={styles.numbers}>
              {stats.numbers.map((item, i) => (
                <div key={i} className={styles.numberItem}>
                  <div className={styles.numberValue}>{item.value}</div>
                  <div className={styles.numberLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageWrap}>
            <img
              src={stats.partnerImage.src}
              alt={stats.partnerImage.alt}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
