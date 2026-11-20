import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-mono text-3xl font-bold text-white">
        <span className="text-emerald-400">&gt;</span> Skills
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, g) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: g * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-mono text-sm uppercase tracking-widest text-cyan-300">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}