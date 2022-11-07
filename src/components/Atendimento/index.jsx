import style from './Atendimento.module.scss';
import Content from 'components/Content';
import {SiWhatsapp} from 'react-icons/si'
import { useState } from 'react';
import Zoom from 'components/Zoom';
import Sala from './sala.json'


export default function Atendimento () {
    
    const [exibeFoto, setExibeFoto] = useState(false)
    const [fotoAtiva, setFotoAtiva] = useState('')
    const [descAtiva, setDescAtiva] = useState('')

    function seletorFoto( foto , desc ){
        setFotoAtiva(foto)
        setDescAtiva(desc)
        setExibeFoto(true)

    }

    return(<>
    <Content title={'Atendimento: Online ou Presencial'} >
        <div className={style.atendimento}>
            <div className={style.atendimento__box}>
                <h2 className={style.content__description}>Agende seu horário:</h2>
                <div className={style.atendimento__button}><a href='/redirect.html' target='blank'><button className={style.atendimento__button}><SiWhatsapp color='inherit'/> (19) 98194-7889</button></a></div>
            </div>
            <div className={style.atendimento__box}>
                <p className={style.content__description}>Endereço</p>
                <p className={style.content__text}>Rua Fernando Costa, 1051, Sala 9</p>
                <p className={style.content__text}>MultiOffice - Bairro Planalto</p>
                <p className={style.content__text}>Vinhedo - SP</p>
            </div>
        </div>
        
        <iframe className={style.atendimento__mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.675448858745!2d-46.9737733488484!3d-23.035685848201858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2d66317a429b%3A0xe0101d8f17e51617!2sLea%20Machado%20Psicanalista!5e0!3m2!1spt-BR!2sbr!4v1665090235586!5m2!1spt-BR!2sbr" width="90%" height="280" loading="lazy"></iframe>
        
        <div>
            <p className={style.content__description}>Fotos do local:</p>
            <div className={style.atendimento__fotos}>
            {Sala.map((foto) => {  return(
            
            <img className={style.atendimento__mini} alt={`${foto.desc}`} src={`https://rmachado55.github.io/leapsicanalise.com/assets/sala/${foto.mini}`} onClick={() => seletorFoto(`https://rmachado55.github.io/leapsicanalise.com/assets/sala/${foto.arquivo}`, foto.desc)}/>
            
            )})}
            </div>
        </div>  
    </Content>
    <Zoom
    ativo={exibeFoto}
    setAtivo={setExibeFoto} 
    caminho={fotoAtiva}
    descritivo={descAtiva}        
    /></>
    )
}