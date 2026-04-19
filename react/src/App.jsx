import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Work from './pages/Work'
import Contact from './pages/Contact'
import CV from './pages/CV'
import Resume from './pages/Resume'
import './styles.css'

function App() {
  useEffect(() => {
    // Initialize theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme')
    const theme = savedTheme || (prefersDark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [])

  useEffect(() => {
    // Initialize animations on route change
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <Router basename="/portfolio">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
