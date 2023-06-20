// components/WhatsAppButton.js
import React from 'react';
import styles from './styles.module.scss';
import { AiOutlineWhatsApp } from "react-icons/ai";
const WhatsAppButton = () => {
  const WhatsAppUrl = "https://wa.me/3488194366"; // altere para o seu número do WhatsApp

  return (
    <a href={WhatsAppUrl} target="_blank" className={styles.whatsAppButton}>
      <AiOutlineWhatsApp size={35} color="#FFF" />
    </a>
  );
};

export default WhatsAppButton;
