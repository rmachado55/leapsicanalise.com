import style from './Profissional.module.scss';
import Content from 'components/Content';
import LeaMini from 'assets/lea_machado_mini.jpg'
import Lea from 'assets/lea_machado.jpg'
import { useState } from 'react';
import Zoom from 'components/Zoom';

export default function Profissional () {
    
    const [exibeFoto, setExibeFoto] = useState(false)

    return(<>
    <Zoom
        ativo={exibeFoto}
        setAtivo={setExibeFoto} 
        caminho={Lea}
        descritivo={'Psicanalista Lea Machado'}        
    />
    
    <Content title={'Lea Machado'} >
     <>     <div className={style.profissional}>
                <div className={style.profissional__box1}>
                    <img src={LeaMini} onClick={() => setExibeFoto(true)} className={style.profissional__fotoMini} alt='Foto da Psicanalista Lea Machado sorrindo com um fundo azul e camisa listrada' />
                    <h3 className={style.content__highlight}>Socióloga pela USP e Psicanalista.</h3>
                </div>
                <div className={style.profissional__box2}>
                    <h2 className={style.content__description}>Formações Complementares:</h2>
                    <ul className={style.content__text}>
                        <li>- Análise de sonhos;</li>
                        <li>- Formação em Terapia Sexual;</li>
                        <li>- Método Silva para controle da mente;</li>
                        <li>- Comunicação Não-Violenta;</li>
                    </ul>
                </div>
            </div>        
          </>
     </Content>                
</>    
    )
}