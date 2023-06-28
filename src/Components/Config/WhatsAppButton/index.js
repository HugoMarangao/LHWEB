import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { AiOutlineWhatsApp } from "react-icons/ai";
import { motion, useAnimation } from 'framer-motion';

const WhatsAppButton = () => {
  const WhatsAppUrl = "https://wa.me/3488194366"; // altere para o seu número do WhatsApp
  const buttonControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      buttonControls.start({
        x: [0, 10, -10, 10, -10, 0], // Valores de deslocamento horizontal
        y: [0, -10, 10, -10, 10, 0], // Valores de deslocamento vertical
        transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1] } // Tempos de transição para cada valor
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div animate={buttonControls} className={styles.whatsAppButton}>
      <a href={WhatsAppUrl} target="_blank">
        <AiOutlineWhatsApp size={35} color="#FFF" />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
