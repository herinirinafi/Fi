import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../theme/ThemeContext'
import { FiMenu, FiX, FiArrowUp, FiSun, FiMoon } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useLanguage()
  const { theme, toggle } = useTheme()
  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#stack' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.contact, href: '#contact' },
  ]
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
  }, [navLinks])

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
            ? 'border-accent/25 bg-bg/85 shadow-[0_8px_40px_rgba(0,0,0,0.25),0_4px_20px_rgba(167,139,250,0.15)]'
            : 'border-line bg-bg/75 shadow-[0_4px_24px_rgba(0,0,0,0.15)]'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between px-5 py-3 md:px-6">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-display text-sm font-extrabold text-accent-contrast">
              F
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-wider text-ink">FITIA</span>
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-muted">Portfolio</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === href.slice(1) ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {label}
                {activeSection === href.slice(1) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-soft text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-soft text-muted lg:hidden"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="overflow-hidden border-t border-line lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-2 p-5">
                {navLinks.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`rounded-lg px-3 py-3 font-medium transition-colors ${
                      activeSection === href.slice(1) ? 'bg-accent/15 text-ink' : 'text-muted hover:bg-accent/10 hover:text-ink'
                    }`}
                  >
                    {label}
                  </motion.a>
                ))}
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
            className="fixed bottom-6 right-5 z-[90] flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-accent-contrast shadow-[0_10px_30px_rgba(167,139,250,0.4)] transition-transform hover:-translate-y-1"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
