'use client';
import { useState, useEffect } from 'react';
import { en } from '../locales/en';
import { zh } from '../locales/zh';
import Image from 'next/image';
import styles from './page.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

export default function StoresPage() {
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
          <h1>{language === 'zh' ? '精品沙龙' : 'Luxury Salon'}</h1>
          <p className={styles.subtitle}>
            {language === 'zh' ? '尊享私密 · 臻贵体验' : 'Exclusive Experience · Personal Service'}
          </p>
        </header>

        <section className={styles.showcase}>
          <div className={styles.mainImage}>
            <Image
              src="/images/aba1bf91-3438-4032-91b5-8e7fcca629ab_0.jpeg"
              alt="Luxury Salon"
              width={1200}
              height={600}
              className={styles.image}
            />
          </div>
          <div className={styles.description}>
            <p>
              {language === 'zh' 
                ? '我们的精品沙龙为尊贵的客人提供私密优雅的环境，让您在轻松舒适的氛围中，感受MAISON ÉLÉGANCE的非凡魅力。'
                : 'Our luxury salon provides an intimate and elegant environment for our esteemed guests, allowing you to experience the extraordinary charm of MAISON ÉLÉGANCE in a relaxed and comfortable atmosphere.'}
            </p>
          </div>
        </section>

        <section className={styles.services}>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/55712b84-b739-4217-9438-d3f17756680c_0.jpeg"
                  alt="Private Consultation"
                  width={400}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>{language === 'zh' ? '私人定制服务' : 'Bespoke Service'}</h3>
                <p>{language === 'zh'
                  ? '我们的专业顾问将为您提供一对一的私人定制服务，帮助您选择最适合的珠宝作品。'
                  : 'Our professional consultants will provide you with one-on-one bespoke service to help you select the most suitable jewelry pieces.'}
                </p>
              </div>
            </div>

            <div className={styles.serviceItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/bd146edf-89ed-4e34-9480-eeaea4dea8a6_0.jpeg"
                  alt="VIP Lounge"
                  width={400}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>{language === 'zh' ? 'VIP专属空间' : 'VIP Lounge'}</h3>
                <p>{language === 'zh'
                  ? '独立的VIP休息室为您提供绝对私密的环境，让您在优雅舒适的氛围中慢慢品鉴。'
                  : 'Private VIP lounges provide you with absolute privacy, allowing you to appreciate our pieces in an elegant and comfortable atmosphere.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.appointment}>
          <h2>{language === 'zh' ? '预约服务' : 'Book an Appointment'}</h2>
          <p className={styles.appointmentText}>
            {language === 'zh'
              ? '我们期待为您提供专属服务，请提前预约以确保我们能够为您安排最适合的时间。'
              : 'We look forward to serving you. Please book in advance so we can arrange the most suitable time for you.'}
          </p>
          <button className={styles.appointmentButton}>
            {language === 'zh' ? '立即预约' : 'Book Now'}
          </button>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
} 