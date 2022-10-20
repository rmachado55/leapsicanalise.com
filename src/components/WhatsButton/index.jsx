import style from './WhatsButton.module.scss'
import { SiWhatsapp } from "react-icons/si";

export default function WhatsButton () {

    return(
        <a href='https://api.whatsapp.com/send?phone=5519981947889&text=Ol%C3%A1%20Lea%20Machado%2C%20v%C3%AD%20seu%20contato%20pelo%20site.' target='blank'> 
            <div className={style.whats}>
                <SiWhatsapp size={24}/>
                <p className={style.whats__text}>Clique para agendar</p>
            </div>
        </a>
    )
}