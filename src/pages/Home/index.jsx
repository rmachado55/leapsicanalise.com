import Banner from './Carrossel';
import Proposta from '../../components/Proposta';
import Sobre from '../../components/Profissional';
import Atendimento from '../../components/Atendimento'

export default function Home () {

    return( <>
                <Banner />
                <Sobre />
                <Proposta />
                <Atendimento />
            </>)
}