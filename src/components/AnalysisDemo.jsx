import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  RotateCcw, Search, FileSearch, Cpu, FileText,
  CheckCircle2, Loader2, Circle, FileCode2,
} from 'lucide-react'

const steps = [
  { icon: RotateCcw, label: 'Sandbox reset' },
  { icon: Search, label: 'Hash lookup' },
  { icon: FileSearch, label: 'Static analysis' },
  { icon: Cpu, label: 'Dynamic analysis' },
  { icon: FileText, label: 'Report generated' },
]

export default function AnalysisDemo() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(reduce ? steps.length : 0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => {
      setActive((i) => (i >= steps.length + 1 ? 0 : i + 1))
    }, 1200)
    return () => clearInterval(id)
  }, [reduce])

  const done = Math.min(active, steps.length)
  const finished = active >= steps.length

  return (
    <div className="rounded-2xl border border-line bg-surface shadow-xl">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-xs text-muted">analysis-pipeline</span>
        </div>
        <span className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-xs text-muted">
          Illustrative demo
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 rounded-xl border border-line bg-surface-2 p-3">
          <FileCode2 size={20} className="text-accent" />
          <div>
            <p className="text-sm font-medium text-ink">sample-file.exe</p>
            <p className="font-mono text-xs text-muted">Uploaded for analysis</p>
          </div>
        </div>

        <ol className="mt-4 space-y-2">
          {steps.map(({ icon: Icon, label }, i) => {
            const state = i < active ? 'done' : i === active ? 'running' : 'pending'
            return (
              <li
                key={label}
                className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-colors ${
                  state === 'running' ? 'border-accent bg-surface-2' : 'border-line'
                }`}
              >
                <Icon
                  size={16}
                  className={state === 'pending' ? 'text-muted' : 'text-accent'}
                />
                <span
                  className={`flex-1 text-sm ${
                    state === 'pending' ? 'text-muted' : 'text-ink'
                  }`}
                >
                  {label}
                </span>
                {state === 'done' && <CheckCircle2 size={16} className="text-green-500" />}
                {state === 'running' && (
                  <Loader2 size={16} className="animate-spin text-accent" />
                )}
                {state === 'pending' && <Circle size={16} className="text-line" />}
              </li>
            )
          })}
        </ol>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-2">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
            animate={{ width: `${(done / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="mt-3 h-5 font-mono text-xs text-muted">
          {finished ? 'Report ready · PDF and JSON' : 'Analysing...'}
        </p>
      </div>
    </div>
  )
}