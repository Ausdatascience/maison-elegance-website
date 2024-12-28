'use client';
import styles from './Sidebar.module.css';

export default function Sidebar({ t, isMenuOpen, setIsMenuOpen, isHeroVisible }) {
  return (
    <>
      {/* Hamburger Button */}
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''} ${isHeroVisible ? styles.white : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar */}
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
          <p>{t.footer.contact.email}</p>
          <p>{t.sidebar.address}</p>
          <p>{t.footer.contact.phone}</p>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div 
        className={`${styles.sidebarOverlay} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </>
  );
} 