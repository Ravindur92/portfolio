import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts, formatDate } from '../data/posts'

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-mono text-3xl font-bold text-white">
        <span className="text-emerald-400">&gt;</span> Blog
      </h2>
      <p className="mt-2 text-gray-400">Write-ups and notes from my security work.</p>

      {posts.length === 0 ? (
        <p className="mt-10 text-gray-400">New posts are coming soon.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="glass flex h-full flex-col rounded-2xl p-6"
              >
                <p className="font-mono text-xs text-emerald-400">
                  {formatDate(post.date)}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300">
                  {post.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}