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
        <div className={styles.brandLogo}>
          <Image
            src="/images/brand-logo.svg"
            alt="MAISON ÉLÉGANCE"
            width={400}
            height={120}
            priority
          />
        </div>
        <h1 className={styles.title}>{t.hero.title}</h1>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>
      </div>
    </section>
  );
} 