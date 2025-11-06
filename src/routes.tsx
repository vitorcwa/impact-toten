import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import Veiculos from "./pages/Veiculos/Index";
import Marcas from "./pages/Veiculos/Marcas";
import Veiculo from './pages/Veiculo/Index';
import Consignado from './pages/Consignado/Index';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/veiculos/:marca" element={<Veiculos/>} />
        <Route path="/veiculo/:marca/:modelo/:versao/:id" element={<Veiculo/>} />
        <Route path="/venda-seu-carro" element={<Consignado />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;