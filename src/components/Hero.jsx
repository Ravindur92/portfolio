import { motion } from 'framer-motion'
import {
  ArrowRight, Download, Mail, FolderGit2, Wrench, Crosshair, GraduationCap,
  Fingerprint, Terminal, Bug,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import AnalysisDemo from './AnalysisDemo'
import CountUp from './CountUp'
import Reveal from './Reveal'
import { projects } from '../data/projects'
import { tools } from '../data/tools'
import { areas } from '../data/areas'

const stats = [
  { icon: FolderGit2, value: projects.length, label: 'Security projects' },
  { icon: Wrench, value: tools.length, label: 'Tools and technologies' },
  { icon: Crosshair, value: areas.length, label: 'Focus areas' },
]

const focusChips = [
  { icon: Fingerprint, label: 'Digital forensics' },
  { icon: Terminal, label: 'Ethical hacking' },
  { icon: Bug, label: 'Malware analysis' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ravindu-rasanjana-8a7243298', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/Ravindur92', icon: FaGithub },
  { label: 'Email', href: 'mailto:ravindurasanjana92@gmail.com', icon: Mail },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="hero-grid absolute inset-0" />
      <div className="hero-glow absolute inset-0" />
      

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-12 pt-28 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <div className="relative h-20 w-18 overflow-hidden rounded-full border-2 border-line bg-surface-2">
              <div className="absolute inset-0 flex items-center justify-center font-bold text-muted">
                RL
              </div>
              <img
                src="/1000331887.jpeg"
                alt="Ravindu"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm text-muted">Hello, I'm</p>
              <p className="flex items-center gap-2 text-xs text-muted">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Open to cybersecurity roles
              </p>
            </div>
          </div>

          <h1 className="mt-5 text-5xl font-bold leading-tight text-ink sm:text-6xl">
            Ravindu{' '}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              Liyana Arachchi
            </span>
          </h1>
          <p className="mt-4 text-xl font-medium text-ink">Cybersecurity graduate</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {focusChips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted"
              >
                <Icon size={15} className="text-accent" />
                {label}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-md leading-relaxed text-muted">
            I investigate threats, test systems for weaknesses and build tools that defend.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              View my projects <ArrowRight size={16} />
            </a>
            <a
              href="/Ravindu-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-ink transition hover:bg-surface-2"
            >
              <Download size={16} /> Download CV
            </a>
            <div className="flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="rounded-full border border-line bg-surface p-3 text-muted transition hover:-translate-y-0.5 hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnalysisDemo />
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-4 px-6 pb-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <Reveal key={label} delay={i * 0.1}>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-1 hover:border-accent">
              <span className="rounded-xl bg-surface-2 p-3 text-accent">
                <Icon size={22} />
              </span>
              <div>
                <p className="text-3xl font-bold text-ink">
                  <CountUp to={value} />
                </p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.3}>
          <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-1 hover:border-accent">
            <span className="rounded-xl bg-surface-2 p-3 text-accent">
              <GraduationCap size={22} />
            </span>
            <div>
              <p className="text-3xl font-bold text-ink">2026</p>
              <p className="text-xs text-muted">B.Sc. Cybersecurity</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}