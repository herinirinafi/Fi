import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

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
  { id: 1, title: 'DataMap - API Nationale de Données', subtitle: 'Plateforme de données publiques', category: 'fullstack', categoryLabel: 'Full-Stack', description: 'Plateforme DataMap développée chez CODEL Community — API nationale de référence pour les données publiques de Madagascar. FullStack JS avec interface de visualisation interactive.', images: [project1], tags: ['React', 'Node.js', 'API REST', 'PostgreSQL'], gradient: 'from-blue-400 via-indigo-400 to-cyan-400' },
  { id: 2, title: 'ZAMA Service - Multiservices', subtitle: 'Application de gestion multiservices', category: 'desktop', categoryLabel: 'Desktop', description: 'Application de gestion des multiservices développée pour ZAMA Service Fianarantsoa. Gestion complète des services proposés aux clients.', images: [zama1], tags: ['Python', 'Desktop', 'Gestion'], gradient: 'from-emerald-400 to-teal-400' },
  { id: 3, title: 'Gestion des Personnels', subtitle: 'Application web de gestion RH', category: 'web', categoryLabel: 'Web', description: 'Application web de gestion des personnels couvrant la formation, la présence et le recrutement. Projet académique en informatique.', images: [project3], tags: ['React', 'Web App', 'Gestion RH'], gradient: 'from-amber-400 via-orange-400 to-red-400' },
  { id: 4, title: 'Jeu en Ligne Mobile', subtitle: 'Application mobile de jeu', category: 'web', categoryLabel: 'Web', description: 'Application mobile de jeu en ligne avec interface attractive et jouabilité engageante. Projet de développement mobile.', images: [project4], tags: ['React Native', 'Mobile', 'Jeu'], gradient: 'from-pink-400 via-rose-400 to-fuchsia-400' },
  { id: 5, title: 'Madagascar National Park', subtitle: 'Gestion des petits matériels', category: 'desktop', categoryLabel: 'Desktop', description: 'Application de gestion des petits matériels développée pour le Madagascar National Park Andringitra. Suivi et inventaire du matériel.', images: [project5], tags: ['C#', 'Desktop', 'Gestion Parc'], gradient: 'from-purple-400 via-violet-400 to-indigo-500' },
  { id: 6, title: 'Dashboard de Géodonnées', subtitle: 'Visualisation de données géographiques', category: 'data', categoryLabel: 'Data & IA', description: "Interface de visualisation de données géographiques avec filtres dynamiques et export de rapports pour l'analyse territoriale.", images: [project6], tags: ['React', 'Cartographie', 'Données'], gradient: 'from-cyan-400 via-sky-400 to-blue-500' },
  { id: 7, title: 'Portail de Données Publiques', subtitle: 'Consultation de données open data', category: 'fullstack', categoryLabel: 'Full-Stack', description: 'Interface de consultation des données publiques de Madagascar avec navigation par région et catégorie. Projet DataMap.', images: [project7], tags: ['React', 'Mapbox', 'Open Data'], gradient: 'from-pink-400 via-pink-500 to-purple-500' },
  { id: 8, title: 'MandaShop - E-commerce', subtitle: 'Site e-commerce dynamique', category: 'ecommerce', categoryLabel: 'E-commerce', description: 'Site web e-commerce dynamique pour la vente en ligne. Plateforme complète développée avec HTML, CSS et JavaScript.', images: [project7], tags: ['HTML', 'CSS', 'JavaScript'], gradient: 'from-orange-400 via-amber-400 to-red-400' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [imgIndex, setImgIndex] = useState(0)

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

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
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Projets Réalisés</span>
          <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">Mes Projets</h2>
          <div className="section-underline" />
          <p className="mt-4 text-white/60">Une sélection de mes réalisations récentes</p>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-2.5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-[0_6px_20px_rgba(59,130,246,0.3)]'
                  : 'border border-white/10 bg-white/5 text-white/70 hover:border-blue-400/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {filtered.length === 0 ? (
          <p className="py-10 text-center text-white/40">Aucun projet trouvé dans cette catégorie.</p>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                onClick={() => openModal(project)}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="glass group cursor-pointer overflow-hidden rounded-[20px] transition-all hover:border-blue-400/40 hover:shadow-[0_24px_60px_rgba(59,130,246,0.18)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent pb-5 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">Voir le projet</span>
                  </div>
                  <span className={`absolute left-3 top-3 rounded-full bg-gradient-to-r ${project.gradient} px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg`}>
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mb-3 text-sm font-medium text-blue-400">{project.subtitle}</p>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/60">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-300">{tag}</span>
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
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-[780px] overflow-y-auto rounded-[20px] bg-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeModal} aria-label="Close" className="absolute right-3.5 top-3.5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-red-600/70">
                <FiX size={22} />
              </button>
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imgIndex}
                    src={selectedProject.images[imgIndex]}
                    alt={`${selectedProject.title} ${imgIndex + 1}`}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </AnimatePresence>
                {selectedProject.images.length > 1 && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); setImgIndex(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length) }} aria-label="Previous" className="absolute left-3.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-blue-500/80">
                      <FiChevronLeft size={24} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setImgIndex(prev => (prev + 1) % selectedProject.images.length) }} aria-label="Next" className="absolute right-3.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-blue-500/80">
                      <FiChevronRight size={24} />
                    </button>
                    <span className="absolute bottom-3.5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3.5 py-1 text-sm text-white">{imgIndex + 1} / {selectedProject.images.length}</span>
                  </>
                )}
              </div>
              <div className="bg-white p-7">
                <span className={`mb-3.5 inline-block rounded-full bg-gradient-to-r ${selectedProject.gradient} px-3.5 py-1.5 text-xs font-semibold text-white`}>
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <p className="mb-3 text-sm font-medium text-blue-600">{selectedProject.subtitle}</p>
                <p className="mb-5 leading-relaxed text-gray-700">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-medium text-gray-700">{tag}</span>
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
