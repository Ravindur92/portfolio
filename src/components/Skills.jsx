import { ShieldCheck } from 'lucide-react'
import Panel from './Panel'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { tools } from '../data/tools'
import { skillGroups } from '../data/skills'

export default function Skills() {
  const security = skillGroups.find((g) => g.title === 'Cybersecurity')?.items ?? []

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies"
          subtitle="The tools I use for analysis, testing and building."
        />
      </Reveal>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {tools.map(({ name, icon: Icon, color }, i) => (
          <Reveal key={name} delay={(i % 5) * 0.06} className="h-full">
            <div
              style={{ '--brand': color }}
              className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-6 transition hover:-translate-y-1 hover:border-[var(--brand)]"
            >
              <Icon
                size={30}
                className="text-muted transition-colors group-hover:text-[var(--brand)]"
              />
              <span className="text-center text-xs font-medium text-ink">{name}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <Panel title="Security skills" icon={ShieldCheck}>
          <div className="flex flex-wrap gap-2">
            {security.map((item) => (
              <span
                key={item}
                className="rounded-md border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted transition hover:border-accent hover:text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </Panel>
      </Reveal>
    </section>
  )
}