export default function Panel({ title, icon: Icon, children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-line bg-surface ${className}`}>
      <header className="flex items-center gap-2 border-b border-line px-5 py-3">
        {Icon && <Icon size={16} className="text-accent" />}
        <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
          {title}
        </h3>
      </header>
      <div className="p-5">{children}</div>
    </section>
  )
}