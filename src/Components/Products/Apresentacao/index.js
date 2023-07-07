// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';

const Apresentacao = () => {

    return(

        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Impulsione seu negocio para o proximo nivel com solucoes tecnologicas inovadoras</h1>
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