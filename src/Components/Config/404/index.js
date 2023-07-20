import Link from 'next/link'
import styles from './styles.module.scss';

export default function NotFoundPage() {
 
  return (
    <div className={styles.container}>
      <div className={styles.bol}></div>
        <div className={styles.containertext}>
             <div className={styles.logo}/>
             <h1 className={styles.title}>404 - Página não encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link className={styles.button} href="/">
                Voltar para a página inicial    
            </Link>
        </div>
      <div className={styles.bol}></div>
    </div>
  );
}
