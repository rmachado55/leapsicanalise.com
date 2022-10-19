import FotoEu from 'assets/textos/eu.jpg'
import style from '../Publicacoes.module.scss';
import Assinatura from '../Assinatura';

export default function Eu (){

    return (<>
        <div className={style.publicacoes}>
        <img className={style.publicacoes__ilustra} src={FotoEu} alt={'Imagem de uma pessoa vendo seu reflexo em um pedaço de espelho'}/> 
        <div className={style.publicacoes__texto}>
        <p>Um grande número de pessoas faz essa afirmação de forma orgulhosa, deixando adormecido um seu potencial interno</p>
        <br></br>
        <p>Freud fascinado em conhecer a psique humana fala de uma parte inconsciente de nossa mente como um imenso oceano com infinitas funções e possibilidades.</p>
        <br></br>
        <p>Uma campainha, cuja função é um simples din-don vem com um Manual de Instruções gigante, repleto de informações e em diversas línguas. Quando temos o carro danificado numa batida de trânsito buscamos a melhor oficina esperando reparo perfeito, ao detectarmos uma possível doença grave buscamos indicação de um excelente médico, na trocar do celular queremos saber todas as funções disponíveis da nova aquisição...</p>
        <br></br>
        <p>Então o que nos faz pensar que já exploramos todo nosso potencial e que não precisamos de ajuda?</p>
        <br></br>
        <p>Ao nos deparar com escolhas equivocadas ou situações adversas, logo justificamos que não possuíamos manual de instruções e declaramos desconhecimento.</p>
        <br></br>
        <p>Dentre os nossos 5 sentidos a visão é a única que depende de um elemento externo para se realizar, a LUZ. Imaginemo-nos chegando, de viagem, a noite em uma praia - escutamos o barulho das ondas e sentimos o cheiro da maresia, mas só com o amanhecer podemos ver a praia.</p>
        <br></br>
        <p>A terapia é essa luz capaz de completar sua visão, proporcionando auto compreensão através de uma escuta atenta, num ambiente totalmente seguro e isento de julgamentos.</p>
        <br></br>
        <p>Que tal explorarmos nosso potencial, entendermos nossas escolhas nos criticando menos enfrentando esse maravilhoso oceano desconhecido.</p>
        </div>
        </div>
       </>
    )
}