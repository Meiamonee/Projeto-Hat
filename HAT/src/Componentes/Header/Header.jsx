import hatlogo from '../../assets/hatlogo.webp';

function Header() {
    return (
        <div className="flex flex-col justify-center items-center gap-6 mt-6 lg:flex-row lg:justify-between lg:px-20">
            <a className="w-17 lg:w-20" href="#">
                <img src={hatlogo} alt="Logo do site" />
            </a>
            <nav className="flex gap-4 text-2xl">
                <a className="text-white font-bold hover:text-red-400 px-3 py-3 rounded-full transition-colors duration-300 " href="#">Home</a> 
                <a className="text-white font-bold hover:text-red-400 px-3 py-3 rounded-full transition-colors duration-300" href="#">Mapas</a> 
                <a className="text-white font-bold hover:text-red-400 px-3 py-3 rounded-full transition-colors duration-300" href="#">Personagens</a> 
            </nav>
        </div>
    );
}

export default Header;
