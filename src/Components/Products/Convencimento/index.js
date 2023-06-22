// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';

const Convencimento = ({id}) => {

    return(

        <div className={styles.container}>
           <div className={styles.flex}> 
                <div className={styles.produto}>
                    <div className={styles.bol}> 
                        <div className={styles.boltrasada}> 
                                <div className={styles.Imagem}/>
                        </div>
                    </div>
                </div>
                <div className={styles.text}>
                    <h1>Vendas e muito mais</h1>
                    <p>Você sabia que um aplicativo pode ser a própria <b>plataforma de marketing</b> da sua marca?</p>
                    <p>É um <b>canal direto com seu cliente</b>, muito mais do que apenas a extensão do seu site ou um novo canal de vendas.</p>
                    <p>Com um aplicativo você constrói uma <b>conexão entre a sua marca e o seu cliente</b>, oferecendo a melhor experiência possível.</p>
                    <button>
                       <h1>Criar App</h1>
                    </button>
                </div>
           </div>
        </div>
    
    );
};

export default Convencimento;