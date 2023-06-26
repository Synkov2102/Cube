'use client';
import styles from './BottomBanner.module.scss';
import Container from '@/components/UI/Container/Container';
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';
import { useModalStore } from '@/utils/store';

export default function BottomBanner() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section className={styles.block}>
      <div className={styles.content}>
        <Container>
          <div className={styles.offer}>
            <p className={styles.topSubtitle}>СОЗДАДИМ ВАШ ЗАКАЗ ВМЕСТЕ</p>
            <h2 className={styles.title}>
              Узнайте все подробности прямо сейчас!
            </h2>

            <div className={styles.button} onClick={openModal}>
              <Button>Узнать</Button>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.img}>
        <Image src='/imgs/building.jpg' fill objectFit='cover' />
      </div>
    </section>
  );
}
