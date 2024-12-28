'use client';
import Image from 'next/image';
import styles from './Latest.module.css';

export default function Latest({ t }) {
  return (
    <section className={styles.latest}>
      <div className={styles.latestGrid}>
        <div className={styles.latestImage}>
          <Image
            src="/images/latest-1.svg"
            alt="Latest Collection"
            width={1200}
            height={800}
            className={styles.latestImg}
          />
        </div>
        <div className={styles.latestContent}>
          <h2>{t.latest.title}</h2>
          <p>{t.latest.text}</p>
          <button className={styles.latestButton}>
            {t.latest.action}
          </button>
        </div>
      </div>
    </section>
  );
} 