'use client';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar({ t, isMenuOpen, setIsMenuOpen, isHeroVisible, language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <>
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''} ${!isHeroVisible ? styles.dark : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <button
        className={styles.langSwitch}
        onClick={toggleLanguage}
        aria-label="Switch Language"
      >
        {language === 'en' ? '中' : 'En'}
      </button>

      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            {t.nav.home}
          </Link>
          <Link href="/collections" onClick={() => setIsMenuOpen(false)}>
            {t.nav.collections}
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            {t.nav.about}
          </Link>
          <Link href="/sustainability" onClick={() => setIsMenuOpen(false)}>
            {t.nav.sustainability}
          </Link>
          <Link href="/stores" onClick={() => setIsMenuOpen(false)}>
            {t.nav.stores}
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            {t.nav.contact}
          </Link>
        </nav>

        <div className={styles.contact}>
          <h3>{t.sidebar.contact}</h3>
          <p>{t.sidebar.email}</p>
          <p>{t.sidebar.address}</p>
          <p>{t.sidebar.phone}</p>
        </div>
      </div>

      <div 
        className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </>
  );
} 