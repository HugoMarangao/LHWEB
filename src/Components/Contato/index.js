import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next';
import { db } from '../Config/Firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';


const Contato = () => {
    const { t } = useTranslation('common');

    const [inputValues, setInputValues] = useState({
      nomeCompleto: '',
      nomeEmpresa: '',
      email: '',
      telefone: '',
      mensagem: '',
    });
  
    const [servicos, setServicos] = useState({
      webDesign: false,
      app: false,
      seo: false,
      socialMediaManager: false,
      marketing: false,
      emailMarketing: false,
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setInputValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleServicosChange = (event) => {
      const { id, checked } = event.target;
      setServicos((prevState) => ({
        ...prevState,
        [id]: checked,
      }));
    };
  
    const handleFormSubmit = async () => {
      if (!inputValues.nomeCompleto || !inputValues.nomeEmpresa || !inputValues.email || !inputValues.telefone || !inputValues.mensagem) {
          toast.error('Por favor, preencha todos os campos.');
          return;
      }
  
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValues.email)) {
          toast.warning('Informe um email válido.');
          return;
      }
  
      try {
        const data = {
          ...inputValues,
          servicos: Object.keys(servicos).filter((key) => servicos[key]),
        };
  
        await addDoc(collection(db, 'contatos'), data);
        toast.success('Dados salvos com sucesso!');
      } catch (error) {
        console.error('Erro ao salvar os dados:', error);
        toast.error('Erro ao salvar os dados. Por favor, tente novamente.');
      }
    };

  return (
    <div className={styles.container}>
      <h1>{t('contato.titulo')}</h1>
      <h2>{t('contato.subtitulo')}</h2>
      <div className={styles.box}>
        <div className={styles.inputs}>
          <input
            name="nomeCompleto"
            placeholder={t('contato.input')}
            value={inputValues.nomeCompleto}
            onChange={handleInputChange}
          />
          <input
            name="nomeEmpresa"
            placeholder={t('contato.input1')}
            value={inputValues.nomeEmpresa}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputs}>
          <input
            name="email"
            placeholder={t('contato.input2')}
            value={inputValues.email}
            onChange={handleInputChange}
          />
          <input
            name="telefone"
            placeholder={t('contato.input3')}
            value={inputValues.telefone}
            onChange={handleInputChange}
          />
        </div>
        <h3>{t('contato.mensagem')}</h3>
        <div className={styles.inputsS}>
          <div className={styles.flex}>
            <input
              type="checkbox"
              id="webDesign"
              name="categoria"
              value="Design Web"
              checked={servicos.webDesign}
              onChange={handleServicosChange}
            />
            <label htmlFor="webDesign">{t('contato.servico')}</label>
          </div>
          <div className={styles.flex}>
            <input
              type="checkbox"
              id="app"
              name="categoria"
              value="App"
              checked={servicos.app}
              onChange={handleServicosChange}
            />
            <label htmlFor="app">{t('contato.servico2')}</label>
          </div>
          <div className={styles.flex}>
            <input
              type="checkbox"
              id="seo"
              name="categoria"
              value="SEO"
              checked={servicos.seo}
              onChange={handleServicosChange}
            />
            <label htmlFor="seo">{t('contato.servico3')}</label>
          </div>
        </div>
        <div className={styles.inputsS}>
          <div className={styles.flex}>
            <input
              type="checkbox"
              id="socialMediaManager"
              name="categoria"
              value="Social Media Manager"
              checked={servicos.socialMediaManager}
              onChange={handleServicosChange}
            />
            <label htmlFor="socialMediaManager">{t('contato.servico1')}</label>
          </div>
          <div className={styles.flex}>
            <input
              type="checkbox"
              id="marketing"
              name="categoria"
              value="Marketing"
              checked={servicos.marketing}
              onChange={handleServicosChange}
            />
            <label htmlFor="marketing">{t('contato.servico4')}</label>
          </div>
          <div className={styles.flex}>
            <input
              type="checkbox"
              id="emailMarketing"
              name="categoria"
              value="Email Marketing"
              checked={servicos.emailMarketing}
              onChange={handleServicosChange}
            />
            <label htmlFor="emailMarketing">{t('contato.servico5')}</label>
          </div>
        </div>
        <textarea 
        placeholder={t('contato.input4')} 
        value={inputValues.mensagem}
        name="mensagem"
        onChange={handleInputChange} 
      />
        <button onClick={handleFormSubmit}>{t('contato.button')}</button>
      </div>
      
    </div>
  );
};

export default Contato;
