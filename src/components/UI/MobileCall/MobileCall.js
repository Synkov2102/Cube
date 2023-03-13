import styles from './MobileCall.module.scss';
import Icon from '../Icon/Icon';
import { mobileMaxWidth } from '@/utils/constants';
import { useWindowSize } from '@/hooks';

export default function MobileCall() {
  const width = useWindowSize().width;
  return (
    <>
      {width < mobileMaxWidth ? (
        <button className={styles.button}>
          <Icon.Phone />
        </button>
      ) : (
        ''
      )}
    </>
  );
}
