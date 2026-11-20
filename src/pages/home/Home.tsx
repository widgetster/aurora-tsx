import { Header } from "../../components/Header"
import { FirstBlock } from "./FirstBlock"
import { SecondBlock } from "./SecondBlock"
import { ThirdBlock } from "./ThirdBlock"
import { Footer } from "../../components/Footer"

export function Home() {

  return (
    <div className="site-layout">
      <Header />

      <main className="home-page">
        <FirstBlock />

        <SecondBlock />

        <ThirdBlock />

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
