import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const navigate = useNavigate()
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      onClick={() => navigate(`/projects/${project.id}`)}
      className="glass flex cursor-pointer flex-col rounded-2xl p-6"
    >
      
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="mb-5 aspect-video w-full rounded-xl border border-cyan-400/20 object-cover"
        />
      )}
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        <Link
          to={`/projects/${project.id}`}
          onClick={(e) => e.stopPropagation()}
          className="text-emerald-300 transition hover:text-white"
        >
          View details →
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-gray-300 transition hover:text-white"
          >
            GitHub →
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-cyan-300 transition hover:text-white"
          >
            Live demo →
          </a>
        )}
      </div>
    </motion.article>
  )
}