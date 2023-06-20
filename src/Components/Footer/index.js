// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Rotas from '../Config/Rotas';
import Image from 'next/image';
import { AiFillFacebook,AiOutlineInstagram,AiOutlineYoutube } from 'react-icons/ai';
const Footer = () => {
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
          Home
        </Rotas>
        <Rotas href="/Cerca" active={router.pathname === "/chisiamo"}>
          Cerca
        </Rotas>
        <Rotas href="/port" active={router.pathname === "/port"}>
          Destaques
        </Rotas>
        <Rotas href="/contati" active={router.pathname === "/contati"}>
          Contatti
        </Rotas>       
      </div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          <AiOutlineInstagram size={35} color='#000'/>
          <AiFillFacebook size={35} color='#000'/>
          <AiOutlineYoutube size={35} color='#000'/>
        </div>
        <Rotas href="/" active={router.pathname === '/tutoriais'}>
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