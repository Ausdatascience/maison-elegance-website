'use client';
import { CardFlip } from 'react-accordion-core';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [flippedCards1, setFlippedCards1] = useState(new Set());
  const [flippedCards2, setFlippedCards2] = useState(new Set());
  const [language, setLanguage] = useState('zh');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleCardClick = (cardIndex, groupNumber) => {
    if (!mounted) return;
    
    const setFlippedCards = groupNumber === 1 ? setFlippedCards1 : setFlippedCards2;
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardIndex)) {
        newSet.delete(cardIndex);
      } else {
        newSet.add(cardIndex);
      }
      return newSet;
    });
  };

  const toggleLanguage = () => {
    if (!mounted) return;
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const content = {
    zh: {
      brandTitle: "MAISON ÉLÉGANCE",
      brandSubtitle: "传承 · 创新 · 卓越",
      sectionTitles: {
        essence: "品牌精髓",
        collection: "臻选系列"
      },
      cardsGroup1: [
        {
          title: "匠心工艺",
          details: "百年传承，精湛工艺，每件作品都是匠心独运的艺术品。"
        },
        {
          title: "创新设计",
          details: "融合当代美学，突破传统界限，缔造永恒经典。"
        },
        {
          title: "臻选材质",
          details: "严选全球顶级原料，以至臻品质打造尊贵体验。"
        },
        {
          title: "独特风尚",
          details: "彰显个性魅力，演绎专属格调，定义时尚品味。"
        },
        {
          title: "环球视野",
          details: "汇聚全球灵感，跨越文化边界，演绎当代奢华。"
        },
        {
          title: "至臻服务",
          details: "专属定制体验，尊享一对一贴心服务。"
        }
      ],
      cardsGroup2: [
        {
          title: "2024春夏系列",
          details: "灵感源自自然与艺术，演绎轻奢优雅新风尚。"
        },
        {
          title: "限量典藏",
          details: "珍稀限量发售，独特编号收藏，尊享稀缺价值。"
        },
        {
          title: "艺术合作",
          details: "携手全球艺术大师，打造独特艺术臻品。"
        },
        {
          title: "可持续发展",
          details: "创新环保工艺，引领可持续时尚未来。"
        },
        {
          title: "个性定制",
          details: "量身定制专属方案，成就独一无二的您。"
        },
        {
          title: "品牌传承",
          details: "传承品牌精神，演绎现代奢华新篇章。"
        }
      ]
    },
    en: {
      brandTitle: "MAISON ÉLÉGANCE",
      brandSubtitle: "Heritage · Innovation · Excellence",
      sectionTitles: {
        essence: "Brand Essence",
        collection: "Premium Collections"
      },
      cardsGroup1: [
        {
          title: "Craftsmanship",
          details: "A century of heritage, exquisite craftsmanship, each piece is an artisanal masterpiece."
        },
        {
          title: "Innovative Design",
          details: "Blending contemporary aesthetics with tradition to create timeless classics."
        },
        {
          title: "Premium Materials",
          details: "Carefully selected global materials for an exceptional luxury experience."
        },
        {
          title: "Unique Style",
          details: "Express individual charm and define fashion taste with distinctive elegance."
        },
        {
          title: "Global Vision",
          details: "Gathering global inspiration, transcending cultural boundaries."
        },
        {
          title: "Premium Service",
          details: "Exclusive customization with personalized one-on-one service."
        }
      ],
      cardsGroup2: [
        {
          title: "2024 Spring/Summer",
          details: "Inspired by nature and art, presenting new elegant luxury style."
        },
        {
          title: "Limited Edition",
          details: "Rare limited releases with unique numbering for collectors."
        },
        {
          title: "Artistic Collaboration",
          details: "Partnering with global artists to create unique masterpieces."
        },
        {
          title: "Sustainability",
          details: "Innovative eco-friendly processes leading sustainable fashion future."
        },
        {
          title: "Personalization",
          details: "Tailored solutions to make you truly unique."
        },
        {
          title: "Brand Heritage",
          details: "Carrying forward brand spirit into modern luxury."
        }
      ]
    }
  };

  const currentContent = content[language];

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.languageSwitch}>
          <button onClick={toggleLanguage} className={styles.langButton}>
            {language === 'zh' ? 'English' : '中文'}
          </button>
        </div>

        <header className={styles.header}>
          <h1 className={styles.brandTitle}>{currentContent.brandTitle}</h1>
          <p className={styles.brandSubtitle}>{currentContent.brandSubtitle}</p>
        </header>

        <div className={styles.cardSection}>
          <h2 className={styles.sectionTitle}>{currentContent.sectionTitles.essence}</h2>
          <CardFlip 
            cards={currentContent.cardsGroup1}
            containerWidth="90%"
            cardColor="#1a1a1a"
            cardHeight={400}
            detailWidth={300}
            cardTextColor="#ffffff"
            detailTextColor="#000000"
            animationDuration={0.8}
            className={styles.cardContainer}
          />
        </div>
        
        <div className={styles.cardSection}>
          <h2 className={styles.sectionTitle}>{currentContent.sectionTitles.collection}</h2>
          <CardFlip 
            cards={currentContent.cardsGroup2}
            containerWidth="90%"
            cardColor="#1a1a1a"
            cardHeight={400}
            detailWidth={300}
            cardTextColor="#ffffff"
            detailTextColor="#000000"
            animationDuration={0.8}
            className={styles.cardContainer}
          />
        </div>
      </main>
    </div>
  );
}
