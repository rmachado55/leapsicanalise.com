import style from './WhatsButton.module.scss'
import { SiWhatsapp } from "react-icons/si";

export default function WhatsButton () {

    return(
        <a href='/redirect.html' target='blank'> 
            <div className={style.whats}>
                <SiWhatsapp size={24}/>
                <p className={style.whats__text}>Clique para agendar</p>
            </div>
        </a>
    )
}