// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Coments from '@/Components/Home/Coments';
import { useTranslation } from 'next-i18next'; 

const Caracteristicas = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    return(
        <div className={styles.container}>
            <div className={styles.flex}>
                <div onClick={() => router.push('/Produtos/criacaodeapps')} className={styles.box}>
                    <div className={styles.image} style={{backgroundImage: `url('/assets/Products/app.webp')`}}/>
                    <h1>{t('servicos.titulo')}</h1>
                    <p>{t('servicos.descricao')}</p>
                    <button>{t('servicos.button')}</button>
                </div>
                <div onClick={() => router.push('/Produtos/designweb')} className={styles.box}>
                    <div className={styles.image} style={{backgroundImage: `url('/assets/Products/computer.png')`}}/>
                    <h1>{t('servicos.titulo1')}</h1>
                    <p>{t('servicos.descricao1')}</p>
                    <button>{t('servicos.button')}</button>
                </div>
                <div onClick={() => router.push('/Produtos/marketingdigital')} className={styles.box}>
                    <div className={styles.image} style={{backgroundImage: `url('/assets/Products/maketing.webp')`}}/>
                    <h1>{t('servicos.titulo3')}</h1>
                    <p>{t('servicos.descricao3')}</p>
                    <button>{t('servicos.button')}</button>
                </div>
                <div onClick={() => router.push('/Produtos/seo')} className={styles.box}>
                    <div className={styles.image} style={{backgroundImage: `url('/assets/Products/seo.webp')`}}/>
                    <h1>{t('servicos.titulo2')}</h1>
                    <p>{t('servicos.descricao2')}</p>
                    <button>{t('servicos.button')}</button>
                </div>
            </div>
            <div className={styles.curiosidade}>
                <div className={styles.servicos}>
                    <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                                <div className={styles.imageS} style={{backgroundImage: `url('/assets/Products/iphone.webp')`}}>
                                    <div className={styles.boxS}>
                                            <h2>{t('descricao.titulo')}</h2>
                                            <p>{t('descricao.descricao')}</p>
                                            <p>{t('descricao.descricaop')}</p>
                                            <button  onClick={() => router.push('/Produtos/criacaodeapps')}>{t('descricao.button')}</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className={styles.servicos2}>
                    <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                                <div className={styles.imageS} style={{backgroundImage: `url('/assets/Products/mac.webp')`}}>
                                    <div className={styles.boxS}>
                                            <h2>{t('descricao.titulo1')}</h2>
                                            <p>{t('descricao.descricao1')}</p>
                                            <p>{t('descricao.descricaop1')}</p>
                                            <button onClick={() => router.push('/Produtos/designweb')}>{t('descricao.button')}</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
            <div className={styles.curiosidade2}>
                <div className={styles.servicos}>
                    <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                                <div className={styles.imageS} style={{backgroundImage: `url('/assets/Products/iphone.webp')`}}>
                                    <div className={styles.boxS}>
                                            <h2>{t('descricao.titulo2')}</h2>
                                            <p>{t('descricao.descricao2')}</p>
                                            <p>{t('descricao.descricaop2')}</p>
                                            <button onClick={() => router.push('/Produtos/marketingdigital')}>{t('descricao.button')}</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className={styles.servicos2}>
                    <div className={styles.bol}>
                            <div className={styles.boltrasada}>
                                <div className={styles.imageS} style={{backgroundImage: `url('/assets/Products/mac.webp')`}}>
                                    <div className={styles.boxS}>
                                            <h2>{t('descricao.titulo3')}</h2>
                                            <p>{t('descricao.descricao3')}</p>
                                            <p>{t('descricao.descricaop3')}</p>
                                            <button onClick={() => router.push('/Produtos/seo')}>{t('descricao.button')}</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
            <Coments/>
        </div>
    );
};


export default Caracteristicas;