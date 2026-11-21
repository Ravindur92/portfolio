import { useEffect, useRef } from 'react'
import { WORLD_MAP } from '../data/worldMap'

const { latTop, latBottom, cols, rows, data } = WORLD_MAP
const LAT_SPAN = latTop - latBottom
const ASPECT = 360 / LAT_SPAN

const MAX_ATTACKS = 7
const ATTACK_COLORS = ['accent', 'accent', 'accent', '#ff5d73', '#ff5d73', '#ffb454']

// [longitude, latitude]. Decorative only: attacks are random pairs, not real data.
const CITIES = [
  [-74.0, 40.7], [-122.4, 37.8], [-99.1, 19.4], [-79.4, 43.7],
  [-46.6, -23.5], [-58.4, -34.6], [-0.1, 51.5], [8.7, 50.1],
  [-3.7, 40.4], [37.6, 55.8], [29.0, 41.0], [31.2, 30.0],
  [3.4, 6.5], [36.8, -1.3], [28.0, -26.2], [55.3, 25.2],
  [72.9, 19.1], [79.9, 6.9], [103.8, 1.35], [106.8, -6.2],
  [116.4, 39.9], [127.0, 37.6], [139.7, 35.7], [151.2, -33.9],
]

const rand = (min, max) => min + Math.random() * (max - min)

