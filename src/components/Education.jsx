import { motion } from 'framer-motion'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="font-mono text-3xl font-bold text-white">
        <span className="text-emerald-400">&gt;</span> Education
      </h2>

      <div className="relative mt-10 border-l border-cyan-400/30 pl-8">
        {education.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[38px] top-2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
            <p className="font-mono text-xs text-emerald-400">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.place}</p>
            {item.stats && (
              <div className="mt-4 flex flex-wrap gap-3">
                {item.stats.map((stat) => (
                  <div key={stat.label} className="glass rounded-xl px-5 py-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}
            {item.highlights.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-md bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
            {item.years?.map((year) => (
              <div key={year.label} className="mt-5">
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                  {year.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {year.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-md bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}