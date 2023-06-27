// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Container } from 'postcss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'next-i18next'; 


const Servicos = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    
    const settings = {
        dots: false, // Altere como desejar
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
      };

    return(

        <div className={styles.Container}>
           <div className={styles.flex}>
                    <div onClick={() => router.push('/Produtos/designweb')} className={styles.direita}>
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                                <div className={styles.imagem}/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <h1>{t('DesingWeb.title')}</h1>
                            <p>{t('DesingWeb.description')}</p>
                        </div>
                    </div>
                    <div  onClick={() => router.push('/Produtos/criacaodeapps')} className={styles.esquerda}>
                        <div className={styles.text}>
                            <h1>{t('App.title')}</h1>
                            <p>{t('App.description')}</p>
                        </div>
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                                <div className={styles.imagem} style={{backgroundImage: `url('/assets/Products/app.png')`}}/>
                            </div>
                        </div>
                    </div>
           </div>
           <div className={styles.flex}>
                    <div onClick={() => router.push('/Produtos/seo')} className={styles.direita}>
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                            <div className={styles.imagem} style={{backgroundImage: `url('/assets/Products/seo.png')`}}/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <h1>{t('SEO.title')}</h1>
                            <p>{t('SEO.description')}</p>
                        </div>
                    </div>
                    <div onClick={() => router.push('/Produtos/marketingdigital')} className={styles.esquerda}>
                        <div className={styles.text}>
                            <h1>{t('Marktingppc.title')}</h1>
                            <p>{t('Marktingppc.description')}</p>
                        </div>
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                            <div className={styles.imagem} style={{backgroundImage: `url('/assets/Products/maketing.png')`}}/>
                            </div>
                        </div>
                    </div>
           </div>
           <div className={styles.flex}>
                    <div  onClick={() => router.push('/Produtos/marketingdigital')} className={styles.direita}>
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                            <div className={styles.imagem} style={{backgroundImage: `url('/assets/Products/emailmaketing.png')`}}/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <h1>{t('EmailMarkting.title')}</h1>
                            <p>{t('EmailMarkting.description')}</p>
                        </div>
                    </div>
                    
           </div>
        </div>
    
    );
};

export default Servicos;