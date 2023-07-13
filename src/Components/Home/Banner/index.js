import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Banner = () => {
    const dataText = ["campanhas publicitárias direcionadas", "estratégias avançadas de seo", "marketing de mídia social envolvente","desenvolvimento de site personalizado","desenvolvimento de aplicativos inovadores"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 para escrever, -1 para apagar
    const [blink, setBlink] = useState(true);

    // Blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (direction === -1 && subIndex === 0) {
            setDirection(1);
            setIndex((index + 1) % dataText.length);
            return;
        }

        if (direction === 1 && subIndex === dataText[index].length + 1) {
            setDirection(-1);
            setTimeout(() => {}, 2000); // pause antes de começar a apagar
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prevSubIndex) => prevSubIndex + direction);
        }, direction === 1 ? 150 : 100); // velocidade de digitação e exclusão

        return () => clearTimeout(timeout);
    }, [subIndex, index, direction]);

    return (
        <div className={styles.container}>
            <video autoPlay loop muted className={styles.video}>
                <source src="/assets/Banner/banner.mp4" type="video/mp4" />
            </video>

            <div className={styles.overlayText}>
                <h1>Construa seu futuro com</h1>
                <h2>
                    {`${dataText[index].substring(0, subIndex)}${blink ? "|" : "|"}`}
                </h2>
            </div>
        </div>
    );
};

export default Banner;
