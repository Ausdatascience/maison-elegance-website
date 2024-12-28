'use client';
import { useEffect } from 'react';
import styles from './LanguageSelector.module.css';
import { getDefaultLanguage, toggleLanguage } from '../../utils/languageManager';

export default function LanguageSelector({ language, setLanguage }) {
  useEffect(() => {
    const defaultLang = getDefaultLanguage();
    setLanguage(defaultLang);
  }, [setLanguage]);

  const handleLanguageToggle = () => {
    const newLang = toggleLanguage(language);
    setLanguage(newLang);
  };

  return (
    <button 
      className={styles.languageButton}
      onClick={handleLanguageToggle}
      aria-label="Toggle Language"
    >
      {language === 'en' ? '中文' : 'EN'}
    </button>
  );
} 