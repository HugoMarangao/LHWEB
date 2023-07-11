// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';

const Contato = () => {

    return(

        <div className={styles.container}>
            <h1>Entre em Contato!</h1>
            <h2>Estamos ansiosos para ajudar você a impulsionar o sucesso do seu negócio!</h2>
           <div className={styles.box}>
                <div className={styles.inputs}>
                    <input placeholder='nome completo'/>
                    <input placeholder='Nome da empresa'/>
                </div>
                <div className={styles.inputs}>
                    <input placeholder='email'/>
                    <input placeholder='telefone'/>
                </div>
                <h3>Serviços de Interesse:</h3>
                <div className={styles.inputsS}>
                    <div className={styles.flex}>
                        <input type="checkbox" id="webDesign" name="categoria" value="Design Web" />
                        <label htmlFor="webDesign">Design Web</label>
                    </div>
                    <div className={styles.flex}>
                        <input type="checkbox" id="app" name="categoria" value="App" />
                        <label htmlFor="app">App</label>
                    </div>
                    <div className={styles.flex}>
                        <input type="checkbox" id="seo" name="categoria" value="SEO" />
                        <label htmlFor="seo">SEO</label>
                    </div>
                </div>
                <div className={styles.inputsS}>
                    <div className={styles.flex}>
                        <input type="checkbox" id="socialMediaManager" name="categoria" value="Social Media Manager" />
                        <label htmlFor="socialMediaManager">Social Media Manager</label>
                    </div>
                    <div className={styles.flex}>
                        <input type="checkbox" id="marketing" name="categoria" value="Marketing" />
                        <label htmlFor="marketing">Marketing</label>
                    </div>
                    <div className={styles.flex}>
                        <input type="checkbox" id="emailMarketing" name="categoria" value="Email Marketing" />
                        <label htmlFor="emailMarketing">Email Marketing</label>
                    </div>
                </div>
                <textarea placeholder='descricao'/>
                <button>
                    Enviar
                </button>
              
  
           </div>
        </div>
    
    );
};

export default Contato;