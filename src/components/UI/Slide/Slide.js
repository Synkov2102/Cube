import styles from './Slide.module.scss';
import Image from 'next/image';

export default function Slide({ source, title, text, video }) {
  return (
    <div className={styles.slide}>
      {video ? (
        <video className={styles.image} autoPlay loop>
          <source src={source} />
        </video>
      ) : (
        <div className={styles.image}>
          <Image src={source} fill objectFit='cover' />
        </div>
      )}

      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
