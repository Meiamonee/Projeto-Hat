import Header from './Componentes/Header/Header'
import Corpo from './Componentes/Corpo/Corpo'
import BackgroundVideo from './Componentes/BackgroundVideo/BackgroundVideo'

function App() {
  return (
    <div className="relative">
      <BackgroundVideo />
      <Header />
      <Corpo />
    </div>
  )
}

export default App
