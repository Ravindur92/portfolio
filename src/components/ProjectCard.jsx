import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight, ExternalLink, ShieldCheck } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCard({ project, index = 0 }) {
  const navigate = useNavigate()

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => navigate(`/projects/${project.id}`)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent"
    >
      <div className="relative aspect-video overflow-hidden bg-surface-2">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/20 to-violet-500/20">
            <ShieldCheck size={48} className="text-accent" />
          </div>
        )}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-white">
            View details <ArrowUpRight size={16} />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-muted transition hover:text-ink"
            >
              <FaGithub size={15} /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-accent transition hover:opacity-80"
            >
              <ExternalLink size={15} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}