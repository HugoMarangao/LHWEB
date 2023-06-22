// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';

const Banner = () => {

    return(

        <div className={styles.container}>
            <video autoPlay loop muted className={styles.video}>
                <source src="/assets/Banner/banner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    
    );
};

export default Banner;