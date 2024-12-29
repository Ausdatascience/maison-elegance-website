'use client';
import { useState, useEffect } from 'react';
import { en } from '../locales/en';
import { zh } from '../locales/zh';
import styles from './page.module.css';
import CollectionCard from './components/CollectionCard';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

export default function CollectionsPage() {
  const [language, setLanguage] = useState('zh');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const t = language === 'en' ? en : zh;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeroVisible(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collections = [
    {
      id: 'classic',
      image: '/images/adf42d26-151b-46f3-a7a5-421ca8e77c51_0.jpeg',
      titleZh: '经典系列',
      titleEn: 'Classic Collection',
      descZh: '传世之作，永恒典范',
      descEn: 'Timeless masterpieces'
    },
    {
      id: 'artistic',
      image: '/images/6b910f4e-e430-452f-9386-70353bb9754c_0.jpeg',
      titleZh: '艺术系列',
      titleEn: 'Artistic Collection',
      descZh: '创新设计，独特风格',
      descEn: 'Innovative designs'
    },
    {
      id: 'bespoke',
      image: '/images/349309b5-9628-479e-baee-9a25716ec162_0.jpeg',
      titleZh: '定制系列',
      titleEn: 'Bespoke Collection',
      descZh: '专属定制，独一无二',
      descEn: 'Exclusive customization'
    }
  ];

  return (
    <>
      <Sidebar 
        t={t} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        isHeroVisible={isHeroVisible}
        language={language}
        setLanguage={setLanguage}
      />
      
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>{language === 'zh' ? '臻品系列' : 'Fine Collections'}</h1>
          <p className={styles.subtitle}>
            {language === 'zh' ? '传承工艺 · 永恒之美' : 'Heritage Craftsmanship · Eternal Beauty'}
          </p>
        </header>
        
        <section className={styles.grid}>
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              image={collection.image}
              title={language === 'zh' ? collection.titleZh : collection.titleEn}
              description={language === 'zh' ? collection.descZh : collection.descEn}
              language={language}
            />
          ))}
        </section>
      </main>

      <Footer t={t} />
    </>
  );
} 