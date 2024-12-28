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
import { useLanguage } from './hooks/useLanguage';
import { useMenuState } from './hooks/useMenuState';
import { useHeroVisibility } from './hooks/useHeroVisibility';

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useMenuState();
  const isHeroVisible = useHeroVisibility();

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
