import style from './NaoEncontrada.module.scss';
import { useNavigate } from 'react-router-dom';
import {BiError, BiArrowBack} from 'react-icons/bi'


export default function NaoEncontrada () {

    const navigate = useNavigate();

    return( <section className={style.naoEncontrada}>
                <div className={style.naoEncontrada__titulo}>
                <BiError size={170}/>
                <h4>Página não encontrada</h4>
                <p>Verifique o endereço digitado ou clique <button onClick={() => navigate(-1)}>Aqui <BiArrowBack /></button> para voltar.</p>
                </div>
                
                
            </section>)
}