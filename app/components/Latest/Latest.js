'use client';
import Image from 'next/image';
import styles from './Latest.module.css';

export default function Latest({ t }) {
  return (
    <section className={styles.latest}>
      <div className={styles.latestGrid}>
        <div className={styles.latestImage}>
          <Image
            src="/images/349309b5-9628-479e-baee-9a25716ec162_0.jpeg"
            alt="Latest Collection"
            width={400}
            height={400}
            className={styles.latestImg}
          />
        </div>
        <div className={styles.latestContent}>
          <h2>{t.latest.title}</h2>
          <p>{t.latest.description}</p>
          <button className={styles.latestButton}>
            {t.latest.action}
          </button>
        </div>
      </div>
    </section>
  );
} 