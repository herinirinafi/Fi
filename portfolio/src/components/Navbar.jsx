import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

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
          if (entry.isIntersecting) setActiveSection(entry.target.id)
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
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <motion.nav
        className={`fixed left-1/2 top-4 z-[100] w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'border-blue-400/25 bg-navy-900/85 shadow-[0_8px_40px_rgba(0,0,0,0.5),0_4px_20px_rgba(59,130,246,0.15)]'
            : 'border-white/10 bg-navy-900/75 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between px-6 py-3.5">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex flex-col leading-none">
            <span className="font-serif text-xl font-extrabold tracking-wider text-gradient-accent">FITIA</span>
            <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/40">Portfolio</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === href.slice(1) ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
                {activeSection === href.slice(1) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-blue-400/50 hover:text-white"
            >
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

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 md:hidden"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="overflow-hidden border-t border-white/5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-2 p-6">
                <h3 className="text-lg font-bold text-white">Menu</h3>
                <p className="mb-3 text-xs text-white/40">Navigation principale</p>
                {navLinks.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`rounded-lg px-3 py-3 font-medium transition-colors ${
                      activeSection === href.slice(1) ? 'bg-blue-500/15 text-white' : 'text-white/70 hover:bg-blue-500/10 hover:text-white'
                    }`}
                  >
                    {label}
                  </motion.a>
                ))}
                <div className="mt-4 border-t border-white/5 pt-4">
                  <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-widest text-white/40">Réseaux sociaux</p>
                  <div className="flex gap-3">
                    {[
                      { icon: <FiGithub size={18} />, href: 'https://github.com/', label: 'GitHub' },
                      { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
                      { icon: <FaFacebookF size={18} />, href: '#', label: 'Facebook' },
                      { icon: <FiMail size={18} />, href: 'mailto:herinirinafitia@gmail.com', label: 'Email' },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 hover:border-blue-400/50 hover:text-white">
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-xs text-white/40">© {new Date().getFullYear()} Fi'tia Portfolio</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-6 right-5 z-[90] flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-[0_10px_30px_rgba(59,130,246,0.4)] transition-transform hover:-translate-y-1"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
