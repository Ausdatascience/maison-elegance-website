'use client';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero({ t }) {
  return (
    <section className={styles.hero} data-hero>
      <div className={styles.heroBackground}>
        <Image
          src="/images/hero-bg.svg"
          alt="Background"
          fill
          priority
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {t.hero.title}
        </h1>
        <p className={styles.heroSubtitle}>
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
} 