'use client';
import styles from './MobileCall.module.scss';
import Icon from '../Icon/Icon';
import { mobileMaxWidth } from '@/utils/constants';
import { useWindowSize } from '@/hooks';
import { useModalStore } from '@/utils/store';

export default function MobileCall() {
  const width = useWindowSize().width;
  const openModal = useModalStore((state) => state.openModal);
  return (
    <>
      {width < mobileMaxWidth ? (
        <button className={styles.button} onClick={openModal}>
          <Icon.Phone />
        </button>
      ) : (
        ''
      )}
    </>
  );
}
