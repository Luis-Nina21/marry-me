import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Propuesta from './components/Propuesta.jsx'
import Destinos from './components/Destinos.jsx'
import Planes from './components/Planes.jsx'
import Proceso from './components/Proceso.jsx'
import Faq from './components/Faq.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Propuesta />
        <Destinos />
        <Planes />
        <Proceso />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
