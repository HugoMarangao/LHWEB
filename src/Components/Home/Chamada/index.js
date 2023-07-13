// components/Header.js
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { useTranslation } from 'next-i18next'; 

const Chamada = () => {
    const { t } = useTranslation('common');

    return(

        <div className={styles.Container}>
           <h1>{t('chamada.title')}</h1>
           <div className={styles.ContainerUser}>
                <div className={styles.user}>
                    <div className={styles.bol}>
                        <div className={styles.bolciador} style={{backgroundImage: `url('/assets/criadores/luiz.webp')`}}/>
                    </div>         
                    <div className={styles.text}>
                        <p>{t('chamada.description')}</p>
                    </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.bol}>
                        <div className={styles.bolciador} style={{backgroundImage: `url('/assets/criadores/hugo.webp')`}}/>
                    </div>      
                    <div className={styles.text}>
                        <p>{t('chamada.description1')}</p>
                    </div>
                </div>
           </div>
           
        </div>
    
    );
};

export default Chamada;