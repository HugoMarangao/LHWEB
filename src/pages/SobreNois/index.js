import WhatsAppButton from "@/Components/Config/WhatsAppButton";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Banner from "@/Components/Sobre/Banner";
import Conteudo from "@/Components/Sobre/conteudo";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'; 
export default function SobreNois() {
  const { t } = useTranslation('common');
  return (
    <>
    <Head>
          <title>{t('metasSobreNois.title')}</title>
          <link rel="icon" href="/favicon.ico" />

          <meta name="description" content={t('metasSobreNois.description')} />
          
          <meta name="keywords" content={t('metasSobreNois.keywords')} />
          
          <meta property="og:title" content={t('metasSobreNois.title')} />
          <meta property="og:description" content={t('metasSobreNois.description')}  />
          <meta property="og:image" content="https://media.licdn.com/dms/image/D4E03AQG-mMsf0AQTWA/profile-displayphoto-shrink_800_800/0/1685707206328?e=2147483647&v=beta&t=RwPm_QVU4iLnehPufd2el601sa5m1PsOh2tKzxyP5Oc" />
          <meta property="og:url" content="https://lhweb.vercel.app/SobreNos" />
          
          <link rel="canonical" href="https://lhweb.vercel.app/SobreNos" />
      </Head>

        <Header/>
        <Banner/>
        <Conteudo/>
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
