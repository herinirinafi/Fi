import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'A propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-inner container">
          <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
            <span className="logo-name">FITIA</span>
            <span className="logo-sub">PORTFOLIO</span>
          </a>

          <div className="navbar-links">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="navbar-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiSun size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiMoon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button className="mobile-toggle mobile-only" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-menu-inner">
                <h3 className="mobile-menu-title">Menu</h3>
                <p className="mobile-menu-sub">Navigation principale</p>
                {navLinks.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    className={`mobile-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {label}
                  </motion.a>
                ))}
                <div className="mobile-socials">
                  <p className="mobile-socials-label">Réseaux sociaux</p>
                  <div className="mobile-socials-row">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub"><FiGithub size={18} /></a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Facebook"><FaFacebookF size={18} /></a>
                    <a href="mailto:herinirinafitia@gmail.com" className="social-circle" aria-label="Email"><FiMail size={18} /></a>
                  </div>
                </div>
                <p className="mobile-menu-footer">© {new Date().getFullYear()} Fi'tia Portfolio</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
