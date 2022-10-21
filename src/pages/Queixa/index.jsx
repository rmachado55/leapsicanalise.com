import Proposta from "components/Proposta";
import Profissional from "components/Profissional";
import Atendimento from "components/Atendimento";
import style from './Queixa.module.scss';

export default function Queixa (props) {
   
    return(<>
        <a href={props.chamada} target='blank'>
        <section className={style.queixa}>
        <img src={`https://rmachado55.github.io/leapsicanalise.com/assets/banner/${props.chave}.jpg`} alt={`Imagem que representa ${props.nome}`}/>
        <heading className={style.queixa__titulo}>{props.nome}</heading>
        <p>Clique aqui se quiser conversar sobre isso.</p>
        </section></a>
        <Proposta />
        <Profissional />
        <Atendimento />
        </>)
}