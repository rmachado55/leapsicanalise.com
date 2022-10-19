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
            <li onClick={() => (setChecked(false))}><Link to={'leapsicanalise/'}><h1>Home</h1></Link></li>
            <li onClick={() => (setChecked(false))}><Link to={'leapsicanalise/sobre'}><h1>Sobre</h1></Link></li>
            <li onClick={() => (setChecked(false))}><Link to={'leapsicanalise/contato'}><h1>Contato e Endereço</h1></Link></li>
            <li onClick={() => (setChecked(false))}><Link to={"leapsicanalise/publicacoes"}><h1>Publicações</h1></Link></li>
           
          </div>
        </ul>
        </label>
      </nav>
      <div className={style.espaco}></div>
      </>)
}