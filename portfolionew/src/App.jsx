import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Skills from './component/Skills.jsx'
import Projects from './component/Projects.jsx'
import Experience from './component/Experience.jsx'
import Contact from './component/Contact.jsx'
import Footer from './component/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>

      
    </>
  )
}

export default App
