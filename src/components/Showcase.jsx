import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Threads',
    description: 'A fashion lookbook with shader-based cloth simulations.',
    tags: ['WebGL', 'Shaders', 'Three.js'],
  },
  {
    title: 'Echo Orbit',
    description: 'Audio-reactive visuals orbiting around your tracks.',
    tags: ['Web Audio', 'Canvas', 'D3'],
  },
  {
    title: 'Spectral City',
    description: 'Procedural skyline with parallax depth and fog.',
    tags: ['Procedural', 'Motion', 'Framer'],
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-[#07070a] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Selected Work</h2>
            <p className="mt-3 text-white/60">Explorations across motion, 3D, and creative coding.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6"
            >
              <div className="flex h-40 items-end rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 ring-1 ring-inset ring-white/10" />
              <div className="mt-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
