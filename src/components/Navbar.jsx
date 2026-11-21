import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] border border-[rgba(139,92,246,0.25)] bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[16px] md:w-fit md:rounded-full ${
        open ? 'rounded-3xl max-md:bg-[#262a5c]' : 'rounded-full'
      }`}
    >
      <div className="flex items-center justify-between gap-6 px-6 py-3">
        <span className="font-mono font-semibold text-emerald-400">&gt;_ Ravindu</span>

        <ul className="hidden gap-5 text-sm text-gray-300 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="font-mono text-xl text-white md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <ul className="space-y-1 border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-gray-100 transition hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  )
}