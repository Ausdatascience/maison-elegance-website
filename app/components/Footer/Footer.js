'use client';
import styles from './Footer.module.css';

export default function Footer({ t, language, setLanguage }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <h3>MAISON ÉLÉGANCE</h3>
          <p>{t.footer.brand.slogan}</p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerColumn}>
            <h4>{t.footer.contact.title}</h4>
            <a href={`tel:${t.footer.contact.phone}`}>{t.footer.contact.phone}</a>
            <a href={`mailto:${t.footer.contact.email}`}>{t.footer.contact.email}</a>
          </div>
          <div className={styles.footerColumn}>
            <h4>{t.footer.social.title}</h4>
            <a href="#instagram">{t.footer.social.instagram}</a>
            <a href="#wechat">{t.footer.social.wechat}</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>{t.footer.copyright}</p>
        <button onClick={() => setLanguage(prev => prev === 'zh' ? 'en' : 'zh')} className={styles.langSwitch}>
          {language === 'zh' ? 'English' : '中文'}
        </button>
      </div>
    </footer>
  );
} 