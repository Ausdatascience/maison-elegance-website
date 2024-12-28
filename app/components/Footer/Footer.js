'use client';
import styles from './Footer.module.css';

export default function Footer({ t, children }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>{t.footer.brand}</h3>
          <p>{t.footer.tagline}</p>
        </div>
        <div className={styles.footerSection}>
          <h3>{t.footer.contact}</h3>
           <p>{t.footer.email}</p>
        </div>
        <div className={styles.footerSection}>
          <h3>{t.footer.social}</h3>
          <div className={styles.socialLinks}>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>{t.footer.copyright}</p>
        {children}
      </div>
    </footer>
  );
} 