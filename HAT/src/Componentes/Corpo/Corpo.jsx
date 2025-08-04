import logojogo from '../../assets/logojogo.webp';
import hatkid from '../../assets/hatkid.webp';

function Corpo (){
    return (
        <div className='flex flex-col justify-center items-center gap-6 mt-6 p-4'>
            <img className='w-50' src={logojogo} alt="logo do jogo" />
            <p className='text-white text-justify'>A Hat in Time é um jogo de plataforma 3D super fofo com uma garotinha que costura chapéus para criar poderes perversos! Explore livremente mundos gigantes e recupere Time Pieces para viajar para novas alturas!</p>
            <button className='bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 hover:scale-110 transition-transform duration-500'>VEJA O TRAILER</button>
            <div className='flex justify-center items-center w-40'>
                 <img src={hatkid} alt="" />
            </div>
        </div>
       
    )
}

export default Corpo;