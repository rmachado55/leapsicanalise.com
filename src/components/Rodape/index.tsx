import{SiLinkedin, SiMaildotru, SiWhatsapp, SiGooglemaps} from 'react-icons/si'
import style from './Rodape.module.scss';

export default function Rodape () {
    
    return(
    <footer className ={style.rodape}>
        <div className={style.rodape__icons}>
        
        <a href={'https://www.linkedin.com/in/l%C3%A9a-machado-1a74832b/'} target='blank'>
            <span><SiLinkedin /></span>
        </a>
        <a href="malito:leabernalmachado@hotmail.com" target='blank'>
            <span><SiMaildotru/></span>
        </a> 
        <a href='https://api.whatsapp.com/send?phone=5519981947889&text=Ol%C3%A1%20Lea%20Machado%2C%20v%C3%AD%20seu%20contato%20pelo%20site.' target='blank'>
            <span><SiWhatsapp /></span>
        </a>
        <a href='https://www.google.com/maps/dir//Lea+Machado+Psicanalista+-+R.+Fernando+Costa,+1051+-+Barra+Funda,+Vinhedo+-+SP,+13280-000/@-23.035691,-46.971579,16z/data=!4m6!4m5!1m0!1m2!1m1!1s0x94cf2d66317a429b:0xe0101d8f17e51617!3e0?hl=pt-BR&gl=BR' target='blank'>
            <span><SiGooglemaps /></span>  
        </a>
        </div>
        <p className={style.copyright}>2022 - Todos os Direitos reservados</p>
        <a href={'https://www.linkedin.com/in/ricardomachado7/'} target='blank'><p className={style.copyright__signature}>Feito por: Ricardo Machado</p></a>
    </footer>  
    )
}