import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiBookOpen, FiDownload } from 'react-icons/fi'
import './About.css'

const timeline = [
  {
    icon: <FiBookOpen />,
    period: '2022 - En cours',
    title: 'Master I en Informatique Generale',
    description: 'ENI Fianarantsoa - Ecole Nationale d\'Informatique. Specialisation en gestion des systemes informatiques.',
  },
  {
    icon: <FiCalendar />,
    period: 'Diplome 2024',
    title: 'Licence Professionnelle en Management',
    description: 'LIME Fianarantsoa - Management des entreprises. Double competence informatique et management.',
  },
  {
    icon: <FiMapPin />,
    period: '2023 - 2026',
    title: 'Responsable Communication - CODEL',
    description: 'Responsable Communication & Relations Publiques a l\'Association des Etudiants ENI. Gestion de la communication institutionnelle et organisation d\'evenements.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">A propos de moi</h2>
          <p className="section-subtitle">
            Decouvrez mon parcours et ma passion pour le developpement
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="about-heading">Developpeur & Entrepreneur</h3>
            <p>
              Je suis HERINIRINA Sitrakiniaina Fi'tia, etudiant en 1ere annee de Master
              Informatique a l'Ecole Nationale d'Informatique de Fianarantsoa. Passionne par
              la gestion des systemes informatiques et le management d'entreprise.
            </p>
            <p>
              J'ai acquis de solides competences en administration de reseaux, securite
              informatique et support utilisateurs. Mon double parcours en informatique et
              en management me permet d'avoir une vision complete des projets digitaux.
            </p>
            <p>
              Actuellement Responsable Communication au CODEL et implique dans plusieurs
              projets de developpement, je cree des solutions innovantes comme DataMap
              et des applications de gestion multiservices.
            </p>
            <a href="/src/assets/Sitrakiniaina.pdf" download className="btn btn-primary about-cv-btn">
              <FiDownload size={18} />
              Telecharger mon CV
            </a>
          </motion.div>

          <motion.div
            className="about-timeline"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
