import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WorldMapBackground from './components/WorldMapBackground'
import Hero from './components/Hero'
import FocusAreas from './components/FocusAreas'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Education from './components/Education'
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
      <FocusAreas />
      <Projects />
      <Skills />
      <About />
      <Education />
      <Blog />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <WorldMapBackground />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}