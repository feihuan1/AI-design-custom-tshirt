import Home from "./pages/Home"
import Customizer from "./pages/Customizer"
import CanvasModle from "./canvas"

function App() {

  return (
    <main className='app transition-all ease-in'>
      <Home />
      <CanvasModle />
      <Customizer />
    </main>
  )
}

export default App
