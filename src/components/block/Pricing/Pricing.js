import styles from './Pricing.module.scss';
import Image from 'next/image';
import Container from '@/components/UI/Container/Container';
import Button from '@/components/UI/Button/Button';

export default function PricingBanner() {
  return (
    <Container>
      <section className={styles.banner}>
        <div className={styles.content}>
          <p className={styles.text}>ЕСТЬ СОМНЕНИЯ?</p>
          <h2 className={styles.title}>
            Посмотрите цены на бетононасоcы и примите решение!
          </h2>
          <a
            className={styles.button}
            download
            href={'/files/CUBETON.RU Прайслист.xlsx'}
          >
            <Button type='secondary'>Скачать прайслист</Button>
          </a>
        </div>
        <div className={styles.image}>
          <Image src='/imgs/concrete-production.jpg' fill objectFit='cover' />
        </div>
      </section>
    </Container>
  );
}
