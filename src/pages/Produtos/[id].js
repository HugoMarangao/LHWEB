import WhatsAppButton from '@/Components/Config/WhatsAppButton';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Coments from '@/Components/Home/Coments';
import Apresentacao from '@/Components/Products/Apresentacao';
import Convencimento from '@/Components/Products/Convencimento';
import { useRouter } from 'next/router';

const Produto = () => {
    const router = useRouter();
    const { id } = router.query;

    // você pode agora usar `id` para buscar os detalhes do produto de uma API, por exemplo

    return (
        <>
        <Header/>
        <Apresentacao/>
        <Convencimento id={id}/>
        <Coments/>
        <WhatsAppButton/>
        <Footer/>
        </>
    );
};

export default Produto;
