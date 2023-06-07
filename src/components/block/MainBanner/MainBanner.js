import styles from './MainBanner.module.scss';
import Container from '@/components/UI/Container/Container';
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';
import { useModalStore } from '@/utils/store';
import Timer from '../Timer/Timer';
import { useState } from 'react';

export default function MainBanner() {
  const openModal = useModalStore((state) => state.openModal);

  const currentDate = new Date();
  const [timeStamp, setTimeStamp] = useState();
  const startDate = new Date(2022, 10, 16); // начало отсчёта
  const today = new Date(); // сегодня
  const daysPassed = Math.floor((today - startDate) / 864e5);
  const future = new Date();
  future.setHours(0);
  future.setMinutes(0);
  future.setSeconds(0);
  future.setDate(future.getDate() + 5 - (daysPassed % 5));

  setTimeout(() => {
    const timeToDate = future.getTime() - currentDate.getTime();
    setTimeStamp(timeToDate);
  }, 1000);

  return (
    <section className={styles.block}>
      <div className={styles.content}>
        <Container>
          <div className={styles.offer}>
            <p className={styles.topSubtitle}>
              Индивидуальная скидка до {future.getDate()} июня
            </p>
            <h1 className={styles.title}>Аренда бетононасоса от 5500 руб.</h1>
            <p className={styles.bottomSubtitle}>
              Наша компания предлагает широкий выбор автобетононасосов различной
              грузоподъемности и дальности подачи бетона, которые помогут вам
              оптимизировать процесс бетонирования.
            </p>
            <Timer timeStamp={timeStamp} />
            <div className={styles.button}>
              <Button onClick={openModal}>Получить расчет стоимости</Button>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.img}>
        <Image src='/imgs/main-banner.webp' fill objectFit='cover' />
      </div>
    </section>
  );
}
