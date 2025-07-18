import { Routes, Route, Navigate } from 'react-router-dom'; 
import { Production } from './pages/Production';
import { PosProduction } from './pages/PosProduction';
import { HomePage } from './pages/HomePage';
import SuportPage from './pages/SuportPage';
import { Biblioteca } from './components/infoPages/bibliotecas';
import { Contato } from './components/infoPages/contato';
import { Cookies } from './components/infoPages/cookies';
import { Equipe } from './components/infoPages/equipe';
import { Profissionais } from './components/infoPages/profissionais';
import { Juste } from './components/infoPages/junte';
import { Parcerias } from './components/infoPages/parcerias';
import { Sobre } from './components/infoPages/sobre';
import { Privacidade } from './components/infoPages/privacidade';
import { Servicos } from './components/infoPages/servicos';
import { Termos } from './components/infoPages/termos';
import { VejaMaisPre } from './components/infoPages/vejaMaisPre';
import { VejaMaisPro } from './components/infoPages/vejaMaisPro';

function AppRoutes() {
    return (
        <Routes>
          <Route path="/producao" element={<Production/>} />
          <Route path="/pos-producao" element={<PosProduction/>} />
          <Route path="/suporte" element={<SuportPage/>} />

          <Route path="/infoPages/bibliotecas" element={<Biblioteca/>}/>
          <Route path="/infoPages/contato" element={<Contato/>}/>
          <Route path="/infoPages/cookies" element={<Cookies/>}/>
          <Route path="/infoPages/equipe" element={<Equipe/>}/>
          <Route path="/infoPages/profissionais" element={<Profissionais/>}/>
          <Route path="/infoPages/junte" element={<Juste/>}/>
          <Route path="/infoPages/parcerias" element={<Parcerias/>}/>
          <Route path="/infoPages/sobre" element={<Sobre/>}/>
          <Route path="/infoPages/privacidade" element={<Privacidade/>}/>
          <Route path="/infoPages/servicos" element={<Servicos/>}/>
          <Route path="/infoPages/termos" element={<Termos/>}/>
          <Route path="/infoPages/vejamaispre" element={<VejaMaisPre/>}/>
          <Route path="/infoPages/vejamaispro" element={<VejaMaisPro/>}/>
          
          {/* Rota padrão ou redirecionamento, o teste-selo será mudado para "home" --- Navigate to="/producao" --- /*/}
          <Route path="/" element={<HomePage/>} />
        </Routes>
      );
  }
  
  export default AppRoutes;