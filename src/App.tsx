import { useState, useEffect } from 'react';
import VantaBackground from "./components/VantaBackground"
import About from "./pages/About"
import Hero from "./pages/Hero"
import Navbar from "./components/Navbar"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Preloader from "./components/Preloader"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('resize')); // helps ScrollTrigger recalculate
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onLoaded={() => setIsLoading(false)} />}
      <VantaBackground />
      <main className="relative z-10 w-full max-w-screen overflow-x-hidden ">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App
