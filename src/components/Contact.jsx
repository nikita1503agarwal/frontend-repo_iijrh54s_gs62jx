import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder submit — in real use, wire to backend or form service
    await new Promise((r) => setTimeout(r, 900))
    setStatus('Message sent — thanks!')
  }

  return (
    <section id="contact" className="relative bg-[#0b0b10] py-24 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Contact</h2>
        <p className="mt-3 text-white/60">Let’s build something visionary.</p>
        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 p-3 outline-none ring-0 placeholder:text-white/40" />
            <input required type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 p-3 outline-none ring-0 placeholder:text-white/40" />
          </div>
          <input placeholder="Subject" className="w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none placeholder:text-white/40" />
          <textarea required rows="5" placeholder="Tell me about your project" className="w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none placeholder:text-white/40" />
          <div className="flex items-center gap-4">
            <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-white/90">Send</button>
            <p className="text-sm text-white/60">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
