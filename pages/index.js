
import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

function Feature({ title, desc, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="p-6 rounded-2xl shadow-md bg-white/80 backdrop-blur border border-gray-100"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      <Head>
        <title>Adaptive Tutoring.ai — Personalised learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personalised learning powered by AI. Adaptive practice, instant feedback, mastery tracking, and dashboards for parents and teachers." />
      </Head>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold text-xl tracking-tight">Adaptive Tutoring.ai</a>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border border-slate-300"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="i">☰</span>
          </button>

          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a className="hover:text-slate-700" href="#features">Features</a></li>
            <li><a className="hover:text-slate-700" href="#about">About</a></li>
            <li><a className="hover:text-slate-700" href="#contact">Contact</a></li>
            <li>
              <a
                href="#cta"
                className="inline-block rounded-xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800"
              >
                Start free trial
              </a>
            </li>
          </ul>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <ul className="max-w-6xl mx-auto px-4 py-2 grid gap-2">
              <li><a className="block p-2 rounded-lg hover:bg-slate-50" href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
              <li><a className="block p-2 rounded-lg hover:bg-slate-50" href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a className="block p-2 rounded-lg hover:bg-slate-50" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
              <li><a className="block p-2 rounded-lg hover:bg-slate-50" href="#cta" onClick={() => setMenuOpen(false)}>Start free trial</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 select-none" aria-hidden>
          <svg className="absolute -top-10 -right-10 w-72 opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#CBD5E1" d="M42.4,-55.3C57.3,-47.1,73.1,-38.2,78.5,-24.7C83.8,-11.3,78.7,6.9,69.3,21.6C59.8,36.2,45.9,47.2,31.1,56.2C16.2,65.3,0.5,72.4,-15.9,74.8C-32.3,77.2,-49.3,74.9,-61.5,65.6C-73.7,56.3,-81.2,39.9,-82.1,23C-83,6.2,-77.3,-11,-67.3,-23.5C-57.3,-36.1,-43,-44,-30.3,-52.5C-17.7,-61.1,-6.7,-70.3,4.6,-76.1C16,-81.9,31.9,-84.2,42.4,-75.3Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Personalised learning. Powered by AI.
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                An adaptive tutoring platform that builds a unique path for every student—driven by real-time assessment and insights for parents and teachers.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a href="#cta" className="rounded-2xl px-5 py-3 bg-slate-900 text-white hover:bg-slate-800">Start free trial</a>
                <a href="#features" className="rounded-2xl px-5 py-3 border border-slate-300 hover:bg-white">How it works</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="aspect-video bg-white rounded-2xl shadow-xl border border-slate-200 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-sm uppercase tracking-widest text-slate-400">Preview</div>
                  <div className="mt-2 text-3xl">🎓</div>
                  <p className="mt-2 text-slate-600 max-w-sm">
                    Video lessons, adaptive quizzes, and mastery dashboards—coming together seamlessly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Everything you need to learn smarter</h2>
            <p className="mt-3 text-slate-600">AI that adjusts difficulty, explains concepts, and tracks mastery—safely.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature title="Adaptive practice" desc="Questions auto-level to keep learners in the sweet spot—never too easy, never too hard." icon="🧠" />
            <Feature title="Instant feedback" desc="Step-by-step hints and worked solutions to build real understanding." icon="⚡" />
            <Feature title="Mastery tracking" desc="Real-time progress, streaks, and standards-aligned objectives." icon="📈" />
            <Feature title="Parent & teacher dashboards" desc="See strengths, gaps, and suggested next steps—at a glance." icon="👪" />
            <Feature title="Safe & secure" desc="Privacy-first by design with granular controls for schools and families." icon="🔒" />
            <Feature title="Devices everywhere" desc="Works great on laptops, tablets, and phones for learning on the go." icon="📱" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white/70 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div>
              <h3 className="text-xl font-semibold">Why Adaptive Tutoring.ai</h3>
              <p className="mt-2 text-slate-600">We combine proven pedagogy with modern AI to personalise practice, explanations, and revision—so learners progress faster and feel more confident.</p>
            </div>
            <div className="md:col-span-2 text-slate-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>Personalised practice and explanations that meet each learner where they are.</li>
                <li>Curriculum-aligned content with mastery tracking and spaced revision.</li>
                <li>Dashboards for parents/teachers to monitor progress and assign work.</li>
                <li>Thoughtful safety controls and data privacy standards.</li>
                <li>Friendly UI that motivates with gentle streaks and goals—not dark patterns.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">Ready to boost learning?</h3>
          <p className="mt-3 text-slate-600">Start a free trial or book a live demo to see adaptive practice in action.</p>
          <a href="#contact" className="mt-6 inline-block rounded-2xl px-6 py-3 bg-slate-900 text-white hover:bg-slate-800">Book a demo</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold">Talk to our team</h3>
              <p className="mt-2 text-slate-600">Questions about pricing, schools, or integrations? Send a message and we’ll get back to you.</p>
              <div className="mt-6 space-y-3 text-slate-700">
                <p>📧 hello@adaptivetutoring.ai</p>
                <p>📍 London, UK</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    placeholder="Ada Lovelace"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    placeholder="ada@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-xl px-5 py-3 bg-slate-900 text-white hover:bg-slate-800"
                >
                  Send Message
                </button>
                {submitted && (
                  <p className="text-green-700 text-sm">Thanks! We'll be in touch shortly.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Adaptive Tutoring.ai. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-slate-800">Privacy</a>
            <a href="#" className="hover:text-slate-800">Terms</a>
            <a href="#" className="hover:text-slate-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
