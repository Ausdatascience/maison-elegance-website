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
              src="/images/collection-1.svg"
              alt="Classic Collection"
              width={800}
              height={1067}
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
              src="/images/collection-2.svg"
              alt="Art Collection"
              width={800}
              height={1067}
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