import { motion } from 'framer-motion'

const stats = [
  { value: '2', label: 'Security projects' },
  { value: '15', label: 'Tools used' },
  { value: '2026', label: 'B.Sc. Cybersecurity' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ravindu-rasanjana-8a7243298' },
  { label: 'GitHub', href: 'https://github.com/Ravindur92' },
  { label: 'Email', href: 'mailto:ravindurasanjana92@gmail.com' },
]

const areas = [
  'Malware Analysis',
  'Digital Forensics',
  'Ethical Hacking',
  'Network Security',
  'Incident Response',
  'Vulnerability Assessment',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32"
    >
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-gray-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to cybersecurity roles
          </div>

          <h1 className="glow-text mt-6 text-5xl font-bold leading-tight text-white sm:text-6xl">
            Ravindu Liyana Arachchi
          </h1>
          <p className="mt-3 text-xl text-cyan-300 sm:text-2xl">
            Cybersecurity graduate · Digital forensics · Ethical hacking · Malware analysis
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-gray-300">
            I'm a cybersecurity graduate who enjoys the full picture: testing
            systems to find weaknesses, investigating what happened when
            something goes wrong, and building the defences that stop it
            happening again. My work spans malware analysis, digital forensics,
            ethical hacking and network security, including a full-stack malware
            analysis platform and an on-premise analysis lab.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-6 py-3 font-medium text-gray-900 transition hover:bg-cyan-300"
            >
              View my projects
            </a>
            <a
              href="/Ravindu-CV.pdf"
              download
              className="glass rounded-full px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 flex gap-5 font-mono text-sm text-gray-400">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {s.label} ↗
              </a>
            ))}
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-cyan-400/40 via-emerald-500/30 to-transparent blur-2xl" />

          <div className="glass relative overflow-hidden rounded-[2rem] p-8">
            <div className="flex items-center gap-4 px-2 pt-2">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 shadow-[0_0_24px_rgba(139,92,246,0.4)]">
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white/80">
                  RL
                </div>
                <img
                  src="/profile.jpeg"
                  alt="Ravindu"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
              <div className="min-w-0 flex-1 rounded-xl border border-emerald-500/30 bg-white/5 px-4 py-3">
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">
                  B.Sc. Cybersecurity
                </p>
                <p className="mt-1 text-sm text-gray-100">
                  Edith Cowan University Sri Lanka
                </p>
              </div>
            </div>

            <div className="px-2 pb-2 pt-4">
              <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
                Areas I work in
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {areas.map((area, i) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                    className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}