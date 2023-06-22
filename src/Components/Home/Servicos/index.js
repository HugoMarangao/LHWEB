// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Container } from 'postcss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Servicos = () => {

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
            <Slider {...settings} className={styles.Slider}>
            <div className={styles.itensSlide}>
                <div className={styles.bol}>
                <div className={styles.bolLinhada}>
                 <div className={styles.icon} style={{backgroundImage: `url('/assets/Products/computer.png')`}}/>
                </div>
                </div> 
               <div className={styles.text}>
                <h1>Desing Web</h1>
                <p>Criamos o melhor site para voce 
                    imagina so voce fazendo parte dos 
                    sites da LH WEB</p>
               </div>
            </div>
            <div className={styles.itensSlide}>
                <div className={styles.bol}>
                <div className={styles.bolLinhada}>
                 <div className={styles.icon} style={{backgroundImage: `url('/assets/Products/seo.png')`}}/>
                </div>
                </div> 
               <div className={styles.text}>
                <h1>Desing Web</h1>
                <p>Criamos o melhor site para voce 
                    imagina so voce fazendo parte dos 
                    sites da LH WEB</p>
               </div>
            </div>
            <div className={styles.itensSlide}>
                <div className={styles.bol}>
                <div className={styles.bolLinhada}>
                 <div className={styles.icon} style={{backgroundImage: `url('/assets/Products/app.png')`}}/>
                </div>
                </div> 
               <div className={styles.text}>
                <h1>Desing Web</h1>
                <p>Criamos o melhor site para voce 
                    imagina so voce fazendo parte dos 
                    sites da LH WEB</p>
               </div>
            </div>
            <div className={styles.itensSlide}>
                <div className={styles.bol}>
                <div className={styles.bolLinhada}>
                 <div className={styles.icon} style={{backgroundImage: `url('/assets/Products/maketing.png')`}}/>
                </div>
                </div> 
               <div className={styles.text}>
                <h1>Desing Web</h1>
                <p>Criamos o melhor site para voce 
                    imagina so voce fazendo parte dos 
                    sites da LH WEB</p>
               </div>
            </div>
            <div className={styles.itensSlide}>
                <div className={styles.bol}>
                <div className={styles.bolLinhada}>
                 <div className={styles.icon} style={{backgroundImage: `url('/assets/Products/emailmaketing.png')`}}/>
                </div>
                </div> 
               <div className={styles.text}>
                <h1>Desing Web</h1>
                <p>Criamos o melhor site para voce 
                    imagina so voce fazendo parte dos 
                    sites da LH WEB</p>
               </div>
            </div>
            </Slider>


            <div className={styles.itensAesquerda}>
                <div className={styles.bol}/>
                <div className={styles.bolLinhada}>
                 <div className={styles.icon} style={{backgroundImage: `url('/assets/Products/computer.png')`}}/>
                </div>
               <div className={styles.text}>
                <h1>Desing Web</h1>
                <p>Criamos o melhor site para voce 
                    imagina so voce fazendo parte dos 
                    sites da LH WEB</p>
               </div>
            </div>
            <div className={styles.itensAdireita}>
            <div className={styles.text}>
                <h1>SEO</h1>
                <p>Criamos o melhor site para voce 
                    imagina so voce fazendo parte dos 
                    sites da LH WEB</p>
               </div>
                <div className={styles.bolLinhada}>
                    <div className={styles.icon} style={{backgroundImage: `url('/assets/Products/seo.png')`}}/>
                </div>
                <div className={styles.bol}/>
            </div>
            <div className={styles.itensAesquerda}>
                <div className={styles.bol}/>
                <div className={styles.bolLinhada}>
                    <div className={styles.icon} style={{backgroundImage: `url('/assets/Products/app.png')`}}/>
                </div>
               <div className={styles.text}>
                <h1>App</h1>
                <p>Criamos o melhor site para voce 
                    imagina so voce fazendo parte dos 
                    sites da LH WEB</p>
               </div>
            </div>
            <div className={styles.itensAdireita}>
            <div className={styles.text}>
                <h1>Marketing PPC</h1>
                <p>Criamos o melhor site para voce 
                    imagina so voce fazendo parte dos 
                    sites da LH WEB</p>
               </div>
                <div className={styles.bolLinhada}>
                    <div className={styles.icon} style={{backgroundImage: `url('/assets/Products/maketing.png')`}}/>
                </div>
                <div className={styles.bol}/>
            </div>
            <div className={styles.itensAesquerda}>
                <div className={styles.bol}/>
                <div className={styles.bolLinhada}>
                    <div className={styles.icon} style={{backgroundImage: `url('/assets/Products/emailmaketing.png')`}}/>
                </div>
               <div className={styles.text}>
                <h1>Email Markting</h1>
                <p>Criamos o melhor site para voce 
                    imagina so voce fazendo parte dos 
                    sites da LH WEB</p>
               </div>
            </div>
        </div>
    
    );
};

export default Servicos;