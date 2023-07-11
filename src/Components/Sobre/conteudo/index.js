// components/Header.js
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Chamada from '@/Components/Home/Chamada';
import { FiBell, FiUserPlus, FiDollarSign, FiGlobe, FiSmile, FiActivity, FiArrowUpRight } from 'react-icons/fi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'next-i18next'; 

const Conteudo = () => {
    const { t } = useTranslation('common');
    const [slide, setSlide] = useState(0);
    let slideContent;
    switch(slide) {
        case 0:
          slideContent = (
             <div>
                <li>{t('descricoes.descricoes')}</li>
                <li>{t('descricoes.descricoes1')}</li>
                <li>{t('descricoes.descricoes2')}</li>
                <li>{t('descricoes.descricoes3')}</li>
             </div>
          );
          break;
        case 1:
          slideContent = (
            <div>
                <li>{t('descricoes.descricoes4')}</li>  
                <li>{t('descricoes.descricoes5')}</li>
                <li>{t('descricoes.descricoes6')}</li>
                <li>{t('descricoes.descricoes7')}</li>
            </div>
          );
          break;
        case 2:
          slideContent = (
            <div>
                <li>{t('descricoes.descricoes8')}</li>
                <li>{t('descricoes.descricoes9')}</li>
                <li>{t('descricoes.descricoes10')}</li>
                <li>{t('descricoes.descricoes11')}</li>
            </div>
          );
          break;
        case 3:
          slideContent = (
            <div>
                <li>{t('descricoes.descricoes12')}</li>
                <li>{t('descricoes.descricoes13')}</li>
                <li>{t('descricoes.descricoes14')}</li>
                <li>{t('descricoes.descricoes15')}</li>
            </div>
          );
          break;
        case 4:
          slideContent = (
            <div>
                <li>{t('descricoes.descricoes16')}</li>
                <li>{t('descricoes.descricoes17')}</li>
                <li>{t('descricoes.descricoes18')}</li>
                <li>{t('descricoes.descricoes19')}</li>
            </div>
          );
          break;
        case 5:
          slideContent = (
            <div>
                <li>{t('descricoes.descricoes20')}</li>
                <li>{t('descricoes.descricoes21')}</li>
                <li>{t('descricoes.descricoes22')}</li>
                <li>{t('descricoes.descricoes23')}</li>
            </div>
          );
          break;
        default:
          slideContent = null;
        }
const handleClick = (index) => {
    setSlide(index);
}
    return(

        <div className={styles.container}>
            <div className={styles.Conteudo}>
               <div className={styles.box}>
                    <h3>{t('objetivos.titulo')}</h3>
                    <p>{t('objetivos.subtitulo')}</p>
               </div>
               <div className={styles.box}>
                    <h3>{t('objetivos.titulo1')}</h3>
                    <p>{t('objetivos.subtitulo1')}</p>
               </div>
               <div className={styles.box}>
                    <h3>{t('objetivos.titulo2')}</h3>
                    <p>{t('objetivos.subtitulo2')}</p>
               </div>
            </div>
           <div className={styles.objetivos}>{/* conteudo  */}
           <div className={styles.icons}>
        <div className={styles.box}>
        <button onClick={() => handleClick(0)} className={`${styles.button} ${slide === 0 ? styles.selected : styles.unselected}`}>
                <FiUserPlus  size={35} color='#000'/>
            </button>
            <h3>{t('objetivos.objetivo')}</h3>
        </div>
        <div className={styles.box}>
        <button onClick={() => handleClick(1)} className={`${styles.button} ${slide === 1 ? styles.selected : styles.unselected}`}>
                <FiDollarSign  size={35} color='#000'/>
            </button>
            <h3>{t('objetivos.objetivo1')}</h3>
        </div>
        <div className={styles.box}>
        <button onClick={() => handleClick(2)} className={`${styles.button} ${slide === 2 ? styles.selected : styles.unselected}`}>
                <FiGlobe  size={35} color='#000'/>
            </button>
            <h3>{t('objetivos.objetivo2')}</h3>
        </div>
        <div className={styles.box}>
        <button onClick={() => handleClick(3)} className={`${styles.button} ${slide === 3 ? styles.selected : styles.unselected}`}>
                <FiSmile  size={35} color='#000'/>
            </button>
            <h3>{t('objetivos.objetivo3')}</h3>
        </div>
        <div className={styles.box}>
        <button onClick={() => handleClick(4)} className={`${styles.button} ${slide === 4 ? styles.selected : styles.unselected}`}>
                <FiActivity  size={35} color='#000'/>
            </button>
            <h3>{t('objetivos.objetivo4')}</h3>
        </div>
        <div className={styles.box}>
        <button onClick={() => handleClick(5)} className={`${styles.button} ${slide === 5 ? styles.selected : styles.unselected}`}>
                <FiArrowUpRight  size={35} color='#000'/>
            </button>
            <h3>{t('objetivos.objetivo5')}</h3>
        </div>
    </div>
                    <div className={styles.apresentacao}>
                        <div className={styles.bol}>
                            <div className={styles.boltrasada}/>
                            
                        </div>
                        <div className={styles.computer}>
                            <div className={styles.box}>
                                <div className={styles.logo}/>
                                <div className={styles.text}>
                                <Slider >
                                    {slideContent}
                                </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
           </div>
            <Chamada/>
        </div>   
    );
};

export default Conteudo;