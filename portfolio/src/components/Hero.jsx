import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profileImg from '../assets/profile.png'
import './Hero.css'

export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault()
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-image-wrapper"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-image-ring" />
          <img src={profileImg} alt="HERINIRINA Sitrakiniaina" className="hero-image" />
        </motion.div>

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="badge-dot" />
          Developpeur - Entrepreneur
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="hero-name">HERINIRINA Sitrakiniaina Fi'tia</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Etudiant en Master Informatique a l'ENI Fianarantsoa, passionne par
          la gestion des systemes informatiques, le developpement web et le
          management d'entreprise.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a href="#projects" className="btn btn-primary" onClick={handleScroll}>
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Me contacter
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:herinirinafitia@gmail.com" className="social-link" aria-label="Email">
            <FiMail size={20} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          className="scroll-indicator"
          onClick={handleScroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  )
}
