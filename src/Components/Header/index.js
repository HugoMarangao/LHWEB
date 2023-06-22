// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Rotas from '../Config/Rotas';
import Image from 'next/image';

const Header = () => {
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
          Home
        </Rotas>
        <Rotas href="/Produtos" active={router.pathname === "/Produtos"}>
          Produtos
        </Rotas>
        <Rotas href="/port" active={router.pathname === "/port"}>
          Destaques
        </Rotas>
        <Rotas href="/contati" active={router.pathname === "/contati"}>
          Contatti
        </Rotas>       
      </nav>
    </header>

    
  );
};

export default Header;