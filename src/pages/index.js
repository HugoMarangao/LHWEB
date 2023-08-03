import WhatsAppButton from "@/Components/Config/WhatsAppButton";
import Contato from "@/Components/Contato";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Banner from "@/Components/Home/Banner";
import Chamada from "@/Components/Home/Chamada";
import Coments from "@/Components/Home/Coments";
import Servicos from "@/Components/Home/Servicos";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'; 
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
        <Head>
            {/* Título */}
            <title>{t('metas.title')}</title>
            <meta name="google-site-verification" content="mKnTPaR52ePtyChlAfUYZ0ftkVYW0gMITYC-GDyu7Og" />
            <link rel="icon" href="/favicon.ico" />

            {/* Descrição */}
            <meta name="description" content={t('metas.description')} />
            <meta name="keywords" content={t('metas.keywords')} />
            {/* Charset & Viewport */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Open Graph Tags */}
            <meta property="og:title" content={t('metas.title')} />
            <meta property="og:description" content={t('metas.description')} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://media.licdn.com/dms/image/D4E03AQG-mMsf0AQTWA/profile-displayphoto-shrink_800_800/0/1685707206328?e=2147483647&v=beta&t=RwPm_QVU4iLnehPufd2el601sa5m1PsOh2tKzxyP5Oc" />
            <meta property="og:url" content="https://lhweb.vercel.app" />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={t('metas.title')} />
            <meta name="twitter:description" content={t('metas.description')} />
            <meta name="twitter:image" content="https://media.licdn.com/dms/image/D4E03AQG-mMsf0AQTWA/profile-displayphoto-shrink_800_800/0/1685707206328?e=2147483647&v=beta&t=RwPm_QVU4iLnehPufd2el601sa5m1PsOh2tKzxyP5Oc" />

            {/* Tag Canônica */}
            <link rel="canonical" href="https://lhweb.vercel.app" />


            
          </Head>


        <Header/>
        <Banner/>
        <Servicos/>
        <Coments/>
        <Chamada/>
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
