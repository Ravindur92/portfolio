import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import NetworkBackground from './components/NetworkBackground'
import ScrollProgress from './components/ScrollProgress'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <NetworkBackground />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}