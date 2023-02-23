import styles from './Header.module.scss';
import Container from '@/components/UI/Container/Container';
import Icon from '@/components/UI/Icon/Icon';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.logo}>
          <div className={styles.logoImg}>
            <Icon.Logo />
          </div>

          <p className={styles.logoText}>Куб бетона</p>
        </div>
      </Container>
    </header>
  );
}
