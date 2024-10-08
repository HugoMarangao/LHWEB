import WhatsAppButton from "@/Components/Config/WhatsAppButton";
import Contato from "@/Components/Contato";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Contati() {
  return (
    <>
        <Header/>
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