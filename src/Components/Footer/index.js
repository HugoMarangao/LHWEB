// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Rotas from '../Config/Rotas';
import Image from 'next/image';
import { AiFillFacebook,AiOutlineInstagram,AiOutlineYoutube } from 'react-icons/ai';
import { useTranslation } from 'next-i18next'; 
const Footer = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  }
  return (
    <div className={styles.container}>
      <div className={styles.chamada}>
        <h1>Cresca com a gente</h1>
      </div>
      <div className={styles.bottomrow}>
      <div className={styles.links}>
       
        <div className={styles.logo}/>
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
      </div>
      <div className={styles.menu}>
        <div className={styles.icons}>
        <button><AiOutlineInstagram 
        size={35} 
        color={hoveredIcon === 'instagram' ? '#20D3FC' : '#000'} 
        onMouseEnter={() => handleMouseEnter('instagram')}
        onMouseLeave={handleMouseLeave}
      />
      </button>
      <button>
        <AiFillFacebook 
          size={35} 
          color={hoveredIcon === 'facebook' ? '#20D3FC' : '#000'} 
          onMouseEnter={() => handleMouseEnter('facebook')}
          onMouseLeave={handleMouseLeave}
        />
      </button>
      <button>
      <AiOutlineYoutube 
        size={35} 
        color={hoveredIcon === 'youtube' ? '#20D3FC' : '#000'} 
        onMouseEnter={() => handleMouseEnter('youtube')}
        onMouseLeave={handleMouseLeave}
      />
      </button>
        </div>
        <Rotas href="https://www.youtube.com/@LHWeb/featured" active={router.pathname === '/tutoriais'}>
          tutoriais
        </Rotas>
        <Rotas href="/Cerca" active={router.pathname === "/chisiamo"}>
          blog
        </Rotas>
        <Rotas href="/port" active={router.pathname === "/port"}>
          termos de uso
        </Rotas>
        <Rotas href="/contati" active={router.pathname === "/contati"}>
          politica de privacidade
        </Rotas>   
      </div>
      </div>
      <div className={styles.bol}>
          <h1>lhweb51@gmail.com</h1>
      </div>
    </div>
  );
};

export default Footer;