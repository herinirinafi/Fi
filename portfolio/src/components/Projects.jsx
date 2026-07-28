import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import './Projects.css'

import project1 from '../assets/Image1.png'
import zama1 from '../assets/ZamaService1.png'
import zama2 from '../assets/ZamaService2.png'
import project3 from '../assets/Image3.png'
import project4 from '../assets/Image4.png'
import project5 from '../assets/Image5.png'
import project6 from '../assets/Image6.png'
import project7 from '../assets/Image7.png'

const projects = [
  {
    id: 1,
    title: 'DataMap - API Nationale de Donnees',
    description: 'Plateforme DataMap developpee chez CODEL Community - API nationale de reference pour les donnees publiques de Madagascar. FullStack JS avec interface de visualisation interactive.',
    image: project1,
    tags: ['FullStack JS', 'API REST', 'PostgreSQL'],
    github: 'https://github.com/',
    color: '#6c63ff',
  },
  {
    id: 2,
    title: 'ZAMA Service - Multiservices',
    description: 'Application de gestion des multiservices developpee pour ZAMA Service Fianarantsoa. Gestion complete des services proposes aux clients.',
    image: zama1,
    images: [zama1, zama2],
    tags: ['Python', 'Gestion', 'Multiservices'],
    github: 'https://github.com/',
    color: '#22c55e',
  },
  {
    id: 3,
    title: 'Gestion des Personnels',
    description: 'Application web de gestion des personnels couvrant la formation, la presence et le recrutement. Projet academique en informatique.',
    image: project3,
    tags: ['Web App', 'Gestion RH', 'React'],
    github: 'https://github.com/',
    color: '#f59e0b',
  },
  {
    id: 4,
    title: 'Jeu en Ligne Mobile',
    description: 'Application mobile de jeu en ligne avec interface attractive et jouabilite engageante. Projet de developpement mobile.',
    image: project4,
    tags: ['Mobile', 'Jeu', 'React Native'],
    github: 'https://github.com/',
    color: '#ef4444',
  },
  {
    id: 5,
    title: 'Madagascar National Park',
    description: 'Application de gestion des petits materiels developpee pour le Madagascar National Park Andringitra. Suivi et inventaire du materiel.',
    image: project5,
    tags: ['C#', 'Desktop', 'Gestion Parc'],
    github: 'https://github.com/',
    color: '#8b5cf6',
  },
  {
    id: 6,
    title: 'Dashboard de Geodonnees',
    description: 'Interface de visualisation de donnees geographiques avec filtres dynamiques et export de rapports pour l\'analyse territoriale.',
    image: project6,
    tags: ['React', 'Cartographie', 'Donnees'],
    github: 'https://github.com/',
    color: '#06b6d4',
  },
  {
    id: 7,
    title: 'Portail de Donnees Publiques',
    description: 'Interface de consultation des donnees publiques de Madagascar avec navigation par region et categorie. Projet DataMap.',
    image: project7,
    tags: ['React', 'Mapbox', 'Open Data'],
    github: 'https://github.com/',
    color: '#ec4899',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-subtitle">
            Une selection de mes realisations recentes
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <span className="project-view">Voir le projet</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-color-dot" style={{ background: project.color }} />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <FiX size={24} />
              </button>
              {selectedProject.images ? (
                <div className="modal-images">
                  {selectedProject.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`${selectedProject.title} ${idx + 1}`} className="modal-image" />
                  ))}
                </div>
              ) : (
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              )}
              <div className="modal-info">
                <div className="project-color-dot" style={{ background: selectedProject.color }} />
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-desc">{selectedProject.description}</p>
                <div className="project-tags">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="modal-actions">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <FiGithub size={18} /> Code source
                  </a>
                  <a href="#" className="btn btn-primary">
                    <FiExternalLink size={18} /> Voir la demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
