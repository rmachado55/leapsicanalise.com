import style from './Proposta.module.scss';
import Content from 'components/Content';
import { useState } from 'react';

export default function Proposta () {
    
    const [expandido, setExpandido] = useState(false)

    return(
    <Content title={'Minha proposta de trabalho'} >
           <div className={style.proposta}>
           <p style={{maxHeight : (expandido ? '100%' : '100px')}} className={style.proposta__expansivel}>Uma escuta neutra, empática e atenta da sua queixa, do seu sofrimento primeiro abrindo espaço para que a fala aconteça livremente sem críticas ou julgamentos, depois estabelecendo uma conversa através de questionamentos que possibilitem um processo de pesquisa, ampliando o cenário do conflito, identificando elementos até então desconhecidos e através desse enfrentamento sejam possíveis novas conexões, novos significados e escolhas mais conscientes.<br></br>
Costumo usar uma analogia aonde a pessoa, que me procura, vem com o guarda-roupas todo desarrumado (quando abre as portas cai tudo), será necessário tirar tudo e jogar na cama para classificar, jogar coisas fora e fazer uma nova organização; é comum essa arrumação começar com um certo empenho, mas logo vem um desânimo, a pessoa joga tudo de volta e fecha a porta do armário; o psicanalista será a pessoa que vai ajudá-lo a não desistir permitindo que você se encontre na nova organização. Tenho certeza de que, com ajuda profissional, a tarefa vai ficando mais leve. Análise deveria vir na cesta básica pois faz parte da saúde de todos nós. </p>
           <div className={style.proposta__button}><button onClick={() => setExpandido(!expandido)}>{(expandido ? 'Recolher' : 'Leia mais')}</button></div>
           </div>
    </Content>
    )
}