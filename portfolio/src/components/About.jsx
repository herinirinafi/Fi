import { motion } from 'framer-motion'
import { FiDownload, FiMapPin, FiBookOpen, FiUser } from 'react-icons/fi'
import profileImg from '../assets/profile.png'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Qui suis-je ?</span>
          <h2 className="section-title">À propos de moi</h2>
          <div className="section-underline" />
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-portrait"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-ring about-ring-outer" />
            <div className="about-ring about-ring-inner" />
            <div className="about-image-wrapper">
              <img src={profileImg} alt="HERINIRINA Sitrakiniaina Fi'tia" className="about-image" />
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <blockquote className="about-quote">
              <span className="quote-mark">"</span>
              L'innovation naît de la passion et de la persévérance.
              <span className="quote-mark">"</span>
            </blockquote>

            <p className="about-text">
              Je suis <strong>HERINIRINA Sitrakiniaina Fi'tia</strong>, étudiant en 1ère année de
              Master Informatique à l'École Nationale d'Informatique de Fianarantsoa. Passionné
              par la gestion des systèmes informatiques, le développement web et le management
              d'entreprise.
            </p>
            <p className="about-text">
              J'ai acquis de solides compétences en administration de réseaux, sécurité
              informatique et support utilisateurs. Mon double parcours en informatique et en
              management me permet d'avoir une vision complète des projets digitaux. Actuellement
              Responsable Communication au CODEL et impliqué dans plusieurs projets de
              développement, je crée des solutions innovantes comme DataMap et des applications
              de gestion multiservices.
            </p>

            <div className="about-cards">
              <div className="about-card">
                <span className="about-card-icon"><FiUser size={18} /></span>
                <div>
                  <span className="about-card-label">Nationalité</span>
                  <span className="about-card-value">Malgache</span>
                </div>
              </div>
              <div className="about-card">
                <span className="about-card-icon"><FiMapPin size={18} /></span>
                <div>
                  <span className="about-card-label">Localisation</span>
                  <span className="about-card-value">Fianarantsoa, Madagascar</span>
                </div>
              </div>
              <div className="about-card">
                <span className="about-card-icon"><FiBookOpen size={18} /></span>
                <div>
                  <span className="about-card-label">Formation</span>
                  <span className="about-card-value">Master Informatique — ENI Fianarantsoa</span>
                </div>
              </div>
            </div>

            <a href="/src/assets/Sitrakiniaina.pdf" download className="btn btn-primary about-cv-btn">
              <FiDownload size={18} />
              Télécharger mon CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
