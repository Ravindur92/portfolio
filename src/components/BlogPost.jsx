import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { posts, formatDate } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <p className="text-gray-300">That post could not be found.</p>
        <a href="/#blog" className="mt-4 inline-block font-mono text-cyan-300">
          &larr; Back to blog
        </a>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <a href="/#blog" className="font-mono text-sm text-cyan-300 hover:text-white">
        &larr; Back to blog
      </a>
      <p className="mt-6 font-mono text-xs text-emerald-400">{formatDate(post.date)}</p>
      <h1 className="glow-text mt-2 text-4xl font-bold text-white">{post.title}</h1>

      <div className="glass prose prose-invert mt-8 max-w-none rounded-2xl p-8">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </article>
  )
}