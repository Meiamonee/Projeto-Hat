import logojogo from '../../assets/logojogo.webp';
import hatkid from '../../assets/hatkid.webp';

function Corpo() {
    return (
        <div className=" flex flex-col lg:flex-row justify-center items-center gap-6 p-4">

            <div className="p-4 flex flex-col gap-4 justify-center items-center lg:w-1/2 text-center lg:text-left">
                <img className="w-50 lg:w-120 mx-auto lg:mx-0" src={logojogo} alt="logo do jogo" />

                <div className="flex flex-col gap-4 items-center lg:items-start max-w-lg">
                    <p className="text-white text-justify lg:text-left text-lg">
                        A Hat in Time é um jogo de plataforma 3D super fofo com uma garotinha que costura chapéus para criar poderes perversos! Explore livremente mundos gigantes e recupere Time Pieces para viajar para novas alturas!
                    </p>
                    <button className="bg-red-600 text-white font-bold px-4 py-2 hover:bg-red-600 transition-colors duration-300 hover:scale-110 transition-transform duration-500">
                        VEJA O TRAILER
                    </button>
                </div>
            </div>

            <div className="flex justify-center items-center lg:w-1/2">
                <img className="w-40 lg:w-140" src={hatkid} alt="" />
            </div>
        </div>

    )
}

export default Corpo;