import { Routes, Route, Navigate } from 'react-router-dom'; 
import { Production } from './pages/Production';
import { PosProduction } from './pages/PosProduction';
import { HomePage } from './pages/HomePage';
import SuportPage from './pages/SuportPage';

function AppRoutes() {
    return (
        <Routes>
          <Route path="/producao" element={<Production/>} />
          <Route path="/pos-producao" element={<PosProduction/>} />
          <Route path="/suporte" element={<SuportPage/>} />
          
          {/* Rota padrão ou redirecionamento, o teste-selo será mudado para "home" --- Navigate to="/producao" --- /*/}
          <Route path="/" element={<HomePage/>} />
        </Routes>
      );
  }
  
  export default AppRoutes;