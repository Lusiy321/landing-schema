import { useState } from "react";
import { content } from "../../config/content";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const { faq } = content;
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className={`section ${styles.section}`} id="faq">
      <div className="container">
        <div className={styles.header}>
          <h2 className={`section-title ${styles.title}`}>{faq.title}</h2>
          <p className={styles.subtitle}>{faq.subtitle}</p>
        </div>
        <div className={styles.list}>
          {faq.items.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{item.question}</span>
                <span className={styles.toggle} aria-hidden="true">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  {item.answer.split("\n").map((line, li) => (
                    <p key={li}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
