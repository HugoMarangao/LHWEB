// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';

const Apresentacao = () => {

    return(

        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Conquiste seus clientes com um design web único e uma estrutura intuitiva.</h1>
                <p>Crie presença online excepcional com websites modernos, funcionais e personalizados. Reflete sua marca e proporciona uma experiência excepcional aos usuários.</p>
            </div>
            <div className={styles.image}/>
        </div>
    
    );
};

export default Apresentacao;