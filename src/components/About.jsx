import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">About</h2>
            <p className="mt-5 text-white/70">
              I design and code immersive web experiences with a focus on motion, tactility, and artistic expression. My work mixes futuristic UI, playful physics, and bold typographic systems.
            </p>
            <p className="mt-4 text-white/70">
              Tools I love: WebGL, shaders, Three.js, Framer Motion, Spline, and creative use of HTML/CSS. Available for collaborations, installations, and high-impact brand work.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6"
          >
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 ring-1 ring-inset ring-white/10" />
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70">
              <div className="rounded-lg bg-white/5 p-3">Art Direction</div>
              <div className="rounded-lg bg-white/5 p-3">Creative Dev</div>
              <div className="rounded-lg bg-white/5 p-3">Motion Design</div>
              <div className="rounded-lg bg-white/5 p-3">3D Design</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
