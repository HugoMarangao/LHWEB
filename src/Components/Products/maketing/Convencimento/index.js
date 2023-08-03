// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiUsers,FiPieChart,FiSearch,FiMail } from 'react-icons/fi';
import { useTranslation } from 'next-i18next'; 
import Head from 'next/head';
const ConvencimentoMarketing = ({id}) => {
     
      const { t } = useTranslation('common');
      const router = useRouter();

      const [parceiros, setParceiros] = useState([
        { id: 1, src: '/assets/Parceiros/babita.png' },
        { id: 2, src: '/assets/Parceiros/brilhodemulher.png' },
        { id: 3, src: '/assets/Parceiros/brilhointimo.png' },
        { id: 4, src: '/assets/Parceiros/criswinter.png' },
        { id: 5, src: '/assets/Parceiros/deissy.png' },
        { id: 6, src: '/assets/Parceiros/fetelle.png' },
        { id: 7, src: '/assets/Parceiros/fitsgym.png' },
        { id: 8, src: '/assets/Parceiros/horadosono.png' },
        { id: 9, src: '/assets/Parceiros/jussilly.png' },
        { id: 10, src: '/assets/Parceiros/kallifon.png' },
        { id: 11, src: '/assets/Parceiros/lindaseducao.png' },
        { id: 12, src: '/assets/Parceiros/mercado.png' },
        { id: 13, src: '/assets/Parceiros/oficina.png' },
        { id: 14, src: '/assets/Parceiros/ouseuse.png' },
        { id: 15, src: '/assets/Parceiros/tereza.png' },
        { id: 16, src: '/assets/Parceiros/useintuicao.png' },
      ]);
      const [comentatios, setComentarios] = useState([
        { id: 1, comento: 'Sistema de notificacoes mudou minhas vendas',nome: 'Anna', src: '/assets/Parceiros/brilhodemulher.png' },
        { id: 2, comento: 'Trabalho fenomenal',nome: 'Tulio',src: '/assets/Parceiros/brilhointimo.png' },
        { id: 3, comento: 'reconhecimento de marca inedito',nome: 'Patrick',src: '/assets/Parceiros/criswinter.png'  },
        { id: 4, comento: 'transparencia e confianca ',nome: 'Fernanda',src: '/assets/Parceiros/deissy.png'  },
        { id: 5, comento: 'aplicativos responsiveis ',nome: 'Julia',src: '/assets/Parceiros/fetelle.png' },
        { id: 6, comento: 'Sistema integrado com meu armazem',nome: 'Thiago',src: '/assets/Parceiros/fitsgym.png'  },
        { id: 7, comento: '/assets/Parceiros/fitsgym.png',nome: 'Renata',src: '/assets/Parceiros/horadosono.png' },
        { id: 8, comento: 'Sistema de notificacoes mudou minhas vendas',nome: 'Gustavo', src: '/assets/Parceiros/babita.png' },
        { id: 9, comento: 'Sistema de notificacoes mudou minhas vendas',nome: 'Carol',src: '/assets/Parceiros/jussilly.png' },
        { id: 10, comento: 'Sistema de notificacoes mudou minhas vendas',nome: 'Melisa',src: '/assets/Parceiros/kallifon.png'  },
        { id: 11, comento: 'Sistema de notificacoes mudou minhas vendas',nome: 'Maria Julia', src: '/assets/Parceiros/lindaseducao.png' },
        { id: 12, comento: 'Sistema de notificacoes mudou minhas vendas',nome: 'Yasmim',src: '/assets/Parceiros/mercado.png' },
        { id: 13, comento: 'Sistema de notificacoes mudou minhas vendas',nome: 'Luigi',src: '/assets/Parceiros/oficina.png' },
        { id: 14, comento: 'Sistema de notificacoes mudou minhas vendas',nome: 'Leticia', src: '/assets/Parceiros/ouseuse.png' },
        { id: 15, comento: 'Sistema de notificacoes mudou minhas vendas',nome: 'Jaine',src: '/assets/Parceiros/tereza.png'  },
        { id: 16, comento: 'Sistema de notificacoes mudou minhas vendas',nome: 'Sirlene',src: '/assets/Parceiros/useintuicao.png'  },
      ]);
      const [slide, setSlide] = useState(0);
      let slideContent;
      switch(slide) {
        case 0:
          slideContent = (
           <>
            <div className={styles.funcao} >
              <div className={styles.mobile}>
                  <h2>12:30</h2>
                  <div className={styles.box}>
                  <div className={styles.logo}/>
                  <h2>{t('slideM.titulo')}</h2>
                  <p>{t('slideM.subtitulo')}</p>
              </div>
              </div>
              <div className={styles.conteudo}>
                  <div className={styles.box}>
                  <p>{t('slideM.desc')}</p>
                  <p>{t('slideM.desc2')}<b>{t('slideM.descS')}</b>{t('slideM.desc3')}</p>
                  </div>
              </div>
            </div>
            </>
          );
          break;
        case 1:
          slideContent = (
           <>
             <div className={styles.funcao} >
              <div className={styles.mobile}>
                  <h2>13:30</h2>
                  <div className={styles.box}>
                  <div className={styles.logo}/>
                  <h2>{t('slideM1.titulo')}</h2>
                  <p>{t('slideM1.subtitulo')}</p>
              </div>
              </div>
              <div className={styles.conteudo}>
                  <div className={styles.box}>
                  <p>{t('slideM1.desc')}</p>
                  <p>{t('slideM1.desc2')}<b>{t('slideM1.descS')}</b>{t('slideM1.desc3')}</p>
                  </div>
              </div>
            </div>
            </>
          );
          break;
        case 2:
          slideContent = (
           <>
            <div className={styles.funcao} >
              <div className={styles.mobile}>
                  <h2>13:00</h2>
                  <div className={styles.box}>
                  <div className={styles.logo}/>
                  <h2>{t('slideM2.titulo')}</h2>
                  <p>{t('slideM2.subtitulo')}</p>
              </div>
              </div>
              <div className={styles.conteudo}>
                  <div className={styles.box}>
                  <p>{t('slideM2.desc')}</p>
                  <p>{t('slideM2.desc2')}<b>{t('slideM2.descS')}</b>{t('slideM2.desc3')}</p>
                  </div>
              </div>
            </div>
            </>
          );
          break;
        case 3:
          slideContent = (
          <>
            <div className={styles.funcao}>
              <div className={styles.mobile}>
                  <h2>13:30</h2>
                  <div className={styles.box}>
                  <div className={styles.logo}/>
                  <h2>{t('slideM3.titulo')}</h2>
                  <p>{t('slideM3.subtitulo')}</p>
              </div>
              </div>
              <div className={styles.conteudo}>
                  <div className={styles.box}>
                  <p>{t('slideM3.desc')}</p>
                  <p>{t('slideM3.desc2')}<b>{t('slideM3.descS')}</b>{t('slideM3.desc3')}</p>
                  </div>
              </div>
            </div>
            </>
          );
          break;
        default:
          slideContent = null;
      }

      const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 3000, // Aumenta a duração da transição
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, // Aumenta o intervalo entre as transições
        cssEase: 'linear', // Faz a transição em velocidade constante
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      };
      

      const settings2 = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 1000,
        slidesToShow: 1, // Adicione um valor decimal ligeiramente menor
        slidesToScroll: 1,
        autoplay: true,
      };


      const handlePlanClick = (planType) => {
        // Aqui, estou supondo que sua página de checkout esteja em '/checkout'. Modifique conforme necessário.
        router.push({
            pathname: '/Checkout',
            query: { 
                plano: planType, 
                servico: 'Markting Digital' // Defina o serviço aqui. Adapte conforme sua necessidade.
            }
        });
    }

    return(

        <div className={styles.container}>
            <Head>
                <title>{t('metasMarketing.title')}</title>
                <link rel="icon" href="/favicon.ico" />

                <meta name="description" content={t('metasMarketing.description')} />
                
                <meta name="keywords" content={t('metasMarketing.keywords')} />
                
                <meta property="og:title" content={t('metasMarketing.title')} />
                <meta property="og:description" content={t('metasMarketing.description')}/>
                <meta property="og:image" content="https://media.licdn.com/dms/image/D4E03AQG-mMsf0AQTWA/profile-displayphoto-shrink_800_800/0/1685707206328?e=2147483647&v=beta&t=RwPm_QVU4iLnehPufd2el601sa5m1PsOh2tKzxyP5Oc" />
                <meta property="og:url" content="https://lhweb.vercel.app/Produtos/marketingdigital" />
                
                <link rel="canonical" href="https://lhweb.vercel.app/Produtos/marketingdigital" />
            </Head>

           <div className={styles.flex}> 
                <div className={styles.produto}>
                    <div className={styles.bol}> 
                        <div className={styles.boltrasada}> 
                                <div className={styles.Imagem}/>
                        </div>
                    </div>
                </div>
                <div className={styles.text}>
                    <h1>{t('conversaoMarketing.title')}</h1>
                    <p>{t('conversaoMarketing.description')}<b>{t('conversaoMarketing.descriptiondestaque')}</b>{t('conversaoMarketing.description1')}</p>
                    <p>{t('conversaoMarketing.description2')}<b>{t('conversaoMarketing.descriptiondestaque1')}</b>{t('conversaoMarketing.description3')}</p>
                    <p>{t('conversaoMarketing.description4')}<b>{t('conversaoMarketing.descriptiondestaque2')}</b>{t('conversaoMarketing.description5')}</p>
                    <button>
                        <h1>{t('conversaoMarketing.button')}</h1>
                    </button>
                </div>

           </div>
           <div className={styles.empresas}>
                <div className={styles.text}>
                    <h1>{t('conversaoMarketing.title2')}</h1>
                </div>

                <Slider {...settings}>
                    {parceiros.map((parceiro) => (
                    <div key={parceiro.id}>
                        <Image src={parceiro.src} alt={`Logo do parceiro ${parceiro.id}`} width={120} height={100} />
                    </div>
                    ))}
                </Slider>
                <Slider {...settings2}>
                    {comentatios.map((comento) => (
                        <div key={comento.id} className={styles.comentarios}>
                        <div className={styles.desing}>
                            <div className={styles.bolblue}>
                            <div className={styles.product}>
                            <div className={styles.logo}>
                                <Image src={comento.src} alt={`Logo do parceiro hora do sono`} width={120} height={100} />
                            </div>
                            </div>
                            </div>
                            
                            
                            <div className={styles.comentvero}>
                                <h1>{comento.nome}</h1>
                                <h2><b>{"\\\\"} </b>Responsavel pelo Marketing</h2>
                                <h3>{comento.comento}</h3>
                            </div>
                        </div>
                     </div>
                    ))}
                </Slider>
           </div>
           <div className={styles.funcionalidades}>
                <div className={styles.text}>
                    <h1>{t('conversaoMarketing.title3')}</h1>
                    <p>{t('conversaoMarketing.description6')}<b>{t('conversaoMarketing.descriptiondestaque3')}</b>{t('conversaoMarketing.description7')}<b>{t('conversaoMarketing.descriptiondestaque4')}</b>{t('conversaoMarketing.description8')}<b>{t('conversaoMarketing.descriptiondestaque5')}</b>{t('conversaoMarketing.description9')}</p>
                    <button>
                        <h2>{t('conversaoMarketing.button1')}</h2>
                    </button>
                </div>
                <div className={styles.flex}>
    <div className={styles.icons}>
        <button className={`${styles.box} ${slide === 0 ? styles.active : ''}`} onClick={() => setSlide(0)}>
            <div className={styles.icon}>
                <FiPieChart size={35} color='#000'/>
            </div>
            <div className={styles.boxText}>
                <h3>{t('conversaoMarketing.titleicon')}</h3>
                <p>{t('conversaoMarketing.descriptionicon')}</p>
            </div>
        </button>
        <button className={`${styles.box} ${slide === 1 ? styles.active : ''}`} onClick={() => setSlide(1)}>
            <div className={styles.icon}>
                <FiSearch size={35} color='#000'/>
            </div>
            <div className={styles.boxText}>
                <h3>{t('conversaoMarketing.titleicon1')}</h3>
                <p>{t('conversaoMarketing.descriptionicon1')}</p>
            </div>
        </button>
        <button className={`${styles.box} ${slide === 2 ? styles.active : ''}`} onClick={() => setSlide(2)}>
            <div className={styles.icon}>
                <FiUsers size={35} color='#000'/>
            </div>
            <div className={styles.boxText}>
                <h3>{t('conversaoMarketing.titleicon2')}</h3>
                <p>{t('conversaoMarketing.descriptionicon2')}</p>
            </div>
        </button>
        <button className={`${styles.box} ${slide === 3 ? styles.active : ''}`} onClick={() => setSlide(3)}>
            <div className={styles.icon}>
                <FiMail size={35} color='#000'/>
            </div>
            <div className={styles.boxText}>
                <h3>{t('conversaoMarketing.titleicon3')}</h3>
                <p>{t('conversaoMarketing.descriptionicon3')}.</p>
            </div>
        </button>
    </div>
    <Slider >
        {slideContent}
    </Slider>
</div>
           </div>
           <div className={styles.planos}>
            <div className={styles.titulo}> 
                <h2>Crie o app da sua loja</h2>
                <h3>escolha seu plano!</h3>
            </div>
            <div className={styles.containerplanos}>
            <div className={styles.box}>
                        <h2>Plano Basico</h2>
                        <h3>Ideal para iniciantes, startups ou empresas de pequeno porte que desejam estabelecer sua presença no mundo digital. Este plano oferece:</h3>
                        <li>Análise de Público-Alvo e Definição de Personas</li>
                        <li>Análise do Funil de Vendas e Identificação de Melhoria</li>
                        <li>Otimização de Páginas de Destino e CTA</li>
                        <li>2 Campanhas redes sociais e Google Ads</li>
                        <li>Campanhas de E-mail Marketing Segmentadas</li>
                        <li>Relatórios de Métricas de Engajamento</li>
                        <p>99$/mes</p>
                        <button onClick={() => handlePlanClick('basico')}>
                            inicie sua campanha 
                        </button>
                </div>
                <div className={styles.box}>
                        <h2>Plano Avançado (Recomendado)</h2>
                        <h3>Este plano é perfeito para empresas de médio porte que estão procurando adicionar mais funcionalidades ao seu site. Ele inclui tudo do Plano Básico, além de:</h3>
                        <li>Análise abrangente da presença online atual da empresa</li>
                        <li>Gerenciamento de redes sociais</li>
                        <li>Parcerias estratégicas e influenciadores</li>
                        <li>4 Campanhas redes sociais e  Google Ads</li>
                        <li>Otimização de Conversão e Experiência do Usuário</li>
                        <p>120$/mes</p>
                        <button onClick={() => handlePlanClick('Avançado')}>
                            inicie sua campanha 
                        </button>
                </div>
                <div className={styles.box}>
                        <h2>Plano Personalizado</h2>
                        <h3>Criado para empresas maiores ou para aquelas com necessidades específicas, este plano oferece uma solução personalizada que se adapta perfeitamente à sua marca e aos seus objetivos. Ele inclui tudo do Plano Avançado, além de:</h3>
                        <li>Recursos personalizados conforme as necessidades da sua empresa</li>
                        <li>Análise Preditiva de Dados e Modelagem de Funil de Vendas</li>
                        <li>Personalização Avançada de Experiência do Usuário</li>
                        <li>Monitoramento Avançado de Métricas, KPIs e ROI </li>
                        <li>sem limites de campahas </li>
                        <p>🔒$/mes</p>
                        <button onClick={() => handlePlanClick('Personalizado')}>
                            inicie sua campanha 
                        </button>
                </div>
            </div>
           </div>
        </div>
    
    );
};

export default ConvencimentoMarketing;