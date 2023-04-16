import styles from './FormBlock.module.scss';
import Container from '@/components/UI/Container/Container';
import Button from '@/components/UI/Button/Button';
import Form from '@/components/UI/Form/Form';

export default function FormBlock() {
  return (
    <section className={styles.background}>
      <Container>
        <div className={styles.banner}>
          <div className={styles.content}>
            <p className={styles.text}>ЛУЧШИЕ УСЛОВИЯ</p>
            <h2 className={styles.title}>
              Оставьте заявку сейчас и получите специальное предложение.
            </h2>
          </div>

          <Form />
        </div>
      </Container>
    </section>
  );
}
