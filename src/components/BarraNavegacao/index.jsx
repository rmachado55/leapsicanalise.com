import style from 'components/BarraNavegacao/BarraNavegacao.module.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function BarraNavegacao () {

    const [checked, setChecked] = useState(false);

    return(<>
    <nav className={style.barraNavegacao}>
      <p className={style.marca}>Lea Machado</p>
      <p className={style.subtitulo}>Psicanalista - (19)98194-7889</p>
      <label>
        <input checked={checked} type="checkbox" onScroll={() => (setChecked(!checked))} onClick={() => (setChecked(!checked))}/>
        <span className={style.hamburguer__menu}> <span className={style.hamburger__botao}></span> </span>
        <ul className={style.hamburguer__item}>
        <p className={style.marca}>Como posso te ajudar?</p>
          <div className={style.hamburguer__quadro}>
            <li onClick={() => (setChecked(false))}><Link to={'/'}><h4>Home</h4></Link></li>
            <li onClick={() => (setChecked(false))}><Link to={'/sobre'}><h4>Sobre</h4></Link></li>
            <li onClick={() => (setChecked(false))}><Link to={'/contato'}><h4>Contato e Endereço</h4></Link></li>
            <li onClick={() => (setChecked(false))}><Link to={"/publicacoes"}><h4>Publicações</h4></Link></li>
           
          </div>
        </ul>
        </label>
      </nav>
      <div className={style.espaco}><heading>Atendimento presencial e remoto para ansiedade, depressão, bulimia, cutting, relacionamento abusivo, pânico, inseguranças, dependência emocional entre outros"</heading></div>
      </>)
}