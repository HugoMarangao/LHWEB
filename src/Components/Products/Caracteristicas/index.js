// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';

const Caracteristicas = () => {
    const router = useRouter();
    return(
        <div className={styles.container}>
            <div className={styles.flex}>
                <div onClick={() => router.push('/Produtos/criacaodeapps')} className={styles.box}>
                    <div className={styles.image}/>
                    <h1>Criacao de Apps</h1>
                    <p>criamos seu app como voce desejar</p>
                </div>
                <div onClick={() => router.push('/Produtos/designweb')} className={styles.box}>
                    <div className={styles.image}/>
                    <h1>Design Web</h1>
                    <p>criamos seu site com design moderno</p>
                </div>
                <div onClick={() => router.push('/Produtos/marketingdigital')} className={styles.box}>
                    <div className={styles.image}/>
                    <h1>Marketing Digital</h1>
                    <p>ajudamos a impulsionar o seu negócio online</p>
                </div>
                <div onClick={() => router.push('/Produtos/seo')} className={styles.box}>
                    <div className={styles.image}/>
                    <h1>SEO</h1>
                    <p>melhoramos o ranking do seu site nos motores de busca</p>
                </div>
            </div>
        </div>
    );
};


export default Caracteristicas;