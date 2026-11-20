import fm from 'front-matter'

const files = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { attributes, body } = fm(raw)
    const slug = path.split('/').pop().replace('.md', '')
    return { slug, tags: [], ...attributes, body }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}