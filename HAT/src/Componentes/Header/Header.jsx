import { Link } from "react-router-dom";
import hatlogo from "../../assets/hatlogo.webp";

function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-6 lg:flex-row lg:justify-between lg:px-20">
      <Link className="w-17 lg:w-20" to="/">
        <img src={hatlogo} alt="Logo do site" />
      </Link>

      <nav className="flex gap-4 text-2xl">
        <Link
          to="/"
          className="text-white font-bold hover:text-red-400 px-3 py-3 rounded-full transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/mapas"
          className="text-white font-bold hover:text-red-400 px-3 py-3 rounded-full transition-colors duration-300"
        >
          Mapas
        </Link>
        <Link
          to="/personagens"
          className="text-white font-bold hover:text-red-400 px-3 py-3 rounded-full transition-colors duration-300"
        >
          Personagens
        </Link>
      </nav>
    </div>
  );
}

export default Header;
