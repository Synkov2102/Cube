import styles from './Header.module.scss';
import Container from '@/components/UI/Container/Container';

export default function Header() {
    return <header className={styles.header}><Container><div className={styles.logo}><img className={styles.logoImg} src="./logo.svg" /> <p className={styles.logoText}>Куб бетона</p></div></Container></header >
}