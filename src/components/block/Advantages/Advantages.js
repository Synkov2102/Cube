import styles from './Advantages.module.scss';
import Container from '@/components/UI/Container/Container';

export default function Advantages() {
  return (
    <section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Получите надежный и качественный бетон, доставленный вовремя!
          </h2>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <h3 className={styles.benefitTitle}>
                Быстрая и надежная доставка
              </h3>
              <p className={styles.benefitText}>
                Мы гарантируем своевременную и точную доставку бетона на Ваш
                объект. Мы понимаем, что время – это деньги, поэтому стараемся
                сделать всё возможное, чтобы наша доставка не вызывала задержек
                в строительном процессе.
              </p>
            </div>
            <div className={styles.benefit}>
              <h3 className={styles.benefitTitle}>Материал лучшего качества</h3>
              <p className={styles.benefitText}>
                Мы предоставляем только высококачественный бетон, произведенный
                на современном оборудовании в соответствии со всеми нормами и
                правилами.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
