import Home from 'pages/Home';
import BarraNavegacao from 'components/BarraNavegacao';
import WhatsButton from 'components/WhatsButton';
import Sobre from 'pages/Sobre';
import Contato from 'pages/Contato';
import Publicacoes from 'pages/Publicacoes';
import Rodape from 'components/Rodape';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Queixas } from 'pages/Home/Carrossel/queixas';
import Queixa from 'pages/Queixa';
import NaoEncontrada from 'pages/NaoEncontrada';

export default function AppRouter() {
  
  return (
    <main>
       <Router>
        <WhatsButton />
        <BarraNavegacao />
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/contato' element={<Contato/>}/>
          <Route path='/publicacoes' element={<Publicacoes />}/>
          {Queixas.map((queixa) => {return(
          <Route key={queixa.chave} path={queixa.chave} element={
            <Queixa
            chamada={queixa.chamada}
            nome={queixa.nome}
            chave={queixa.chave}/>}/>
          )})}
          <Route path='*' element={<NaoEncontrada />} />
        </Routes>
        <Rodape />
      </Router>
    </main>
  );
}