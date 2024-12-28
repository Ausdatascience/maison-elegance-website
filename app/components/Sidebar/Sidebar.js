'use client';
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
        <nav className={styles.sidebarNav}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            {t.nav.home}
          </a>
          <a href="#collections" onClick={() => setIsMenuOpen(false)}>
            {t.nav.collections}
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            {t.nav.about}
          </a>
          <a href="#sustainability" onClick={() => setIsMenuOpen(false)}>
            {t.nav.sustainability}
          </a>
          <a href="#stores" onClick={() => setIsMenuOpen(false)}>
            {t.nav.stores}
          </a>
        </nav>

        <div className={styles.sidebarInfo}>
          <h4>{t.sidebar.contact}</h4>
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