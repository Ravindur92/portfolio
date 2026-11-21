import { ShieldCheck, Mail, MapPin, Download, ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ravindu-rasanjana-8a7243298', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/Ravindur92', icon: FaGithub },
  { label: 'Email', href: 'mailto:ravindurasanjana92@gmail.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="relative mt-16 bg-bg/70 backdrop-blur">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="/#home" className="inline-flex items-center gap-2 text-lg font-semibold text-ink">
            <ShieldCheck size={22} className="text-accent" />
            Ravindu Liyana Arachchi
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Cybersecurity graduate focused on digital forensics, ethical hacking and
            malware analysis.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="rounded-full border border-line bg-surface p-2.5 text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-ink"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink">Navigate</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink">Get in touch</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <a
                href="mailto:ravindurasanjana92@gmail.com"
                className="inline-flex items-center gap-2 transition hover:text-ink"
              >
                <Mail size={15} /> ravindurasanjana92@gmail.com
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin size={15} /> Colombo, Sri Lanka
            </li>
            <li>
              <a
                href="/Ravindu-CV.pdf"
                download
                className="inline-flex items-center gap-2 transition hover:text-ink"
              >
                <Download size={15} /> Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 text-xs text-muted">
          <p>© {new Date().getFullYear()} Ravindu Liyana Arachchi. All rights reserved.</p>
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full bg-accent p-2.5 text-white transition hover:-translate-y-0.5"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}