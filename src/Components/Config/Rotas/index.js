import Link from 'next/link'
import styles from './styles.module.scss';

export default function Rotas({ children, href,active,scrolling }) {
 
  return (
    <Link className={`${styles.link} ${active ? styles.active : ''} ${scrolling ? styles.scrolling : ''}`} href={href}>
      {children}
    </Link>
  );
}