export default function WorldMapBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let vw = 0
    let vh = 0
    let dpr = 1
    let layout = { x: 0, y: 0, w: 0, h: 0 }
    let dotsLayer = null
    let colors = { accent: '#8b7bff', muted: '#9aa3b8' }
    let attacks = []
    let nextSpawn = 0
    let frame = 0

    const readColors = () => {
      const css = getComputedStyle(document.documentElement)
      colors = {
        accent: css.getPropertyValue('--accent').trim() || '#8b7bff',
        muted: css.getPropertyValue('--muted').trim() || '#9aa3b8',
      }
    }

    const project = (lon, lat) => ({
      x: layout.x + ((lon + 180) / 360) * layout.w,
      y: layout.y + ((latTop - lat) / LAT_SPAN) * layout.h,
    })

    const buildDotsLayer = () => {
      const layer = document.createElement('canvas')
      layer.width = vw * dpr
      layer.height = vh * dpr
      const lctx = layer.getContext('2d')
      lctx.scale(dpr, dpr)

      const cellW = layout.w / cols
      const cellH = layout.h / rows
      const radius = Math.max(0.9, Math.min(cellW, cellH) * 0.2)

      lctx.fillStyle = colors.muted
      lctx.globalAlpha = 0.35
      lctx.beginPath()
      for (let r = 0; r < rows; r++) {
        const row = data[r]
        for (let c = 0; c < cols; c++) {
          if (row[c] !== '1') continue
          const x = layout.x + (c + 0.5) * cellW
          const y = layout.y + (r + 0.5) * cellH
          lctx.moveTo(x + radius, y)
          lctx.arc(x, y, radius, 0, Math.PI * 2)
        }
      }
      lctx.fill()
      dotsLayer = layer
    }

    const drawStatic = () => {
      ctx.clearRect(0, 0, vw, vh)
      if (dotsLayer) ctx.drawImage(dotsLayer, 0, 0, vw, vh)
    }

    const resize = () => {
      vw = window.innerWidth
      vh = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = vw * dpr
      canvas.height = vh * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const mapH = Math.max(vw / ASPECT, vh * 0.6)
      const mapW = mapH * ASPECT
      layout = { x: (vw - mapW) / 2, y: (vh - mapH) / 2, w: mapW, h: mapH }

      readColors()
      buildDotsLayer()
      attacks = []
      if (reduce) drawStatic()
    }

    const createAttack = (now) => {
      const a = CITIES[Math.floor(Math.random() * CITIES.length)]
      let b = a
      let p0
      let p1
      let dist = 0
      for (let tries = 0; tries < 12 && dist < layout.w * 0.12; tries++) {
        b = CITIES[Math.floor(Math.random() * CITIES.length)]
        p0 = project(a[0], a[1])
        p1 = project(b[0], b[1])
        dist = Math.hypot(p1.x - p0.x, p1.y - p0.y)
      }
      if (!p0 || !p1 || dist < 10) return null

      const control = {
        x: (p0.x + p1.x) / 2,
        y: (p0.y + p1.y) / 2 - dist * 0.28,
      }
      const pick = ATTACK_COLORS[Math.floor(Math.random() * ATTACK_COLORS.length)]
      return {
        p0,
        p1,
        control,
        color: pick === 'accent' ? colors.accent : pick,
        start: now + rand(0, 0.4),
        travel: rand(1.5, 2.4),
        ring: 1.1,
      }
    }

    const pointAt = (atk, t) => {
      const u = 1 - t
      return {
        x: u * u * atk.p0.x + 2 * u * t * atk.control.x + t * t * atk.p1.x,
        y: u * u * atk.p0.y + 2 * u * t * atk.control.y + t * t * atk.p1.y,
      }
    }

    const drawAttack = (atk, now) => {
      const e = now - atk.start
      if (e < 0) return true

      const TRAIL = 0.35
      const ratio = e / atk.travel
      const headT = Math.min(ratio, 1)
      const tailT = Math.min(Math.max(ratio - TRAIL, 0), 1)

      ctx.strokeStyle = atk.color
      ctx.fillStyle = atk.color
      ctx.lineCap = 'round'
      ctx.lineWidth = 1.6

      // trail
      if (headT > tailT) {
        const SEGMENTS = 14
        let prev = pointAt(atk, tailT)
        for (let i = 1; i <= SEGMENTS; i++) {
          const t = tailT + ((headT - tailT) * i) / SEGMENTS
          const next = pointAt(atk, t)
          ctx.globalAlpha = (i / SEGMENTS) * 0.9
          ctx.beginPath()
          ctx.moveTo(prev.x, prev.y)
          ctx.lineTo(next.x, next.y)
          ctx.stroke()
          prev = next
        }
      }

      // head
      if (ratio <= 1) {
        const head = pointAt(atk, headT)
        ctx.globalAlpha = 0.25
        ctx.beginPath()
        ctx.arc(head.x, head.y, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.arc(head.x, head.y, 2.2, 0, Math.PI * 2)
        ctx.fill()
      }

      // small ping at the source
      if (e < 0.6) {
        const k = e / 0.6
        ctx.globalAlpha = (1 - k) * 0.8
        ctx.lineWidth = 1.2
        ctx.beginPath()
        ctx.arc(atk.p0.x, atk.p0.y, 2 + k * 9, 0, Math.PI * 2)
        ctx.stroke()
      }

      // impact rings at the target
      const sinceHit = e - atk.travel
      if (sinceHit >= 0 && sinceHit < atk.ring) {
        const k = sinceHit / atk.ring
        ctx.lineWidth = 1.5
        ctx.globalAlpha = (1 - k) * 0.9
        ctx.beginPath()
        ctx.arc(atk.p1.x, atk.p1.y, 3 + k * 24, 0, Math.PI * 2)
        ctx.stroke()
        ctx.globalAlpha = 1 - k
        ctx.beginPath()
        ctx.arc(atk.p1.x, atk.p1.y, 2.4, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      return e < atk.travel * (1 + TRAIL) || sinceHit < atk.ring
    }

    const loop = () => {
      const now = performance.now() / 1000
      drawStatic()

      if (attacks.length < MAX_ATTACKS && now >= nextSpawn) {
        const atk = createAttack(now)
        if (atk) attacks.push(atk)
        nextSpawn = now + rand(0.3, 0.8)
      }
      attacks = attacks.filter((atk) => drawAttack(atk, now))

      frame = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)

    const observer = new MutationObserver(() => {
      readColors()
      buildDotsLayer()
      if (reduce) drawStatic()
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    if (!reduce) frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-35"
    />
  )
}
