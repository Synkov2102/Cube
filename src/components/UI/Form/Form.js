import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import { apiRequest } from '@/utils/request';
import { useState } from 'react';
import { useModalStore } from '@/utils/store';
import Icon from '../Icon/Icon';

export default function Form({}) {
  const { register, handleSubmit } = useForm();
  const [isSended, setIsSended] = useState(false);
  const closeModal = useModalStore((state) => state.closeModal);
  const onSubmit = (data) => {
    const text = `Заявка с сайта %0AИмя: ${data.name} %0AТелефон: ${data.phone}`;
    apiRequest(`/sendTelegram`, { text }, { method: 'POST' })
      .then(() => {
        console.log('Форма успешно отправлена!');
        setIsSended(true);
        setTimeout(closeModal, 2000);
      })
      .catch((e) => {
        console.error('Ошибка отправки формы:' + e);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {isSended ? (
        <div className={styles.succes}>
          <p className={styles.title}>Ваша заявка отправлена!</p>
          <p className={styles.text}>Скоро мы вам позвоним</p>
          <Icon.Succes />
        </div>
      ) : (
        <>
          <input
            className={styles.input}
            type='tel'
            placeholder='Номер телефона'
            {...register('phone', { required: true })}
          />
          <input
            className={styles.input}
            placeholder={'Имя'}
            {...register('name', {})}
          />
          <Button type='secondary'>Отправить заявку</Button>
        </>
      )}
    </form>
  );
}
