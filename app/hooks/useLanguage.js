import { useState } from 'react';
import { en } from '../locales/en';
import { zh } from '../locales/zh';

export function useLanguage() {
  const [language, setLanguage] = useState('en');
  const t = language === 'zh' ? zh : en;

  return { language, setLanguage, t };
} 