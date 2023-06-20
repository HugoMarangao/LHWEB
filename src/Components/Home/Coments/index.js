// components/Header.js
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Coments = () => {

    const [parceiros, setParceiros] = useState([
        { id: 1, src: '/assets/Parceiros/babita.png' },
        { id: 2, src: '/assets/Parceiros/brilhodemulher.png' },
        { id: 3, src: '/assets/Parceiros/brilhointimo.png' },
        { id: 4, src: '/assets/Parceiros/criswinter.png' },
        { id: 5, src: '/assets/Parceiros/deissy.png' },
        { id: 6, src: '/assets/Parceiros/fetelle.png' },
        { id: 7, src: '/assets/Parceiros/fitsgym.png' },
        { id: 8, src: '/assets/Parceiros/horadosono.png' },
        { id: 9, src: '/assets/Parceiros/jussilly.png' },
        { id: 10, src: '/assets/Parceiros/kallifon.png' },
        { id: 11, src: '/assets/Parceiros/lindaseducao.png' },
        { id: 12, src: '/assets/Parceiros/mercado.png' },
        { id: 13, src: '/assets/Parceiros/oficina.png' },
        { id: 14, src: '/assets/Parceiros/ouseuse.png' },
        { id: 15, src: '/assets/Parceiros/tereza.png' },
        { id: 16, src: '/assets/Parceiros/useintuicao.png' },
      ]);

    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 5, // Adicione um valor decimal ligeiramente menor
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3, // Adicione um valor decimal ligeiramente menor
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3, // Adicione um valor decimal ligeiramente menor
            },
          },
        ],
      };

    return(

        <div className={styles.Container}>
           <div className={styles.Titulo}>
                <h1>Nossos clientes nos amam</h1>
                <div className={styles.linha}/>
           </div>
           <Slider {...settings}>
                {parceiros.map((parceiro) => (
                   <div key={parceiro.id}>
                     <Image src={parceiro.src} alt={`Logo do parceiro ${parceiro.id}`} width={120} height={100} />
                   </div>
                 ))}
           </Slider>
           <div className={styles.comentarios}>
                <div className={styles.desing}>
                    <div className={styles.bolblue}/>
                    <div className={styles.product}/>
                    <div className={styles.logo}>
                        <Image src={'/assets/Parceiros/horadosono.png'} alt={`Logo do parceiro hora do sono`} width={120} height={100} />
                    </div>
                    <div className={styles.comentvero}>
                        <h1>Anne</h1>
                        <h2><b>{"\\\\"} </b>Responsavel pelo Marketing</h2>
                        <h3>Com o sistema de notificacoes minha loja 
                        esta fazendo uma conversao fenomeal </h3>
                    </div>
                </div>
           </div>
        </div>
    
    );
};

export default Coments;