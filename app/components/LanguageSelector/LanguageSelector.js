'use client';
import { useEffect } from 'react';
import styles from './LanguageSelector.module.css';
import { getDefaultLanguage, toggleLanguage } from '../../utils/languageManager';

export default function LanguageSelector({ 
  language, 
  setLanguage,
  variant = 'footer',
  shortText = false
}) {
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
      className={`${styles.base} ${styles[variant]}`}
      onClick={handleLanguageToggle}
      aria-label="Toggle Language"
    >
      {shortText 
        ? (language === 'en' ? '中' : 'En')
        : (language === 'en' ? '中文' : 'EN')
      }
    </button>
  );
} 