import styles from './Slide.module.scss';
import Image from 'next/image';

export default function Slide({ image, title, text }) {
  return (
    <div className={styles.slide}>
      <div className={styles.image}>
        <Image src={image} fill objectFit='cover' />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
