import FotoEmpilhar from 'assets/textos/empilhar.jpg'
import style from '../Publicacoes.module.scss';
import Assinatura from '../Assinatura';

export default function Empilhar (){

    return (<>
        <div className={style.publicacoes}>
        <img className={style.publicacoes__ilustra} src={FotoEmpilhar} alt={'Imagem de pedras sendo empilhadas em um calmo rio'}/>
        <div className={style.publicacoes__texto}>
        <p>Pelo mundo afora ficamos fascinados com a perfeição na arte de empilhar pedras, Coliseu Romano, Stonehenge na Inglaterra, pirâmides no Egito, Machu Picchu no Peru...</p>
        <br></br>
        <p>Pedras inertes transformam jardins japoneses, desenhando caminhos, delimitando espaços, integrando cenários...</p>
        <br></br>
        <p>Apesar de transmitirem estabilidade costumamos associar pedras a obstáculos.</p>
        <br></br>
        <p>A aparente estabilidade das pedras desaparece quando tentamos simplesmente colocar uma sobre a outra e, qualquer ventinho, revela o atrito de suas arestas colocando tudo no chão.</p>
        <br></br>
        <p>O encaixe perfeito requer um estudo minucioso de cada superfície, diversas tentativas e muita paciência.</p>
        <br></br>
        <p>Nossos conflitos são como pedras pedindo para serem analisados sob outro ângulo, um novo encaixe, até então inimaginável.</p>
        <br></br>
        <p>Só vê pedras no seu caminho? Acolha cada uma delas, brinque, empilhe, se tudo vier abaixo, dê uma gargalhada, respire fundo e recomece.</p>
        </div>
        </div>
        </>
    )
}