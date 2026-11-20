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
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="glass fixed inset-x-0 top-4 z-50 mx-auto flex w-[calc(100%-2rem)] items-center justify-between gap-6 rounded-full px-6 py-3 md:w-fit"
      >
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
      </motion.nav>

      {open && (
        <div className="glass fixed inset-x-4 top-20 z-50 rounded-2xl p-5 md:hidden">
          <ul className="space-y-4 text-gray-200">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}