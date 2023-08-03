import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next';
import { toast } from 'react-toastify';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { db } from '../Config/Firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const ConfirmCheckout = () => {

  const { t } = useTranslation('common');
  
  const router = useRouter();

  const { servico, plano } = router.query;
  console.log(servico)

  const [currentStep, setCurrentStep] = useState(1);

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const [userData, setUserData] = useState({
    nomeCompleto: '',
    nomeEmpresa: '',
    email: '',
    telefone: ''
  });

  //const stripe
  const stripe = useStripe();
  const elements = useElements();



  const handleServicosChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleFormSubmit = async () => {
    event.preventDefault();
    if (!userData.nomeCompleto || !userData.nomeEmpresa || !userData.email || !userData.telefone ) {
        toast.error('Por favor, preencha todos os campos.');
        return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        toast.warning('Informe um email válido.');
        return;
    }

    try {
      const data = {
        ...userData,
       servico:servico,
       pagamento:'pedente',
       plano:plano
      };

      await addDoc(collection(db, 'requisicoes'), data);
      toast.success('Dados salvos com sucesso!');
      handleNextStep();
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
      toast.error('Erro ao salvar os dados. Por favor, tente novamente.');
    }
  };

  const handleCardChange = (event) => {
    if (event.brand) {
      setState(prev => ({ ...prev, type: event.brand }));
    }
    if (event.complete) {
      if (event.elementType === "cardNumber") {
        setState(prev => ({ ...prev, number: "•••• •••• •••• " + event.value.last4 }));
      } else if (event.elementType === "cardExpiry") {
        setState(prev => ({ ...prev, expiry: event.value.month + "/" + event.value.year.toString().slice(-2) }));
      } else if (event.elementType === "cardCvc") {
        setState(prev => ({ ...prev, cvc: "•••" }));
      }
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className={styles.container}>
            <div className={styles.box}>
              <h1>Alguns dados</h1>
              <form className={styles.form} onSubmit={handleFormSubmit}>
                  <input name="nomeCompleto" placeholder='nome Completo' value={userData.nomeCompleto}  onChange={handleServicosChange}/>
                  <input name="nomeEmpresa" placeholder='nome da Empresa' value={userData.nomeEmpresa}  onChange={handleServicosChange}/>
                  <input name="email" placeholder='E-mail' value={userData.email}  onChange={handleServicosChange}/>
                  <input name="telefone" placeholder='telefone' value={userData.telefone}  onChange={handleServicosChange}/>
                  <button type="submit">Proximo</button>
              </form>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.flex}>
                <Cards
                  number={state.number}
                  expiry={state.expiry}
                  cvc={state.cvc}
                  name={state.name}
                  focused={state.focus}
                  className={styles.card}
                />

                {/* Renderizar o CardElement para coleta segura de detalhes */}
                <form className={styles.form} onSubmit={handleSubmit}>
                  <CardElement 
                    className={styles.cardElement} 
                    onChange={handleCardChange}
                    hidePostalCode
                  />
                  <button type="submit" disabled={!stripe}>Pagar</button>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

// --- area da stipe
const handleSubmit = async (event) => {
  event.preventDefault();

  if (!stripe || !elements) {
    toast.error("Stripe ainda não foi carregado. Por favor, tente novamente.");
    return;
  }

  const cardElement = elements.getElement(CardElement);

  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,  // Use o CardElement em vez de passar os detalhes manualmente
  });

  if (error) {
    console.error(error);
    if (error.type === 'validation_error') {
      toast.error("Detalhes do cartão são inválidos.");
    } else {
      toast.error("Erro ao criar o método de pagamento. Por favor, verifique os detalhes do cartão.");
    }
    return;
  }

  // Caso contrário, continue com a parte de processamento de pagamento
  const {id} = paymentMethod;

  try {
    const response = await fetch('/api/pagamento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 100,
        id: id  // Use o ID do paymentMethod aqui
      }), 
    });
    const data = await response.json();
    console.log(data);
} catch (err) {
    console.log(err);
}
};


// --- area da stipe

  return (
    <div className={styles.container}>

      <h1>Checkout</h1>
      <h2>{t('contato.subtitulo')}</h2>

      {renderStepContent()}

    </div>
  );
};

export default ConfirmCheckout;
