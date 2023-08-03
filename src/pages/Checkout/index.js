import ConfirmCheckout from "@/Components/Checkout";
import WhatsAppButton from "@/Components/Config/WhatsAppButton";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function Checkout() {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STIPE);
  return (
    <>
        <Header/>
        <Elements stripe={stripePromise}>
          <ConfirmCheckout />
        </Elements>
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