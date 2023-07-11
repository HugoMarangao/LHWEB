import WhatsAppButton from "@/Components/Config/WhatsAppButton";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Banner from "@/Components/Sobre/Banner";
import Conteudo from "@/Components/Sobre/conteudo";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function SobreNois() {
  return (
    <>
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
