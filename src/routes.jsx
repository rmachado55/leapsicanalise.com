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
   
          <Route key={Queixas[0].chave} path='/ansiedade' element={
            <Queixa
              chamada={Queixas[0].chamada}
              nome={Queixas[0].nome}
              chave={Queixas[0].chave}/>}/>

<Route key={Queixas[1].chave} path='/depressao' element={
            <Queixa
              chamada={Queixas[1].chamada}
              nome={Queixas[1].nome}
              chave={Queixas[1].chave}/>}/>

<Route key={Queixas[2].chave} path='/bulimia' element={
            <Queixa
            chamada={Queixas[2].chamada}
            nome={Queixas[2].nome}
            chave={Queixas[2].chave}/>}/>

<Route key={Queixas[3].chave} path='/cutting' element={
            <Queixa
            chamada={Queixas[3].chamada}
            nome={Queixas[3].nome}
            chave={Queixas[3].chave}/>}/>

<Route key={Queixas[4].chave} path='/relacionamento' element={
            <Queixa
            chamada={Queixas[4].chamada}
            nome={Queixas[4].nome}
            chave={Queixas[4].chave}/>}/>

<Route key={Queixas[5].chave} path='/panico' element={
            <Queixa
            chamada={Queixas[5].chamada}
            nome={Queixas[5].nome}
            chave={Queixas[5].chave}/>}/>

<Route key={Queixas[6].chave} path='/inseguranca' element={
            <Queixa
            chamada={Queixas[6].chamada}
            nome={Queixas[6].nome}
            chave={Queixas[6].chave}/>}/>

<Route key={Queixas[7].chave} path='/dependencia_emocional' element={
            <Queixa
            chamada={Queixas[7].chamada}
            nome={Queixas[7].nome}
            chave={Queixas[7].chave}/>}/>     
         
         
          <Route path='*' element={<NaoEncontrada />} />
        </Routes>
        <Rodape />
      </Router>
    </main>
  );
}