import styles from './MainBanner.module.scss';
import Container from '@/components/UI/Container/Container';
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';

export default function MainBanner() {
  return (
    <section className={styles.block}>
      <div className={styles.content}>
        <Container>
          <div className={styles.offer}>
            <p className={styles.topSubtitle}>БЕТОН С ДОСТАВКОЙ</p>
            <h1 className={styles.title}>Закажите бетон в Ростове на Дону</h1>
            <p className={styles.bottomSubtitle}>
              Наш сервис предоставляет услуги по доставке бетона высокого
              качества, произведенного на современном оборудовании. Мы
              гарантируем соответствие нормам и правилам, а также высокое
              качество материала.
            </p>
            <Button>Получить расчет стоимости</Button>
          </div>
        </Container>
      </div>

      <div className={styles.img}>
        <Image src='/imgs/main-banner.jpeg' fill objectFit='cover' />
      </div>
    </section>
  );
}
