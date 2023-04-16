import { useModalStore } from '@/utils/store';
import Form from '../Form/Form';
import Icon from '../Icon/Icon';
import styles from './Modal.module.scss';

export default function Modal() {
  const modalIsActive = useModalStore((state) => state.modalIsActive);

  return (
    <>
      {modalIsActive ? (
        <div className={`${styles.modal} ${styles.visible}`} id='modal'>
          <div className={styles.modalContent} id={styles.full}>
            <div className={styles.content}>
              <CloseButton />
              <Form />
            </div>
          </div>
          <style jsx global>{`
            body {
              overflow: hidden;
            }
          `}</style>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

function CloseButton() {
  const closeModal = useModalStore((state) => state.closeModal);
  return (
    <div className={styles.close} onClick={closeModal}>
      <Icon.Close />
    </div>
  );
}
