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
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Servicos = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const [ref, inView] = useInView({
        triggerOnce: false,  // Ativa a animação apenas uma vez
    });
    const [animationProps, setAnimationProps] = useState({ opacity: 0, x: -100 });

    useEffect(() => {
        if (inView) {
            setAnimationProps({ opacity: 1, x: 0 });  // quando o componente entra na viewport
        } else {
            setAnimationProps({ opacity: 0, x: -100 }); // quando o componente sai da viewport
        }
    }, [inView]);
    

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

        <div className={styles.Container} ref={ref}>
           <div className={styles.Slider}>
            <Slider {...settings}>
            <div onClick={() => router.push('/Produtos/designweb')} className={styles.SliderC}>
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
                    <div  onClick={() => router.push('/Produtos/criacaodeapps')} className={styles.SliderC}>
                    <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                                <div className={styles.imagem} style={{backgroundImage: `url('/assets/Products/app.png')`}}/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <h1>{t('App.title')}</h1>
                            <p>{t('App.description')}</p>
                        </div>
                       
                    </div>
                    <div onClick={() => router.push('/Produtos/seo')} className={styles.SliderC}>
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
                    <div onClick={() => router.push('/Produtos/marketingdigital')} className={styles.SliderC}>
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                            <div className={styles.imagem} style={{backgroundImage: `url('/assets/Products/maketing.png')`}}/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <h1>{t('Marktingppc.title')}</h1>
                            <p>{t('Marktingppc.description')}</p>
                        </div>
                       
                    </div>
                    <div  onClick={() => router.push('/Produtos/marketingdigital')} className={styles.SliderC}>
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
            </Slider>
           </div>

           <div className={styles.flex}>
                 <motion.div 
                    onClick={() => router.push('/Produtos/designweb')} 
                    className={styles.direita}
                    initial={{ opacity: 0, x: -100 }}  // começar invisível e à esquerda
                    animate={{
                        opacity: inView ? 1 : 0,
                        x: inView ? 0 : -100,
                      }}     // animar para visível e posição original
                    transition={{ duration: 1,delay: 0 }}        // duração da animação em segundos
                 >
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                                <div className={styles.imagem}/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <h1>{t('DesingWeb.title')}</h1>
                            <p>{t('DesingWeb.description')}</p>
                        </div>
                 </motion.div>

                    <motion.div 
                        onClick={() => router.push('/Produtos/criacaodeapps')} 
                        className={styles.esquerda}
                        initial={{ opacity: 0, x: 100 }}   // começar invisível e à direita
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? 0 : -100,
                          }}    // animar para visível e posição original
                        transition={{ duration: 1,delay: 0.5 }}        // duração da animação em segundos
                    >
                        <div className={styles.text}>
                            <h1>{t('App.title')}</h1>
                            <p>{t('App.description')}</p>
                        </div>
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                                <div className={styles.imagem} style={{backgroundImage: `url('/assets/Products/app.png')`}}/>
                            </div>
                        </div>
                        </motion.div>

           </div>

           <div className={styles.flex}>
           <motion.div 
                    onClick={() => router.push('/Produtos/seo')}
                    className={styles.direita}
                    initial={{ opacity: 0, x: -100 }}  // começar invisível e à esquerda
                    animate={{
                        opacity: inView ? 1 : 0,
                        x: inView ? 0 : -100,
                      }}      // animar para visível e posição original
                    transition={{ duration: 1,delay: 1 }}        // duração da animação em segundos
                 >
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                            <div className={styles.imagem} style={{backgroundImage: `url('/assets/Products/seo.png')`}}/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <h1>{t('SEO.title')}</h1>
                            <p>{t('SEO.description')}</p>
                        </div>
                        </motion.div>
                        <motion.div 
                            onClick={() => router.push('/Produtos/marketingdigital')}
                            className={styles.esquerda}
                            initial={{ opacity: 0, x: 100 }}   // começar invisível e à direita
                            animate={{
                                opacity: inView ? 1 : 0,
                                x: inView ? 0 : -100,
                              }}     // animar para visível e posição original
                            transition={{ duration: 1,delay: 1.5}}        // duração da animação em segundos
                        >
                        <div className={styles.text}>
                            <h1>{t('Marktingppc.title')}</h1>
                            <p>{t('Marktingppc.description')}</p>
                        </div>
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                            <div className={styles.imagem} style={{backgroundImage: `url('/assets/Products/maketing.png')`}}/>
                            </div>
                        </div>
                        </motion.div>
           </div>

           <div className={styles.flex}>
           <motion.div 
                    onClick={() => router.push('/Produtos/marketingdigital')}
                    className={styles.direita}
                    initial={{ opacity: 0, x: -100 }}  // começar invisível e à esquerda
                    animate={{
                        opacity: inView ? 1 : 0,
                        x: inView ? 0 : -100,
                      }}     // animar para visível e posição original
                    transition={{ duration: 1,delay: 2 }}        // duração da animação em segundos
                 >
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                            <div className={styles.imagem} style={{backgroundImage: `url('/assets/Products/emailmaketing.png')`}}/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <h1>{t('EmailMarkting.title')}</h1>
                            <p>{t('EmailMarkting.description')}</p>
                        </div>
                        </motion.div>
                    
           </div>
        </div>
    
    );
};

export default Servicos;