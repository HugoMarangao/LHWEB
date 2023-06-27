import WhatsAppButton from "@/Components/Config/WhatsAppButton";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Apresentacao from "@/Components/Products/Apresentacao";
import Caracteristicas from "@/Components/Products/Caracteristicas";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Produtos() {
  return (
    <>
       <Header/>
       <Apresentacao/>
       <Caracteristicas/>
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
