import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Projects.css'

import project1 from '../assets/Image1.png'
import zama1 from '../assets/ZamaService1.png'
import project3 from '../assets/Image3.png'
import project4 from '../assets/Image4.png'
import project5 from '../assets/Image5.png'
import project6 from '../assets/Image6.png'
import project7 from '../assets/Image7.png'

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'web', label: 'Web' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'data', label: 'Data & IA' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'portfolio', label: 'Portfolio' },
]

const projects = [
  {
    id: 1,
    title: 'DataMap - API Nationale de Données',
    subtitle: 'Plateforme de données publiques',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    description: 'Plateforme DataMap développée chez CODEL Community — API nationale de référence pour les données publiques de Madagascar. FullStack JS avec interface de visualisation interactive.',
    image: project1,
    images: [project1],
    tags: ['React', 'Node.js', 'API REST', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #60a5fa, #818cf8, #22d3ee)',
  },
  {
    id: 2,
    title: 'ZAMA Service - Multiservices',
    subtitle: 'Application de gestion multiservices',
    category: 'desktop',
    categoryLabel: 'Desktop',
    description: 'Application de gestion des multiservices développée pour ZAMA Service Fianarantsoa. Gestion complète des services proposés aux clients.',
    image: zama1,
    images: [zama1],
    tags: ['Python', 'Desktop', 'Gestion'],
    gradient: 'linear-gradient(135deg, #34d399, #22c55e, #2dd4bf)',
  },
  {
    id: 3,
    title: 'Gestion des Personnels',
    subtitle: 'Application web de gestion RH',
    category: 'web',
    categoryLabel: 'Web',
    description: 'Application web de gestion des personnels couvrant la formation, la présence et le recrutement. Projet académique en informatique.',
    image: project3,
    images: [project3],
    tags: ['React', 'Web App', 'Gestion RH'],
    gradient: 'linear-gradient(135deg, #fbbf24, #fb923c, #f87171)',
  },
  {
    id: 4,
    title: 'Jeu en Ligne Mobile',
    subtitle: 'Application mobile de jeu',
    category: 'web',
    categoryLabel: 'Web',
    description: 'Application mobile de jeu en ligne avec interface attractive et jouabilité engageante. Projet de développement mobile.',
    image: project4,
    images: [project4],
    tags: ['React Native', 'Mobile', 'Jeu'],
    gradient: 'linear-gradient(135deg, #f87171, #fb7185, #e879f9)',
  },
  {
    id: 5,
    title: 'Madagascar National Park',
    subtitle: 'Gestion des petits matériels',
    category: 'desktop',
    categoryLabel: 'Desktop',
    description: 'Application de gestion des petits matériels développée pour le Madagascar National Park Andringitra. Suivi et inventaire du matériel.',
    image: project5,
    images: [project5],
    tags: ['C#', 'Desktop', 'Gestion Parc'],
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6, #6366f1)',
  },
  {
    id: 6,
    title: 'Dashboard de Géodonnées',
    subtitle: 'Visualisation de données géographiques',
    category: 'data',
    categoryLabel: 'Data & IA',
    description: "Interface de visualisation de données géographiques avec filtres dynamiques et export de rapports pour l'analyse territoriale.",
    image: project6,
    images: [project6],
    tags: ['React', 'Cartographie', 'Données'],
    gradient: 'linear-gradient(135deg, #22d3ee, #06b6d4, #3b82f6)',
  },
  {
    id: 7,
    title: 'Portail de Données Publiques',
    subtitle: 'Consultation de données open data',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    description: 'Interface de consultation des données publiques de Madagascar avec navigation par région et catégorie. Projet DataMap.',
    image: project7,
    images: [project7],
    tags: ['React', 'Mapbox', 'Open Data'],
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899, #a855f7)',
  },
  {
    id: 8,
    title: 'MandaShop - E-commerce',
    subtitle: 'Site e-commerce dynamique',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    description: 'Site web e-commerce dynamique pour la vente en ligne. Plateforme complète développée avec HTML, CSS et JavaScript.',
    image: project7,
    images: [project7],
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #fb923c, #f59e0b, #ef4444)',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [imgIndex, setImgIndex] = useState(0)

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const closeModal = useCallback(() => {
    setSelectedProject(null)
    setImgIndex(0)
  }, [])

  useEffect(() => {
    if (!selectedProject) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') setImgIndex(prev => (prev + 1) % selectedProject.images.length)
      if (e.key === 'ArrowLeft') setImgIndex(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedProject, closeModal])

  const openModal = (project) => {
    setSelectedProject(project)
    setImgIndex(0)
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Projets Réalisés</span>
          <h2 className="section-title">Mes Projets</h2>
          <div className="section-underline" />
          <p className="section-subtitle">Une sélection de mes réalisations récentes</p>
        </motion.div>

        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {filtered.length === 0 ? (
          <p className="projects-empty">Aucun projet trouvé dans cette catégorie.</p>
        ) : (
          <div className="projects-grid">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                onClick={() => openModal(project)}
                whileHover={{ y: -8 }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <span className="project-view">Voir le projet</span>
                  </div>
                  <span className="project-category-badge" style={{ background: project.gradient }}>
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeModal} aria-label="Close">
                <FiX size={22} />
              </button>
              <div className="lightbox-stage">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imgIndex}
                    src={selectedProject.images[imgIndex]}
                    alt={`${selectedProject.title} ${imgIndex + 1}`}
                    className="lightbox-img"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </AnimatePresence>
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="lightbox-arrow lightbox-prev"
                      onClick={(e) => { e.stopPropagation(); setImgIndex(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length) }}
                      aria-label="Previous"
                    >
                      <FiChevronLeft size={24} />
                    </button>
                    <button
                      className="lightbox-arrow lightbox-next"
                      onClick={(e) => { e.stopPropagation(); setImgIndex(prev => (prev + 1) % selectedProject.images.length) }}
                      aria-label="Next"
                    >
                      <FiChevronRight size={24} />
                    </button>
                    <span className="lightbox-counter">{imgIndex + 1} / {selectedProject.images.length}</span>
                  </>
                )}
              </div>
              <div className="lightbox-info">
                <span className="lightbox-category" style={{ background: selectedProject.gradient }}>{selectedProject.categoryLabel}</span>
                <h3 className="lightbox-title">{selectedProject.title}</h3>
                <p className="lightbox-subtitle">{selectedProject.subtitle}</p>
                <p className="lightbox-desc">{selectedProject.description}</p>
                <div className="project-tags">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
