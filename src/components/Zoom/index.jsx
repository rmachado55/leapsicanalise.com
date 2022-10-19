import style from './Zoom.module.scss'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function Zoom ({caminho, ativo, setAtivo, descritivo}){

    return(
        <div className={style.zoom} style={{'display' : (ativo ? 'grid' : 'none')}}>
            <AiFillCloseCircle onClick={() => setAtivo(false)} className={style.zoom__fechar}/>
            <img src={caminho} className={style.zoom__foto} alt={descritivo}/>
            <div className={style.zoom__desc}><p>{descritivo}</p></div>
    </div>
    )
}