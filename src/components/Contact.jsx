import { useState } from 'react'
import { motion } from 'framer-motion'

const FORM_ENDPOINT = 'https://formspree.io/f/xkjrqnvq' // paste your Formspree URL here (see below)

const links = [
  { label: 'Email', value: 'ravindurasanjana92@gmail.com', href: 'mailto:ravindurasanjana92@gmail.com' },
  { label: 'LinkedIn', value: 'ravindu-rasanjana', href: 'https://linkedin.com/in/ravindu-rasanjana-8a7243298' },
  { label: 'GitHub', value: 'Ravindur92', href: 'https://github.com/Ravindur92' },
  { label: 'Location', value: 'Colombo, Sri Lanka', href: '' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (!FORM_ENDPOINT) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-cyan-400'

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-mono text-3xl font-bold text-white">
        <span className="text-emerald-400">&gt;</span> Contact
      </h2>
      <p className="mt-2 max-w-2xl text-gray-400">
        I'm keen to grow in SOC operations, security monitoring and incident
        response. If you're hiring, or just want to talk security, send me a message.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {links.map((item) => {
            const content = (
              <>
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                  {item.label}
                </p>
                <p className="mt-1 text-gray-200">{item.value}</p>
              </>
            )
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="glass block rounded-xl p-5 transition hover:border-cyan-400/60"
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="glass rounded-xl p-5">
                {content}
              </div>
            )
          })}

          <a
            href="/Ravindu-CV.pdf"
            download
            className="inline-block rounded-full bg-cyan-500 px-6 py-3 font-medium text-gray-900 transition hover:bg-cyan-300"
          >
            Download CV
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass space-y-4 rounded-2xl p-6"
        >
          <input name="name" required placeholder="Your name" className={inputClass} />
          <input name="email" type="email" required placeholder="Your email" className={inputClass} />
          <textarea name="message" required rows={5} placeholder="Your message" className={inputClass} />
          {/* hidden spam trap: bots fill it in, humans never see it */}
          <input name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-full bg-cyan-500 px-6 py-3 font-medium text-gray-900 transition hover:bg-cyan-300 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="text-sm text-emerald-300">Thanks! Your message was sent.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-300">
              Couldn't send right now. Please email me directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}