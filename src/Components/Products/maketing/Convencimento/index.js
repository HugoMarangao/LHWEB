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

const ConvencimentoMarketing = ({id}) => {
      const [activeButton, setActiveButton] = useState(null);
      const { t } = useTranslation('common');
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
                  <h2>Entenda seu Público</h2>
                  <p>Acompanhe as <b>métricas</b> e comportamentos do seu público em tempo real.</p>
              </div>
              </div>
              <div className={styles.conteudo}>
                  <div className={styles.box}>
                  <p>Quer entender melhor o comportamento do seu público,
                      saber quais estratégias estão funcionando e quais precisam de ajustes?</p>
                  <p>Através do <b>Analytics</b>, você tem acesso a dados em tempo real.</p>
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
                  <h2>12:30</h2>
                  <div className={styles.box}>
                  <div className={styles.logo}/>
                  <h2>Otimização para Motores de Busca</h2>
                  <p>Apareça nas primeiras posições dos motores de busca e aumente a visibilidade da sua <b>marca</b>.</p>
              </div>
              </div>
              <div className={styles.conteudo}>
                  <div className={styles.box}>
                  <p>Quer atrair mais clientes e aparecer nas primeiras posições
                      nos motores de busca como Google, Bing, Yahoo e outros?</p>
                  <p>Com uma estratégia de <b>SEO</b> eficaz, é possível alcançar esses objetivos e muito mais!</p>
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
                  <h2>13:00</h2>
                  <div className={styles.box}>
                  <div className={styles.logo}/>
                  <h2>Engaje Seu Público</h2>
                  <p>Alcance e engaje seu público através de <b>mídias sociais</b> populares.</p>
              </div>
              </div>
              <div className={styles.conteudo}>
                  <div className={styles.box}>
                  <p>Procurando maneiras de aumentar o engajamento do seu público
                      e alcançar uma base de clientes mais ampla?</p>
                  <p>Com a <b>Publicidade em Mídias Sociais</b>, é possível conectar-se diretamente com seu público-alvo.</p>
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
                  <h2>Conecte-se com Seus Clientes</h2>
                  <p>Mantenha seus clientes informados e envolvidos com eficazes campanhas de <b>e-mail marketing</b>.</p>
              </div>
              </div>
              <div className={styles.conteudo}>
                  <div className={styles.box}>
                  <p>Procurando maneiras de manter seus clientes envolvidos e informados
                      sobre novos produtos, promoções e atualizações?</p>
                  <p>O <b>E-mail Marketing</b> é uma maneira eficaz de manter seus clientes conectados.</p>
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

    return(

        <div className={styles.container}>
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
                        <h2>Essencial</h2>
                        <li>Desenvolvimento de um aplicativo funcional e intuitivo que atenda às necessidades básicas dos usuários.</li>
                        <li>Recursos principais, como cadastro de usuários, autenticação, navegação básica entre telas e notificações push para manter os usuários engajados</li>
                        <li>Design limpo e responsivo que proporciona uma experiência de usuário agradável.</li>
                        <li>Suporte técnico básico para resolver questões técnicas e responder a dúvidas dos usuários.</li>
                        <h3>R$99/mês</h3>
                        <button>
                            Crie seu App
                        </button>
                </div>
                <div className={styles.box}>
                        <h2>Personalizado</h2>
                        <li>Todos os recursos do Plano Básico, além de recursos adicionais para aprimorar a funcionalidade do aplicativo.</li>
                        <li>Integração de API para conectar o aplicativo a outros sistemas e serviços externos, possibilitando recursos como login com redes sociais e integração de pagamentos online.</li>
                        <li>Recursos avançados de análise de dados para acompanhar o desempenho do aplicativo e obter insights valiosos sobre o comportamento dos usuários.</li>
                        <li>Design personalizado e atraente que destaca a identidade da marca e cria uma experiência de usuário diferenciada.</li>
                        <h3></h3>
                        <button>
                            Crie seu App
                        </button>
                </div>
                <div className={styles.box}>
                        <h2>Premium</h2>
                        <li>Todos os recursos do Plano Avançado, com ênfase em personalização e funcionalidade avançada.</li>
                        <li>Desenvolvimento de um aplicativo altamente personalizado, adaptado às necessidades específicas do negócio.</li>
                        <li>Integração com sistemas externos e APIs complexas para oferecer recursos avançados, como processamento de pagamentos complexos, integração com CRM ou ERP e automação de processos.</li>
                        <li>Design sofisticado e exclusivo que reflete a identidade da marca e proporciona uma experiência de usuário excepcional.</li>
                        <h3></h3>
                        <button>
                            Crie seu App
                        </button>
                </div>
            </div>
           </div>
        </div>
    
    );
};

export default ConvencimentoMarketing;