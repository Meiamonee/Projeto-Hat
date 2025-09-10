import { useState } from "react";

// Banner MafiaTown
import banner1 from "../assets/banner1.webp";

// Futuro: outros banners
// import subconForestBanner from "../assets/subconForest.webp";
// import alpineSkylineBanner from "../assets/alpineSkyline.webp";
// import battleOfTheBirdsBanner from "../assets/battleOfTheBirds.webp";

// Componentes
import MafiaTown from "../Componentes/MafiaTown";
import SubconForest from "../Componentes/SubconForest";
import AlpineSkyline from "../Componentes/AlpineSkyline";
import BattleOfTheBirds from "../Componentes/BattleOfTheBirds";

function Mapas() {
  const [mapa, setMapa] = useState("MafiaTown");

  // Associa cada mapa ao seu componente
  const conteudos = {
    MafiaTown: <MafiaTown />,
    SubconForest: <SubconForest />,
    AlpineSkyline: <AlpineSkyline />,
    BattleOfTheBirds: <BattleOfTheBirds />,
  };

  // Só MafiaTown tem banner por enquanto
  const banners = {
    MafiaTown: banner1,
    SubconForest: null,
    AlpineSkyline: null,
    BattleOfTheBirds: null,
  };

  return (
    <div className="ml-20 mr-20">
      {/* Banner dinâmico – só renderiza se existir */}
      {banners[mapa] && (
        <img
          className="w-full h-auto"
          src={banners[mapa]}
          alt={`Banner de ${mapa}`}
        />
      )}

      {/* Dropdown */}
      <div className="mt-6">
        <select
          value={mapa}
          onChange={(e) => setMapa(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-600"
        >
          <option value="MafiaTown">Mafia Town</option>
          <option value="SubconForest">Subcon Forest</option>
          <option value="AlpineSkyline">Alpine Skyline</option>
          <option value="BattleOfTheBirds">Battle of the Birds</option>
        </select>
      </div>

      {/* Conteúdo dinâmico */}
      <div className="mt-6">{conteudos[mapa]}</div>
    </div>
  );
}

export default Mapas;
