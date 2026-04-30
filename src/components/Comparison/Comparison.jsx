import { content } from "../../config/content";
import styles from "./Comparison.module.css";

export default function Comparison() {
  const { comparison } = content;

  return (
    <section className={`section ${styles.section}`} id="comparison">
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>{comparison.title}</h2>
        <div className={styles.grid}>
          {/* Say Hello */}
          <div className={`${styles.col} ${styles.colGreen}`}>
            <h3 className={styles.colTitle}>{comparison.sayHello.title}</h3>
            <ul className={styles.list}>
              {comparison.sayHello.items.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={`${styles.icon} ${styles.iconCheck}`}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7l3.5 3.5L12 3.5"
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
          </div>

          {/* Say Goodbye */}
          <div className={`${styles.col} ${styles.colGray}`}>
            <h3 className={styles.colTitle}>{comparison.sayGoodbye.title}</h3>
            <ul className={styles.list}>
              {comparison.sayGoodbye.items.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={`${styles.icon} ${styles.iconX}`}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 2l8 8M10 2l-8 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
