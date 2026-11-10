import FloatingSquares from './components/FloatingSquares'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    // Sin fondo aquí: el fondo lo pone <body> para que los
    // cuadritos (z-index -10) se vean detrás del contenido.
    <div className="relative">
      <FloatingSquares />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
