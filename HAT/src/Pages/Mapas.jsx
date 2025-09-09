import banner1 from '../assets/banner1.webp';

function Mapas() {
    return (
        <div>
            <img className="w-full h-auto" src={banner1} alt="primeiro banner" />
            <div className="flex justify-center mt-6">
                <h1 className="text-white text-5xl font-bold">
                    ACT 1
                </h1>
            </div>
        </div>
    );
}

export default Mapas;
