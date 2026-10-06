import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Layouts/Hero'
import About from './Layouts/About'
import Projects from './Layouts/Projects'
import Skills from './Layouts/Skills'
import Process from './Layouts/Process'
import Contact from './Layouts/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-black text-white">
          <Header />

          <Hero />
          <About />
          <Projects />
          <Skills />
          <Process />
          <Contact />

          <Footer />
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
