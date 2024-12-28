'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from './page.module.css';
import { en } from './locales/en';
import { zh } from './locales/zh';
import Hero from './components/Hero/Hero';
import Collections from './components/Collections/Collections';
import Sidebar from './components/Sidebar/Sidebar';
import Featured from './components/Featured/Featured';
import Latest from './components/Latest/Latest';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const heroSection = document.querySelector('[data-hero]');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      setIsHeroVisible(rect.bottom > 0);
    }
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    return () => {
      body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const t = language === 'zh' ? zh : en;

  return (
    <main className={styles.main}>
      <Sidebar 
        t={t}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isHeroVisible={isHeroVisible}
        language={language}
        setLanguage={setLanguage}
      />

      <Hero t={t} />

      <Collections t={t} />

      <Featured t={t} />

      <Latest t={t} />

      <Services t={t} />

      <Footer t={t}>
        <LanguageSelector 
          language={language}
          setLanguage={setLanguage}
        />
      </Footer>
    </main>
  );
}
