'use client';
import styles from './Featured.module.css';

export default function Featured({ t }) {
  return (
    <section className={styles.featured}>
      <div className={styles.featuredContent}>
        <h2 className={styles.featuredTitle}>
          {t.featured.title}
        </h2>
        <p className={styles.featuredText}>
          {t.featured.text}
        </p>
        <button className={styles.featuredButton}>
          {t.featured.action}
        </button>
      </div>
    </section>
  );
} 