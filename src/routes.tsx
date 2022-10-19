import Home from 'pages/Home';
import BarraNavegacao from 'components/BarraNavegacao';
import WhatsButton from 'components/WhatsButton';
import Sobre from 'pages/Sobre';
import Contato from 'pages/Contato';
import Publicacoes from 'pages/Publicacoes';
import Rodape from 'components/Rodape';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'


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
          </Routes>
          
        <Rodape />
        
      </Router>
    </main>
  );
}