// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaSearch } from 'react-icons/fa';
import { RiLayoutGridLine,RiSpeedLine,RiUserHeartLine} from 'react-icons/ri';
import Head from 'next/head';
import { useTranslation } from 'next-i18next'; 

const ConvencimentoDesign = ({id}) => {
      const [activeButton, setActiveButton] = useState(null);
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
              <div className={styles.funcao}>
                  <div className={styles.mobile}>
                      <h2>12:00</h2>
                      <div className={styles.box}>
                          <div className={styles.logo}/>
                          <h2>{t('slideD.titulo')}</h2>
                          <p>{t('slideD.subtitulo')}</p>
                      </div>
                  </div>
                  <div className={styles.conteudo}>
                      <div className={styles.box}>
                          <p>{t('slideD.desc')}</p>
                          <p><b>{t('slideD.desc2')}</b></p>
                      </div>
                  </div>
              </div>
              </>
          );
          break;
        case 1:
          slideContent = (
              <>
              <div className={styles.funcao}>
                  <div className={styles.mobile}>
                      <h2>13:00</h2>
                      <div className={styles.box}>
                          <div className={styles.logo}/>
                          <h2>{t('slideD1.titulo')}</h2>
                          <p>{t('slideD1.subtitulo')}</p>
                      </div>
                  </div>
                  <div className={styles.conteudo}>
                      <div className={styles.box}>
                          <p>{t('slideD1.desc')}</p>
                          <p>{t('slideD1.desc2')}<b>{t('slideD1.descS')}</b></p>
                      </div>
                  </div>
              </div>
              </>
          );
          break;
          case 2:
              slideContent = (
                 <>
                  <div className={styles.funcao}>
                      <div className={styles.mobile}>
                          <h2>13:30</h2>
                          <div className={styles.box}>
                          <div className={styles.logo}/>
                          <h2>{t('slideD2.titulo')}</h2>
                          <p>{t('slideD2.subtitulo')}</p>
                      </div>
                  </div>
                  <div className={styles.conteudo}>
                      <div className={styles.box}>
                          <p>{t('slideD2.desc')}</p>
                          <p>{t('slideD2.desc2')}<b>{t('slideD2.descS')}</b></p>
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
                              <h2>14:00</h2>
                              <div className={styles.box}>
                          <div className={styles.logo}/>
                          <h2>{t('slideD3.titulo')}</h2>
                          <p>{t('slideD3.subtitulo')}</p>
                      </div>
                  </div>
                  <div className={styles.conteudo}>
                      <div className={styles.box}>
                          <p>{t('slideD3.desc')}</p>
                          <p>{t('slideD3.desc2')}<b>{t('slideD3.descS')}</b></p>
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
                servico: 'Criar Site' // Defina o serviço aqui. Adapte conforme sua necessidade.
            }
        });
    }

    return(

        <div className={styles.container}>
            <Head>
                <title>{t('metasDesing.title')}</title>
                
                <meta name="description" content={t('metasDesing.description')} />
                
                <meta name="keywords" content={t('metasDesing.keywords')} />
                
                <meta property="og:title" content={t('metasDesing.title')} />
                <meta property="og:description" content={t('metasDesing.description')} />
                <meta property="og:image" content="https://media.licdn.com/dms/image/D4E03AQG-mMsf0AQTWA/profile-displayphoto-shrink_800_800/0/1685707206328?e=2147483647&v=beta&t=RwPm_QVU4iLnehPufd2el601sa5m1PsOh2tKzxyP5Oc" />
                <meta property="og:url" content="https://lhweb.vercel.app/Produtos/designweb" />
                
                <link rel="canonical" href="https://lhweb.vercel.app/Produtos/designweb" />
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
    <h1>{t('conversaoDesing.title')}</h1>
    <p>{t('conversaoDesing.description')} <b>{t('conversaoDesing.descriptiondestaque')}</b>{t('conversaoDesing.description1')} <b>{t('conversaoDesing.descriptiondestaque1')}</b> {t('conversaoDesing.description2')}</p>
    <p>{t('conversaoDesing.description3')} <b>{t('conversaoDesing.descriptiondestaque2')}</b>{t('conversaoDesing.description4')}<b>{t('conversaoDesing.descriptiondestaque3')}</b>.</p>
    <p>{t('conversaoDesing.description5')}<b>{t('conversaoDesing.descriptiondestaque4')}</b>{t('conversaoDesing.description6')}<b>{t('conversaoDesing.descriptiondestaque5')}</b> {t('conversaoDesing.description7')}</p>
    <button>
        <h1>{t('conversaoDesing.button')}</h1>
    </button>
</div>
           </div>
           <div className={styles.empresas}>
                <div className={styles.text}>
                    <h1>{t('conversaoDesing.title2')}</h1>
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
                    <h1>{t('conversaoDesing.title3')}</h1>
                    <p>{t('conversaoDesing.description8')} <b>{t('conversaoDesing.descriptiondestaque6')}</b>{t('conversaoDesing.description9')}<b>{t('conversaoDesing.descriptiondestaque7')}</b>{t('conversaoDesing.description10')}<b>{t('conversaoDesing.descriptiondestaque8')}</b>{t('conversaoDesing.description11')}</p>
                    <button>
                        <h2>{t('conversaoDesing.button1')}</h2>
                    </button>
                </div>
                <div className={styles.flex}>
                <div className={styles.icons}>
                    <button className={`${styles.box} ${activeButton === 0 ? styles.active : ''}`} onClick={() => {setSlide(0); setActiveButton(0);}}>
                        <div className={styles.icon}>
                            <RiLayoutGridLine size={35} color='#000'/>
                        </div>
                        <div className={styles.boxText}>
                            <h3>{t('conversaoDesing.titleicon')}</h3>
                            <p>{t('conversaoDesing.descriptionicon')}</p>
                        </div>
                    </button>
                    <button className={`${styles.box} ${activeButton === 1 ? styles.active : ''}`} onClick={() => {setSlide(1); setActiveButton(1);}}>
                        <div className={styles.icon}>
                            <FaSearch size={35} color='#000'/>
                        </div>
                        <div className={styles.boxText}>
                            <h3>{t('conversaoDesing.titleicon1')}</h3>
                            <p>{t('conversaoDesing.descriptionicon1')}</p>
                        </div>
                    </button>
                    <button className={`${styles.box} ${activeButton === 2 ? styles.active : ''}`} onClick={() => {setSlide(2); setActiveButton(2);}}>
                        <div className={styles.icon}>
                            <RiUserHeartLine size={35} color='#000'/>
                        </div>
                        <div className={styles.boxText}>
                            <h3>{t('conversaoDesing.titleicon2')}</h3>
                            <p>{t('conversaoDesing.descriptionicon2')}</p>
                        </div>
                    </button>
                    <button className={`${styles.box} ${activeButton === 3 ? styles.active : ''}`} onClick={() => {setSlide(3); setActiveButton(3);}}>
                        <div className={styles.icon}>
                            <RiSpeedLine size={35} color='#000'/>
                        </div>
                        <div className={styles.boxText}>
                            <h3>{t('conversaoDesing.titleicon3')}</h3>
                            <p>{t('conversaoDesing.descriptionicon3')}</p>
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
                <h2>Crie o site da sua loja</h2>
                <h3>escolha seu plano!</h3>
            </div>
            <div className={styles.containerplanos}>
            <div className={styles.box}>
                        <h2>Plano Basico</h2>
                        <h3>Ideal para iniciantes, startups ou empresas de pequeno porte que desejam estabelecer sua presença no mundo digital. Este plano oferece:</h3>
                        <li>Website com 1 Páginas</li>
                        <li>Hospedagem Segura</li>
                        <li>Formulario de Contato</li>
                        <li>Integração de mídia social</li>
                        <li>Otimização básica de SEO</li>
                        <li>Mapa de localização</li>
                        <p>99$/mes</p>
                        <button onClick={() => handlePlanClick('Basico')}>
                            Crie seu site
                        </button>
                </div>
                <div className={styles.box}>
                        <h2>Plano Avançado (Recomendado)</h2>
                        <h3>Este plano é perfeito para empresas de médio porte que estão procurando adicionar mais funcionalidades ao seu site. Ele inclui tudo do Plano Básico, além de:</h3>
                        <li>Notificações push para engajamento do usuário</li>
                        <li>Sistema de pagamento integrado</li>
                        <li>Autenticação de usuário e gerenciamento de perfil</li>
                        <li>Slide Show Dinâmico com Imagens</li>
                        <p>120$/mes</p>
                        <button onClick={() => handlePlanClick('avancado')}>
                            Crie seu site
                        </button>
                </div>
                <div className={styles.box}>
                        <h2>Plano Personalizado</h2>
                        <h3>Criado para empresas maiores ou para aquelas com necessidades específicas, este plano oferece uma solução personalizada que se adapta perfeitamente à sua marca e aos seus objetivos. Ele inclui tudo do Plano Avançado, além de:</h3>
                        <li>Recursos personalizados conforme as necessidades da sua empresa</li>
                        <li>Integração com Ferramentas de Automação de Marketing</li>
                        <li>Suporte para múltiplos idiomas</li>
                        <li>Otimização SEO Avançada  com Pesquisa de Palavras-chaves</li>
                        <p>🔒$/mes</p>
                        <button onClick={() => handlePlanClick('Personalizado')}>
                            Crie seu App
                        </button>
                </div>
            </div>
           </div>
        </div>
    
    );
};

export default ConvencimentoDesign;