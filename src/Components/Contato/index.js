// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';
import { useTranslation } from 'next-i18next'; 
const Contato = () => {
    const { t } = useTranslation('common');
    return(

        <div className={styles.container}>
            <h1>{t('contato.titulo')}</h1>
            <h2>{t('contato.subtitulo')}</h2>
           <div className={styles.box}>
                <div className={styles.inputs}>
                    <input placeholder={t('contato.input')}/>
                    <input placeholder={t('contato.input2')}/>
                </div>
                <div className={styles.inputs}>
                    <input placeholder={t('contato.input3')}/>
                    <input placeholder={t('contato.input4')}/>
                </div>
                <h3>{t('contato.mensagem')}</h3>
                <div className={styles.inputsS}>
                    <div className={styles.flex}>
                        <input type="checkbox" id="webDesign" name="categoria" value="Design Web" />
                        <label htmlFor="webDesign">{t('contato.servico')}</label>
                    </div>
                    <div className={styles.flex}>
                        <input type="checkbox" id="app" name="categoria" value="App" />
                        <label htmlFor="app">{t('contato.servico2')}</label>
                    </div>
                    <div className={styles.flex}>
                        <input type="checkbox" id="seo" name="categoria" value="SEO" />
                        <label htmlFor="seo">{t('contato.servico3')}</label>
                    </div>
                </div>
                <div className={styles.inputsS}>
                    <div className={styles.flex}>
                        <input type="checkbox" id="socialMediaManager" name="categoria" value="Social Media Manager" />
                        <label htmlFor="socialMediaManager">{t('contato.servico4')}</label>
                    </div>
                    <div className={styles.flex}>
                        <input type="checkbox" id="marketing" name="categoria" value="Marketing" />
                        <label htmlFor="marketing">{t('contato.servico4')}</label>
                    </div>
                    <div className={styles.flex}>
                        <input type="checkbox" id="emailMarketing" name="categoria" value="Email Marketing" />
                        <label htmlFor="emailMarketing">{t('contato.servico5')}</label>
                    </div>
                </div>
                <textarea placeholder='descricao'/>
                <button>
                    {t('contato.button')}
                </button>
              
  
           </div>
        </div>
    
    );
};

export default Contato;