import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-base text-slate-100 font-techno">
      <div className="fixed inset-0 -z-10 opacity-40 blur-3xl" aria-hidden>
        <div className="mx-auto h-full w-full max-w-5xl bg-gradient-to-b from-neon/20 via-transparent to-neonBlue/10" />
      </div>
      <Navbar />
      <main className="pt-28 md:pt-32">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
