// components/Header.js
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';


const Chamada = () => {

    return(

        <div className={styles.Container}>
           <h1>Por que Escolher a LH Web?</h1>
           <div className={styles.ContainerUser}>
                <div className={styles.user}>
                    <div className={styles.bol}>
                        <div className={styles.bolciador}/>
                    </div>         
                    <div className={styles.text}>
                        <p>Conecte-se ao sucesso com Luiz Otavio Marangão Souza, co-fundador da LH Web. Especialista em marketing digital, ele impulsiona empresas a alcançarem novos patamares. Sua expertise e foco no cliente são essenciais para conquistar resultados excepcionais. Descubra as oportunidades únicas de crescimento ao seu alcance.</p>
                    </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.bol}>
                        <div className={styles.bolciador}/>
                    </div>      
                    <div className={styles.text}>
                        <p>Descubra a inovação com Hugo Marangão, co-fundador da LH Web. Com sua paixão por soluções personalizadas e intuitivas, ele lidera o caminho em tecnologia e inovação. Sua visão estratégica e habilidades técnicas excepcionais garantem produtos e serviços de alta qualidade, adaptados às suas necessidades únicas.</p>
                    </div>
                </div>
           </div>
        </div>
    
    );
};

export default Chamada;