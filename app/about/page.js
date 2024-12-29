'use client';
import { useState, useEffect } from 'react';
import { en } from '../locales/en';
import { zh } from '../locales/zh';
import Image from 'next/image';
import styles from './page.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
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
          <h1>{language === 'zh' ? '品牌世家' : 'Our Heritage'}</h1>
          <p className={styles.subtitle}>
            {language === 'zh' ? '百年传承 · 匠心典范' : 'A Century of Excellence · Crafting Elegance'}
          </p>
        </header>

        <section className={styles.heritage}>
          <div className={styles.content}>
            <h2>{language === 'zh' ? '传承与创新' : 'Heritage & Innovation'}</h2>
            <p>
              {language === 'zh' 
                ? '始于1920年，MAISON ÉLÉGANCE延续近百年的精湛工艺，将传统技艺与现代设计完美融合。每一件作品都凝聚着我们对卓越品质的不懈追求，展现独特的艺术魅力。' 
                : 'Since 1920, MAISON ÉLÉGANCE has been a testament to exceptional craftsmanship, seamlessly blending traditional artistry with contemporary design. Each piece reflects our relentless pursuit of excellence and unique artistic charm.'}
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/3795e81a-efdc-40e9-999b-c14dbf6fc039_0.jpeg"
              alt="Heritage"
              width={800}
              height={800}
              className={styles.image}
            />
          </div>
        </section>

        <section className={`${styles.heritage} ${styles.reverse}`}>
          <div className={styles.content}>
            <h2>{language === 'zh' ? '匠心工艺' : 'Master Craftsmanship'}</h2>
            <p>
              {language === 'zh'
                ? '每一件珠宝都由我们的大师工匠精心打造，从选材到成品，都体现着对完美的执着追求。我们坚持采用最优质的材料，结合精湛的工艺，为您呈现卓越品质的艺术臻品。'
                : 'Each piece is meticulously crafted by our master artisans, embodying our dedication to perfection from material selection to final creation. We consistently use the finest materials combined with exceptional craftsmanship to present artistic masterpieces of outstanding quality.'}
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/55712b84-b739-4217-9438-d3f17756680c_0.jpeg"
              alt="Craftsmanship"
              width={800}
              height={800}
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.heritage}>
          <div className={styles.content}>
            <h2>{language === 'zh' ? '品牌理念' : 'Brand Philosophy'}</h2>
            <p>
              {language === 'zh'
                ? '我们秉持"臻于至善"的品牌理念，致力于创造永恒的奢华艺术品。每一件作品不仅是珠宝，更是一个传承故事，承载着对美的永恒追求。'
                : 'Guided by our philosophy of "Excellence in All", we are dedicated to creating timeless luxury artworks. Each piece is not merely jewelry, but a legacy story, carrying forward our eternal pursuit of beauty.'}
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/cb2cf07f-4595-4340-a259-8e71acc4dfda_0.jpeg"
              alt="Philosophy"
              width={800}
              height={800}
              className={styles.image}
            />
          </div>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
} 