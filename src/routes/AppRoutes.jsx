import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Favoritos from "../pages/Favoritos";
import Detalhes from "../pages/Detalhes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="detalhes/:raca" element={<Detalhes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
