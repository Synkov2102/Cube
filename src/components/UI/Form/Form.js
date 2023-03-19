import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';

export default function Form({}) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type='tel'
        placeholder='Номер телефона'
        {...register('number', { required: true, maxLength: 12 })}
      />
      <input
        className={styles.input}
        placeholder={'Имя'}
        {...register('firstName', { maxLength: 20 })}
      />

      <Button type='secondary'>Оставить заявку</Button>
    </form>
  );
}
