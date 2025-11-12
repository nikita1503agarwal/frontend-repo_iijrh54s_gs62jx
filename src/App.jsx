import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Contact />
      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} — Crafted with motion, code, and curiosity.
      </footer>
    </div>
  )
}

export default App
