import WhatsAppButton from "@/Components/Config/WhatsAppButton";
import Contato from "@/Components/Contato";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Banner from "@/Components/Home/Banner";
import Chamada from "@/Components/Home/Chamada";
import Coments from "@/Components/Home/Coments";
import Servicos from "@/Components/Home/Servicos";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export default function Home() {
  return (
    <>
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
