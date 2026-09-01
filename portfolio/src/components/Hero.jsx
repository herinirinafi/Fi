import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import profileImg from '../assets/profile.png'
import './Hero.css'

const techPills = [
  { name: 'React', color: '#22d3ee' },
  { name: 'Node.js', color: '#22c55e' },
  { name: 'Python', color: '#3b82f6' },
]

export default function Hero() {
  const handleScrollProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="star-field">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="star"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                animationDelay: `${(i % 10) * 0.6}s`,
                animationDuration: `${2 + (i % 5)}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-image-col"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-ring hero-ring-outer" />
          <div className="hero-ring hero-ring-inner" />
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="HERINIRINA Sitrakiniaina Fi'tia" className="hero-image" />
            <span className="hero-badge-img hero-badge-fullstack">Full Stack</span>
            <span className="hero-badge-img hero-badge-dev">Junior Dev</span>
          </div>
        </motion.div>

        <div className="hero-text-col">
          <motion.div
            className="hero-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="badge-dot" />
            Bonjour, je suis
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <span className="hero-name">HERINIRINA</span>
            <span className="hero-name-sec">Sitrakiniaina Fi'tia</span>
          </motion.h1>

          <motion.div
            className="hero-status"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Développeur & Entrepreneur
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            Étudiant en Master Informatique à l'ENI Fianarantsoa — Passionné par la
            gestion des systèmes, le développement web et le management d'entreprise.
          </motion.p>

          <motion.div
            className="hero-pills"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            {techPills.map((pill) => (
              <span key={pill.name} className="tech-pill" style={{ borderColor: `${pill.color}55`, background: `${pill.color}1a` }}>
                <span className="tech-pill-dot" style={{ background: pill.color }} />
                {pill.name}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary" onClick={handleScrollProjects}>
              Voir mes projets
            </a>
            <a href="/src/assets/Sitrakiniaina.pdf" download className="btn btn-glass">
              <FiDownload size={18} />
              Télécharger mon CV
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
