import styles from './Button.module.scss';

export default function Button({
  type = 'main',
  size = 'medium',
  color = '',
  children,
  fullwidth,
  icon,
  iconLeft,
  onClick,
  disabled = false,
  className,
  // openModal = {}
}) {
  // const dispatch = useDispatch()
  return (
    <button
      style={fullwidth ? { width: '100%' } : null}
      className={`${styles.button} ${styles[type] || ''} ${
        styles[color] || ''
      } ${styles[size] || ''} ${className ? className : ''}`}
      disabled={disabled}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : ''}
    >
      {iconLeft && <div className={styles.iconLeft}>{iconLeft}</div>}
      {children}
      {icon && <div className={styles.icon}>{icon}</div>}
    </button>
  );
}
