import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {
  const location = useLocation()
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light'
    setTheme(currentTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="portfolio-header">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">Manoj Gadamsetty</span>
          </Link>
        </div>
        
        <ul className="nav-list">
          <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link></li>
          <li><Link to="/experience" className={`nav-link ${isActive('/experience')}`}>Experience</Link></li>
          <li><Link to="/education" className={`nav-link ${isActive('/education')}`}>Education</Link></li>
          <li><Link to="/work" className={`nav-link ${isActive('/work')}`}>Work</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link></li>
          <li><Link to="/cv" className={`nav-link ${isActive('/cv')}`}>CV</Link></li>
          <li><Link to="/resume" className={`nav-link ${isActive('/resume')}`}>Resume</Link></li>
        </ul>

        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          title="Toggle theme"
        >
          {theme === 'light' ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </button>
      </nav>
    </header>
  )
}

export default Header
