import styles from './Header.module.scss';
import Container from '@/components/UI/Container/Container';
import Icon from '@/components/UI/Icon/Icon';
import Button from '@/components/UI/Button/Button';
import { mobileMaxWidth } from '@/utils/constants';
import { useState, useCallback, useEffect } from 'react';
import { useWindowSize } from '@/hooks';
import { useModalStore } from '@/utils/store';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const width = useWindowSize().width;
  const openModal = useModalStore((state) => state.openModal);

  const onScroll = useCallback(() => {
    const { pageYOffset } = window;
    setScrollY(pageYOffset);
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
        scrollY > 50
          ? `${styles.header} ${styles.headerScrolled}`
          : styles.header
      }
    >
      <Container>
        <div className={styles.container}>
          <div className={styles.logo}>
            <div className={styles.logoImg}>
              <Icon.Logo />
            </div>

            <p className={styles.logoText}>Куб бетона</p>
          </div>
          {scrollY > 50 && width > mobileMaxWidth ? (
            <div className={styles.buttons}>
              <div className={styles.button}>
                <Button fullwidth size='small' onClick={openModal}>
                  Заказать звонок
                </Button>
              </div>

              <a
                className={styles.button}
                download
                href={'/files/CUBETON.RU Прайслист.xlsx'}
              >
                <Button fullwidth size='small' type='secondary'>
                  Скачать прайслист
                </Button>
              </a>
            </div>
          ) : scrollY > 50 && width < mobileMaxWidth ? (
            <a
              className={styles.buttons}
              download
              href={'/files/CUBETON.RU Прайслист.xlsx'}
            >
              <Button fullwidth size='small' type='secondary'>
                Скачать прайслист
              </Button>
            </a>
          ) : (
            ''
          )}
        </div>
      </Container>
    </header>
  );
}
