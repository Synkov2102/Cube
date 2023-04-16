import styles from './Advantages.module.scss';
import Container from '@/components/UI/Container/Container';

export default function Advantages({ title, advantages }) {
  return (
    <section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.benefits}>
            {advantages.map((element) => (
              <div className={styles.benefit}>
                <h3 className={styles.benefitTitle}>{element.title}</h3>
                <p className={styles.benefitText}>{element.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
