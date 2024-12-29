'use client';
import { useState, useEffect } from 'react';
import { en } from '../locales/en';
import { zh } from '../locales/zh';
import Image from 'next/image';
import styles from './page.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

export default function ContactPage() {
  const [language, setLanguage] = useState('zh');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const t = language === 'en' ? en : zh;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里添加表单提交逻辑
    console.log('Form submitted:', formData);
  };

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
          <h1>{language === 'zh' ? '预约咨询' : 'Book an Appointment'}</h1>
          <p className={styles.subtitle}>
            {language === 'zh' ? '专属定制 · 臻享服务' : 'Exclusive Service · Personal Experience'}
          </p>
        </header>

        <div className={styles.container}>
          <section className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/48cf148a-a17c-4c02-868a-a2799c9462a5_0.jpeg"
                alt="Luxury Consultation"
                width={600}
                height={600}
                className={styles.image}
              />
            </div>
            <div className={styles.contactInfo}>
              <h3>{language === 'zh' ? '联系方式' : 'Contact Information'}</h3>
              <p>
                <strong>{language === 'zh' ? '电话' : 'Phone'}:</strong> +86 xxx xxxx xxxx
              </p>
              <p>
                <strong>{language === 'zh' ? '邮箱' : 'Email'}:</strong> contact@maisonelegance.com
              </p>

            </div>
          </section>

          <section className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={language === 'zh' ? '您的姓名' : 'Your Name'}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={language === 'zh' ? '联系电话' : 'Phone Number'}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={language === 'zh' ? '电子邮箱' : 'Email Address'}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={language === 'zh' ? '请告诉我们您感兴趣的服务或产品...' : 'Please tell us about the services or products you are interested in...'}
                  rows="4"
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                {language === 'zh' ? '提交预约' : 'Submit Appointment'}
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer t={t} />
    </>
  );
} 