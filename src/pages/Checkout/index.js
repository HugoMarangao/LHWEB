import ConfirmCheckout from "@/Components/Checkout";
import WhatsAppButton from "@/Components/Config/WhatsAppButton";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Checkout() {
  return (
    <>
        <Header/>
        <ConfirmCheckout/>
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