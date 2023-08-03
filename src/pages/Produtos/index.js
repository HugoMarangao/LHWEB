import WhatsAppButton from "@/Components/Config/WhatsAppButton";
import Contato from "@/Components/Contato";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Apresentacao from "@/Components/Products/Apresentacao";
import Caracteristicas from "@/Components/Products/Caracteristicas";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head'
import { useTranslation } from 'next-i18next'; 
export default function Produtos() {
  const { t } = useTranslation('common');
  return (
    <>
     <Head>
    {/* Título */}
    <title>{t('metasProdutos.title')}</title>
    <link rel="icon" href="/favicon.ico" />

    {/* Descrição */}
    <meta name="description" content={t('metasProdutos.description')} />
    <meta name="keywords" content={t('metasProdutos.keywords')}  />

    {/* Charset & Viewport */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Open Graph Tags */}
    <meta property="og:title" content={t('metasProdutos.title')} />
    <meta property="og:description" content={t('metasProdutos.description')}  />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://media.licdn.com/dms/image/D4E03AQG-mMsf0AQTWA/profile-displayphoto-shrink_800_800/0/1685707206328?e=2147483647&v=beta&t=RwPm_QVU4iLnehPufd2el601sa5m1PsOh2tKzxyP5Oc" />
    <meta property="og:url" content="https://lhweb.vercel.app/Produtos" />

    {/* Twitter Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={t('metasProdutos.title')} />
    <meta name="twitter:description" content={t('metasProdutos.description')}  />
    <meta name="twitter:image" content="https://media.licdn.com/dms/image/D4E03AQG-mMsf0AQTWA/profile-displayphoto-shrink_800_800/0/1685707206328?e=2147483647&v=beta&t=RwPm_QVU4iLnehPufd2el601sa5m1PsOh2tKzxyP5Oc" />

    {/* Tag Canônica */}
    <link rel="canonical" href="https://lhweb.vercel.app/Produtos" />
</Head>

       <Header/>
       <Apresentacao/>
       <Caracteristicas/>
       <Contato/>
       <WhatsAppButton/>
       <Footer/>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  };
}
