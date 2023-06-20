// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';

const Banner = () => {

    return(

        <div className={styles.container}>
            <div className={styles.bolText}>
                <h1>Crescemos com sua <br/> empresa</h1>
                <div className={styles.traso}/>
                <p>com a LHWEB voce cria sua  plataforma e <br/> <b>impulsiona</b> suas acoes de <b>vendas e marketing</b></p>
                <button>
                    quero criar minha plataforma
                </button>
            </div>
            <div className={styles.bolblue}/>
            <div className={styles.bolImage}/>
            <div className={styles.Conteinerminibol}>
                <div className={styles.minibol}/>
            </div>
        </div>
    
    );
};

export default Banner;