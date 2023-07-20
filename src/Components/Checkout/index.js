import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next';
import { toast } from 'react-toastify';

const ConfirmCheckout = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { servico, plano } = router.query;

  const [userData, setUserData] = useState({
    nomeCompleto: '',
    nomeEmpresa: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckout = async () => {
    const { nomeCompleto, email, telefone } = userData;
  
    if (!nomeCompleto || !email || !telefone) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
  
    try {
      const response = await fetch('/api/pagamento', {
        method: 'POST',
      });
  
      if (!response.ok) {
        const errorDetails = await response.text();
        console.error('Detalhes do erro:', errorDetails);
        throw new Error('Erro ao criar a ordem de pagamento.');
      }
  
      const data = await response.json();
      const { orderID } = data;
  
      // Redirecionar para a página de pagamento do PayPal
      window.location.href = `https://www.paypal.com/checkoutnow?token=${orderID}`;


    } catch (error) {
      console.error('Erro ao criar a ordem de pagamento:', error);
      toast.error('Ocorreu um erro ao processar o pagamento. Por favor, tente novamente mais tarde.');
    }
  };
  

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <h2>{t('contato.subtitulo')}</h2>
      <div className={styles.box}>
        <div className={styles.inputs}>
          <input
            name="nomeCompleto"
            placeholder={t('contato.input')}
            value={userData.nomeCompleto}
            onChange={handleInputChange}
          />
          <input
            name="nomeEmpresa"
            placeholder={t('contato.input1')}
            value={userData.nomeEmpresa}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputs}>
          <input
            name="email"
            placeholder={t('contato.input2')}
            value={userData.email}
            onChange={handleInputChange}
          />
          <input
            name="telefone"
            placeholder={t('contato.input3')}
            value={userData.telefone}
            onChange={handleInputChange}
          />
        </div>
        <h3>{t('contato.mensagem')}</h3>
        <div className={styles.inputs}>
          <input placeholder="servico" value={servico} readOnly />
          <input placeholder="plano" value={plano} readOnly />
        </div>

        <textarea
          name="mensagem"
          placeholder={t('contato.input4')}
          value={userData.mensagem}
          onChange={handleInputChange}
        />
        <button onClick={handleCheckout}>{t('contato.button')}</button>
      </div>
    </div>
  );
};

export default ConfirmCheckout;
