import styles from './FormBlock.module.scss';
import Container from '@/components/UI/Container/Container';
import Button from '@/components/UI/Button/Button';
import Form from '@/components/UI/Form/Form';

export default function FormBlock() {
  return (
    <Container>
      <section className={styles.banner}>
        <div className={styles.content}>
          <p className={styles.text}>НУЖНА КОНСУЛЬТАЦИЯ?</p>
          <h2 className={styles.title}>
            Узнайте больше и ознакомьтесь с нашими ценами.
          </h2>
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </section>
    </Container>
  );
}
