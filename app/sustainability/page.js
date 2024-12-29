'use client';
import { useState, useEffect } from 'react';
import { en } from '../locales/en';
import { zh } from '../locales/zh';
import Image from 'next/image';
import styles from './page.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

export default function JewelryPage() {
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
          <h1>{language === 'zh' ? '珠宝传承' : 'Jewelry Heritage'}</h1>
          <p className={styles.subtitle}>
            {language === 'zh' ? '匠心独运 · 世代传承' : 'Artistry & Legacy'}
          </p>
        </header>

        <section className={styles.showcase}>
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/3795e81a-efdc-40e9-999b-c14dbf6fc039_0.jpeg"
                  alt="Classic Necklace"
                  width={600}
                  height={600}
                  className={styles.image}
                />
              </div>
              <div className={styles.itemContent}>
                <h3>{language === 'zh' ? '皇室典藏' : 'Royal Collection'}</h3>
                <p>{language === 'zh' 
                  ? '灵感源自欧洲皇室珍品，每一件作品都凝聚着精湛工艺与尊贵气韵。' 
                  : 'Inspired by European royal treasures, each piece embodies exquisite craftsmanship and noble elegance.'}
                </p>
              </div>
            </div>

            <div className={styles.showcaseItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/55712b84-b739-4217-9438-d3f17756680c_0.jpeg"
                  alt="Gold Necklace"
                  width={600}
                  height={600}
                  className={styles.image}
                />
              </div>
              <div className={styles.itemContent}>
                <h3>{language === 'zh' ? '金艺臻品' : 'Golden Artistry'}</h3>
                <p>{language === 'zh'
                  ? '传承古老金艺工艺，结合现代设计美学，打造永恒典雅的奢华珍品。'
                  : 'Inheriting ancient gold craftsmanship, combined with modern design aesthetics to create timeless elegant treasures.'}
                </p>
              </div>
            </div>

            <div className={styles.showcaseItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/cb2cf07f-4595-4340-a259-8e71acc4dfda_0.jpeg"
                  alt="Diamond Ring"
                  width={600}
                  height={600}
                  className={styles.image}
                />
              </div>
              <div className={styles.itemContent}>
                <h3>{language === 'zh' ? '钻石臻藏' : 'Diamond Legacy'}</h3>
                <p>{language === 'zh'
                  ? '甄选世界顶级钻石，以非凡工艺镶嵌，成就永恒之作。'
                  : 'Selecting world-class diamonds, set with extraordinary craftsmanship to achieve timeless masterpieces.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.craftsmanship}>
          <h2>{language === 'zh' ? '匠心工艺' : 'Master Craftsmanship'}</h2>
          <p className={styles.description}>
            {language === 'zh'
              ? '每一件珠宝都经过严格的工艺流程，从设计构思到精心雕琢，从宝石甄选到精密镶嵌，都凝聚着我们对完美的不懈追求。我们的工艺大师们秉承百年传统，以精湛技艺将珍贵的原材料转化为永恒的艺术品。'
              : 'Each piece of jewelry undergoes a rigorous crafting process, from design conception to careful carving, from gem selection to precise setting, embodying our relentless pursuit of perfection. Our master craftsmen uphold century-old traditions, transforming precious materials into eternal works of art with exceptional skill.'}
          </p>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
} 