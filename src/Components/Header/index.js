// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Rotas from '../Config/Rotas';
import Image from 'next/image';
import { useTranslation } from 'next-i18next'; 
const Header = () => {
  const { t } = useTranslation('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');


  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if ( currentScrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      // Passo 2
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolling ? styles.scrolling : ''} ${scrollDirection === 'up' ? styles.showHeader : ''}`}> {/* Passo 4 */}
      <Rotas href="/" active={router.pathname === '/'}>
        <div className={styles.logo}/>
      </Rotas> 
    
      <div className={styles.menuIcon} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <Rotas href="/" active={router.pathname === '/'}>
          {t('Header.Home')}
        </Rotas>
        <Rotas href="/Produtos" active={router.pathname === "/Produtos"}>
          {t('Header.product')}
        </Rotas>
        <Rotas href="/SobreNois" active={router.pathname === "/SobreNois"}>
          {t('Header.stars')}
        </Rotas>
        <Rotas href="/Contati" active={router.pathname === "/Contati"}>
          {t('Header.Contact')}
        </Rotas>       
      </nav>
    </header>

    
  );
};

export default Header;