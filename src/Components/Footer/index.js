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
        <Rotas href="/Destaques" active={router.pathname === "/Destaques"}>
          {t('Header.stars')}
        </Rotas>
        <Rotas href="/Contatti" active={router.pathname === "/Contatti"}>
          {t('Header.Contact')}
        </Rotas>       
      </div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          <AiOutlineInstagram size={35} color='#000'/>
          <AiFillFacebook size={35} color='#000'/>
          <AiOutlineYoutube size={35} color='#000'/>
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