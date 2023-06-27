import WhatsAppButton from "@/Components/Config/WhatsAppButton";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Banner from "@/Components/Home/Banner";
import Chamada from "@/Components/Home/Chamada";
import Coments from "@/Components/Home/Coments";
import Servicos from "@/Components/Home/Servicos";

export default function Contati() {
  return (
    <>
        <Header/>
        <Banner/>
        <Servicos/>
        <Coments/>
        <Chamada/>
        <WhatsAppButton/>
        <Footer/>
    </>
  )
}
