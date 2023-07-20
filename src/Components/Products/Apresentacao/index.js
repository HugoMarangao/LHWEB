// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';
import { useTranslation } from 'next-i18next'; 

const Apresentacao = () => {
    const { t } = useTranslation('common');
    return(

        <div className={styles.container}>
            <div className={styles.text}>
                <h1>{t('apresentacao.titulo')}</h1>
            </div>
            <div className={styles.image}>
                <div className={styles.computer}>
                    <h2>Criacao top</h2>
                    <p>Ofereca esperiencia expecianais ao seu cliente com um desing reattivo e atraente. com uma strategia SEO mirada, seu site apresentara bons resultados</p>
                </div>
                <div className={styles.iphone}>
                    <h2>Potencialise seu negocio</h2>
                    <p>Coloque sua empresa em app com nossa empresa Gestao de modo eficiente, teste agora</p>
                </div>
            </div>
           
        </div>
    
    );
};

export default Apresentacao;