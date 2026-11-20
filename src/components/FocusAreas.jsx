import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { areas } from '../data/areas'

export default function FocusAreas() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Focus areas" title="What I work on" />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map(({ icon: Icon, label, text }, i) => (
          <Reveal key={label} delay={i * 0.08} className="h-full">
            <div className="group h-full rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent">
              <span className="inline-flex rounded-xl bg-surface-2 p-3 text-accent transition group-hover:bg-accent group-hover:text-white">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 font-semibold text-ink">{label}</h3>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}