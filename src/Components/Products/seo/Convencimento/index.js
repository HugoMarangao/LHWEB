// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiBell } from 'react-icons/fi';
import { AiOutlineMobile} from 'react-icons/ai';
import { FaVial } from 'react-icons/fa';
import {FcMultipleDevices} from 'react-icons/fc';

const ConvencimentoSeo = ({id}) => {
      const [activeButton, setActiveButton] = useState(null);

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
       <div className={styles.funcao} >
             <div className={styles.funcao} >
        <div className={styles.mobile}>
            <h2>12:25</h2>
            <div className={styles.box}>
            <div className={styles.logo}/>
            <h2>Ofertas exclusivas!!!</h2>
            <p>Aproveite as ofertas e produtos exclusivos do aplicativo!!</p>
        </div>
        </div>
        <div className={styles.conteudo}>
            <div className={styles.box}>
            <p>Quer anunciar uma oferta especial,
                descontos exclusivos ou lembrar
                seus clientes de finalizar a compra 
                que ficou parada no carinho  </p>
            <p>Notifique-os pelo celular a 
                qualquer momento<b> sem nenhum 
                risco de cair no spam!</b></p>
            </div>
        </div>
    </div>
       </div>
    );
    break;
  case 1:
    slideContent = (
        <div className={styles.funcao} >
        <div className={styles.funcao} >
   <div className={styles.mobile}>
       <h2>12:25</h2>
       <div className={styles.box}>
       <div className={styles.logo}/>
       <h2>Ofertas exclusivas!!!</h2>
       <p>Aproveite as ofertas e produtos exclusivos do aplicativo!!</p>
   </div>
   </div>
   <div className={styles.conteudo}>
       <div className={styles.box}>
       <p>Quer anunciar uma oferta especial,
           descontos exclusivos ou lembrar
           seus clientes de finalizar a compra 
           que ficou parada no carinho  </p>
       <p>Notifique-os pelo celular a 
           qualquer momento<b> sem nenhum 
           risco de cair no spam!</b></p>
       </div>
   </div>
</div>
  </div>
    );
    break;
    case 2:
        slideContent = (
            <div className={styles.funcao} >
            <div className={styles.funcao} >
       <div className={styles.mobile}>
           <h2>12:25</h2>
           <div className={styles.box}>
           <div className={styles.logo}/>
           <h2>Ofertas exclusivas!!!</h2>
           <p>Aproveite as ofertas e produtos exclusivos do aplicativo!!</p>
       </div>
       </div>
       <div className={styles.conteudo}>
           <div className={styles.box}>
           <p>Quer anunciar uma oferta especial,
               descontos exclusivos ou lembrar
               seus clientes de finalizar a compra 
               que ficou parada no carinho  </p>
           <p>Notifique-os pelo celular a 
               qualquer momento<b> sem nenhum 
               risco de cair no spam!</b></p>
           </div>
       </div>
   </div>
      </div>
        );
        break;
        case 3:
            slideContent = (
                <div className={styles.funcao} >
                <div className={styles.funcao} >
           <div className={styles.mobile}>
               <h2>12:25</h2>
               <div className={styles.box}>
               <div className={styles.logo}/>
               <h2>Ofertas exclusivas!!!</h2>
               <p>Aproveite as ofertas e produtos exclusivos do aplicativo!!</p>
           </div>
           </div>
           <div className={styles.conteudo}>
               <div className={styles.box}>
               <p>Quer anunciar uma oferta especial,
                   descontos exclusivos ou lembrar
                   seus clientes de finalizar a compra 
                   que ficou parada no carinho  </p>
               <p>Notifique-os pelo celular a 
                   qualquer momento<b> sem nenhum 
                   risco de cair no spam!</b></p>
               </div>
           </div>
       </div>
          </div>
            );
            break;
  // e assim por diante para os outros slides...
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
                    <h1>Vendas e muito mais</h1>
                    <p>Você sabia que um aplicativo pode ser a própria <b>plataforma de marketing</b> da sua marca?</p>
                    <p>É um <b>canal direto com seu cliente</b>, muito mais do que apenas a extensão do seu site ou um novo canal de vendas.</p>
                    <p>Com um aplicativo você constrói uma <b>conexão entre a sua marca e o seu cliente</b>, oferecendo a melhor experiência possível.</p>
                    <button>
                       <h1>Criar App</h1>
                    </button>
                </div>
           </div>
           <div className={styles.empresas}>
                <div className={styles.text}>
                    <h1>76+ aplicativos criados</h1>
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
                    <h1>Funcionalidades</h1>
                    <p>Diversas ferramentas para sua loja ter mais <b>conversão</b>, um maior <b>engajamento</b> e conquistar a <b>fidelidade</b> dos seus clientes.</p>
                    <button>
                        <h2>veja todas</h2>
                    </button>
                </div>
                <div className={styles.flex}>
                        <div className={styles.icons}>
                                <button className={`${styles.box} ${activeButton === 0 ? styles.active : ''}`} onClick={() => {setSlide(0); setActiveButton(0);}}>

                                    <div className={styles.icon}>
                                        <FiBell  size={35} color='#000'/>
                                    </div>
                                    <div className={styles.boxText}>
                                        <h3>Notificações push ilimitadas</h3>
                                        <p>Tenha um canal de contato direto com seus clientes.</p>
                                    </div>
                                </button>
                                <button className={`${styles.box} ${activeButton === 1 ? styles.active : ''}`} onClick={() => {setSlide(1); setActiveButton(1);}}>

                                  <div className={styles.icon}>
                                    <FcMultipleDevices size={35} color='#000'/>
                                    </div>
                                    <div className={styles.boxText}>
                                        <h3>Integrado com a sua loja</h3>
                                        <p>seu app e uma extesao do seu site</p>
                                    </div>
                                  
                                  </button>
                                  <button className={`${styles.box} ${activeButton === 2 ? styles.active : ''}`} onClick={() => {setSlide(2); setActiveButton(2);}}>

                                <div className={styles.icon}>
                                    <AiOutlineMobile size={35} color='#000'/>
                                    </div>
                                    <div className={styles.boxText}>
                                        <h3>Aplicativo Android e iOS</h3>
                                        <p>Disponível nas principais lojas.</p>
                                    </div>
                                    
                                </button>
                                <button className={`${styles.box} ${activeButton === 3 ? styles.active : ''}`} onClick={() => {setSlide(3); setActiveButton(3);}}>

                                <div className={styles.icon}>
                                    <FaVial  size={35} color='#000'/>
                                </div>
                                    <div className={styles.boxText}>
                                        <h3>Teste antes de publicar</h3>
                                        <p>Veja o aplicativo no seu celular.</p>
                                    </div>
                                   
                                </button>
                        </div>
                        <Slider >
                            {slideContent}
                        </Slider>
                </div>
           </div>
           <div className={styles.planos}>
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
    
    );
};

export default ConvencimentoSeo;