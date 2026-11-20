import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'

function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/)
  return match ? match[1] : null
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [active, setActive] = useState(null)

  const images = (project?.images ?? []).map((img) =>
    typeof img === 'string' ? { src: img } : img
  )
  const videos = project?.videos ?? []

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, images.length])

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <p className="text-gray-300">That project could not be found.</p>
        <a href="/#projects" className="mt-4 inline-block font-mono text-cyan-300">
          &larr; Back to projects
        </a>
      </div>
    )
  }

  const overview = project.overview ?? [project.description]

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <a href="/#projects" className="font-mono text-sm text-cyan-300 hover:text-white">
        &larr; Back to projects
      </a>

      <h1 className="glow-text mt-6 text-4xl font-bold text-white">{project.title}</h1>

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
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer"
            className="glass rounded-full px-5 py-2 text-gray-200 transition hover:text-white">
            GitHub →
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer"
            className="rounded-full bg-cyan-500 px-5 py-2 font-medium text-gray-900 transition hover:bg-cyan-300">
            Live demo →
          </a>
        )}
      </div>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="mt-8 w-full rounded-2xl border border-cyan-400/20 object-cover"
        />
      )}

      <section className="mt-10">
        <h2 className="font-mono text-xl font-bold text-white">
          <span className="text-emerald-400">&gt;</span> Overview
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-gray-300">
          {overview.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {project.highlights?.length > 0 && (
        <section className="mt-10">
          <h2 className="font-mono text-xl font-bold text-white">
            <span className="text-emerald-400">&gt;</span> Key features
          </h2>
          <ul className="glass mt-4 space-y-3 rounded-2xl p-6 text-gray-300">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-400">▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.challenges?.length > 0 && (
        <section className="mt-10">
          <h2 className="font-mono text-xl font-bold text-white">
            <span className="text-emerald-400">&gt;</span> Challenges and solutions
          </h2>
          <ul className="glass mt-4 space-y-3 rounded-2xl p-6 text-gray-300">
            {project.challenges.map((c, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-400">▹</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {videos.length > 0 && (
        <section className="mt-10">
          <h2 className="font-mono text-xl font-bold text-white">
            <span className="text-emerald-400">&gt;</span> Video demo
          </h2>
          <div className="mt-4 space-y-6">
            {videos.map((v, i) => {
              const yt = getYouTubeId(v)
              return (
                <div key={i} className="glass overflow-hidden rounded-2xl">
                  {yt ? (
                    <iframe
                      className="aspect-video w-full"
                      src={`https://www.youtube-nocookie.com/embed/${yt}`}
                      title={`${project.title} video ${i + 1}`}
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <video className="aspect-video w-full" src={v} controls preload="metadata" />
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {images.length > 0 && (
        <section className="mt-10">
          <h2 className="font-mono text-xl font-bold text-white">
            <span className="text-emerald-400">&gt;</span> Images
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {images.map((img, i) => (
              <figure key={img.src} className="glass overflow-hidden rounded-2xl">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="block w-full cursor-zoom-in"
                >
                  <img
                    src={img.src}
                    alt={img.caption || `${project.title} screenshot ${i + 1}`}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition hover:opacity-90"
                  />
                </button>
                {img.caption && (
                  <figcaption className="px-4 py-3 text-sm text-gray-400">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
        >
          <img
            src={images[active].src}
            alt={images[active].caption || project.title}
            className="max-h-[85vh] max-w-full rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation()
                  setActive((active - 1 + images.length) % images.length)
                }}
                className="glass absolute left-4 rounded-full px-4 py-3 text-white"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation()
                  setActive((active + 1) % images.length)
                }}
                className="glass absolute right-4 rounded-full px-4 py-3 text-white"
              >
                ›
              </button>
            </>
          )}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="glass absolute right-4 top-4 rounded-full px-4 py-2 text-white"
          >
            ✕
          </button>
        </div>
      )}
    </article>
  )
}