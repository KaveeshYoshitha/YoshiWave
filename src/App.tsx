import VantaBackground from "./components/VantaBackground"
import About from "./pages/About"
import Hero from "./pages/Hero"
import Navbar from "./components/Navbar"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <VantaBackground />
      <main className="relative z-10 ">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
