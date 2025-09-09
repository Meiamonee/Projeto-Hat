import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Componentes/Header/Header";
import Corpo from "./Componentes/Corpo/Corpo";
import BackgroundVideo from "./Componentes/BackgroundVideo/BackgroundVideo";
import Mapas from "./Pages/Mapas";
import Personagens from "./Pages/Personagens";

function App() {
  const location = useLocation();

  const isBlackBg = location.pathname === "/mapas" || location.pathname === "/personagens";

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background para home */}
      {location.pathname === "/" && (
        <BackgroundVideo className="absolute top-0 left-0 w-screen h-screen object-cover -z-10" />
      )}

      {/* Background preto para mapas/personagens */}
      {isBlackBg && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black -z-10"></div>
      )}

      {/* Header fixo */}
      <Header className="fixed top-0 left-0 w-screen z-10" />

      {/* Conteúdo principal */}
      <main className="relative w-full h-full pt-16 overflow-auto">
        <Routes>
          <Route path="/" element={<Corpo />} />
          <Route path="/mapas" element={<Mapas />} />
          <Route path="/personagens" element={<Personagens />} />
        </Routes>
      </main>
    </div>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
