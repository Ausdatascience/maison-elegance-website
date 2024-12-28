'use client';
import styles from './Services.module.css';

export default function Services({ t }) {
  return (
    <section className={styles.services}>
      <div className={styles.serviceGrid}>
        <div className={styles.serviceItem}>
          <h4>{t.services.personalization.title}</h4>
          <p>{t.services.personalization.text}</p>
        </div>
        <div className={styles.serviceItem}>
          <h4>{t.services.appointment.title}</h4>
          <p>{t.services.appointment.text}</p>
        </div>
        <div className={styles.serviceItem}>
          <h4>{t.services.gifting.title}</h4>
          <p>{t.services.gifting.text}</p>
        </div>
      </div>
    </section>
  );
} 