'use client';
import styles from './Services.module.css';

export default function Services({ t }) {
  return (
    <section className={styles.services}>
      <h2>{t.services.title}</h2>
      <p className={styles.description}>{t.services.description}</p>
      <div className={styles.servicesGrid}>
        {t.services.items.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 