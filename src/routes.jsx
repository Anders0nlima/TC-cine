import { Routes, Route, Navigate } from 'react-router-dom'; 
import { Production } from './pages/Production';
import { PosProduction } from './pages/PosProduction';
import { Suport } from './pages/SuportPage';
import { HomePage } from './pages/HomePage';

function AppRoutes() {
    return (
        <Routes>
          <Route path="/producao" element={<Production/>} />
          <Route path="/pos-producao" element={<PosProduction/>} />
          <Route path="/suporte" element={<Suport/>} />
          
          {/* Rota padrão ou redirecionamento, o teste-selo será mudado para "home" --- Navigate to="/producao" --- /*/}
          <Route path="/TC-cine" element={<HomePage/>} />
        </Routes>
      );
  }
  
  export default AppRoutes;