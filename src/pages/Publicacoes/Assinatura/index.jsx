import LeaMini from 'assets/lea_machado_mini.jpg';
import style from './Assinatura.module.scss';

export default function Assinatura () {
    return(<>
        
        <div className={style.assinatura}>
            <img className={style.assinatura__foto}src={LeaMini} alt={'Foto da Léa Machado'}/>
        <div className={style.assinatura__texto}>
            <span>Escrito por:</span>
            <p>Lea Machado</p>
        </div>
        </div>
        <div className={style.espaco}></div>
        </>
    )
}