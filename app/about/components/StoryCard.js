import Image from 'next/image';
import styles from './StoryCard.module.css';

export default function StoryCard({ image, title, description, language }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className={styles.button}>
          {language === 'zh' ? '了解更多' : 'Learn More'}
        </button>
      </div>
    </article>
  );
} 