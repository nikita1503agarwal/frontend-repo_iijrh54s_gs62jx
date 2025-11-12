import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_70%_10%,rgba(124,58,237,0.25),transparent),radial-gradient(800px_400px_at_0%_100%,rgba(34,211,238,0.2),transparent)]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-black tracking-tight"
          >
            Crafting surreal, cybernetic web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-5 text-lg text-white/70"
          >
            A portfolio at the intersection of art and code. Dark, futuristic aesthetics blended with playful motion and tactile 3D.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#work" className="pointer-events-auto rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition">
              Explore Work
            </a>
            <a href="#contact" className="pointer-events-auto rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/15 transition">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
