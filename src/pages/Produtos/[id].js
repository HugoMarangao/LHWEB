import WhatsAppButton from '@/Components/Config/WhatsAppButton';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import ConvencimentoMobile from '@/Components/Products/mobile/Convencimento';
import ConvencimentoDesign from '@/Components/Products/desing/Convencimento';
import ConvencimentoMarketing from '@/Components/Products/maketing/Convencimento';
import ConvencimentoSeo from '@/Components/Products/seo/Convencimento';
import Apresentacao from '@/Components/Products/Apresentacao';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Produto = () => {
    const router = useRouter();
    const { id } = router.query;

    // você pode agora usar `id` para buscar os detalhes do produto de uma API, por exemplo
    let ConvencimentoComponent;
    switch (id) {
        case 'designweb':
            ConvencimentoComponent = ConvencimentoDesign;
            break;
        case 'criacaodeapps':
            ConvencimentoComponent = ConvencimentoMobile;
            break;
        case 'marketingdigital':
            ConvencimentoComponent = ConvencimentoMarketing;
            break;
        case 'seo':
            ConvencimentoComponent = ConvencimentoSeo;
             break;
        default:
            ConvencimentoComponent = null;
    }
    return (
        <>
       <Header/>
        <Apresentacao/>
        {ConvencimentoComponent && <ConvencimentoComponent />}
        <WhatsAppButton/>    
        <Footer/>
        </>
    );
};

export default Produto;
export async function getStaticPaths({ locales }) {
  const paths = [];
  const products = ['designweb', 'criacaodeapps', 'marketingdigital', 'seo'];

  for (const locale of locales) {
    for (const product of products) {
      paths.push({ params: { id: product }, locale });
    }
  }

  return { paths, fallback: true };
}

export async function getStaticProps({ locale, params }) {
  // Obtenha os dados necessários com base no params.id ou qualquer outra coisa que você precisar

  return {
    props: {
      // Suas props aqui
      ...await serverSideTranslations(locale, ['common']),
    },
  };
}