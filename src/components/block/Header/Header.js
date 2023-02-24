import styles from './Header.module.scss';
import Container from '@/components/UI/Container/Container';
import Icon from '@/components/UI/Icon/Icon';
import { useState, useCallback, useEffect } from 'react';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    console.log('yOffset', pageYOffset, 'scrollY', scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, []);

  return (
    <header
      className={
        scrollY > 40
          ? `${styles.header} ${styles.headerScrolled}`
          : styles.header
      }
    >
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
