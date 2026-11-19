import { Header } from "../../components/Header"
import { FirstBlock } from "./FirstBlock"
import { SecondBlock } from "./SecondBlock"
import { ThirdBlock } from "./ThirdBlock"
import { Footer } from "../../components/Footer"

export function Home() {

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
