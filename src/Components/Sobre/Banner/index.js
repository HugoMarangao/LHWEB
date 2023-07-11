// components/Header.js
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next'; 

const Banner = () => {
    const { t } = useTranslation('common');
    return(

        <div className={styles.container}>
            <div className={styles.text}>
                <h1>{t('banner.titulo')}</h1>
                <h2>{t('banner.subtitulo')}</h2>
            </div>
        </div>
    
    );
};

export default Banner;