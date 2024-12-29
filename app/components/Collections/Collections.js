'use client';
import Image from 'next/image';
import styles from './Collections.module.css';

export default function Collections({ t }) {
  return (
    <section className={styles.collections}>
      <div className={styles.collectionGrid}>
        <article className={styles.collectionItem}>
          <div className={styles.collectionImage}>
            <Image
              src="/images/adf42d26-151b-46f3-a7a5-421ca8e77c51_0.jpeg"
              alt="Classic Collection"
              width={400}
              height={400}
              className={styles.collectionImg}
            />
          </div>
          <div className={styles.collectionInfo}>
            <h3>{t.collections.iconic.title}</h3>
            <p>{t.collections.iconic.action}</p>
          </div>
        </article>
        <article className={styles.collectionItem}>
          <div className={styles.collectionImage}>
            <Image
              src="/images/6b910f4e-e430-452f-9386-70353bb9754c_0.jpeg"
              alt="Art Collection"
              width={400}
              height={400}
              className={styles.collectionImg}
            />
          </div>
          <div className={styles.collectionInfo}>
            <h3>{t.collections.artycapucines.title}</h3>
            <p>{t.collections.artycapucines.action}</p>
          </div>
        </article>
      </div>
    </section>
  );
} 