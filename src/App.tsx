import './App.css'
import { Header } from './components/Header'
import { FirstBlock } from './components/FirstBlock'
import { SecondBlock } from './components/SecondBlock'
import { ThirdBlock } from './components/ThirdBlock'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />

      <main>
        <FirstBlock />

        <SecondBlock />

        <ThirdBlock />

      </main>

      <footer>
        <Footer />
      </footer>
    </>

  )
}

export default App
