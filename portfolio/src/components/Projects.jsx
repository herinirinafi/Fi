import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'
import { projectTitles, projectSubtitles, projectDescriptions } from '../i18n/translations'

import project1 from '../assets/Image1.png'
import zama1 from '../assets/ZamaService1.png'
import project3 from '../assets/Image3.png'
import project4 from '../assets/Image4.png'
import project5 from '../assets/Image5.png'
import project6 from '../assets/Image6.png'
import project7 from '../assets/Image7.png'

const categories = [
  { id: 'all', label: 'all' },
  { id: 'fullstack', label: 'fullstack' },
  { id: 'web', label: 'web' },
  { id: 'desktop', label: 'desktop' },
  { id: 'data', label: 'data' },
  { id: 'ecommerce', label: 'ecommerce' },
  { id: 'portfolio', label: 'portfolio' },
]

const projects = [
  { id: 1, category: 'fullstack', images: [project1], tags: ['React', 'Node.js', 'API REST', 'PostgreSQL'], gradient: 'from-violet-400 to-cyan-400' },
  { id: 2, category: 'desktop', images: [zama1], tags: ['Python', 'Desktop', 'Gestion'], gradient: 'from-emerald-400 to-teal-400' },
  { id: 3, category: 'web', images: [project3], tags: ['React', 'Web App', 'Gestion RH'], gradient: 'from-amber-400 to-orange-400' },
  { id: 4, category: 'web', images: [project4], tags: ['React Native', 'Mobile', 'Jeu'], gradient: 'from-pink-400 to-fuchsia-400' },
  { id: 5, category: 'desktop', images: [project5], tags: ['C#', 'Desktop', 'Gestion Parc'], gradient: 'from-purple-400 to-indigo-400' },
  { id: 6, category: 'data', images: [project6], tags: ['React', 'Cartographie', 'Données'], gradient: 'from-cyan-400 to-blue-400' },
  { id: 7, category: 'fullstack', images: [project7], tags: ['React', 'Mapbox', 'Open Data'], gradient: 'from-pink-400 to-purple-400' },
  { id: 8, category: 'ecommerce', images: [project7], tags: ['HTML', 'CSS', 'JavaScript'], gradient: 'from-orange-400 to-red-400' },
]

export default function Projects() {
  const { t, translations, lang } = useLanguage()
  const activeCatLabels = translations[lang].projects.filters
  const titles = projectTitles[lang]
  const pSubtitles = projectSubtitles[lang]
  const pDescriptions = projectDescriptions[lang]

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
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.projects.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.projects.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">{t.projects.subtitle}</p>
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
                  ? 'bg-gradient-to-r from-accent to-accent-2 text-[#0a0a12] shadow-[0_6px_20px_rgba(167,139,250,0.3)]'
                  : 'border border-white/10 bg-white/5 text-white/70 hover:border-accent/50 hover:text-white'
              }`}
            >
              {activeCatLabels[cat.id]}
            </button>
          ))}
        </motion.div>

        {filtered.length === 0 ? (
          <p className="py-10 text-center text-white/40">No projects</p>
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
                className="glass group cursor-pointer overflow-hidden rounded-[20px] transition-all hover:border-accent/40 hover:shadow-[0_24px_60px_rgba(167,139,250,0.18)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={project.images[0]} alt={titles[project.id]} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className={`absolute left-3 top-3 rounded-full bg-gradient-to-r ${project.gradient} px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg`}>
                    {activeCatLabels[project.category]}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{titles[project.id]}</h3>
                  <p className="mb-3 text-sm font-medium text-accent-2">{pSubtitles[project.id]}</p>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/60">{pDescriptions[project.id]}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">{tag}</span>
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
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0a12]/90 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-[780px] overflow-y-auto rounded-[20px] border border-white/10 bg-[#12121d]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeModal} aria-label="Close" className="absolute right-3.5 top-3.5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-red-600/70">
                <FiX size={22} />
              </button>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a12]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imgIndex}
                    src={selectedProject.images[imgIndex]}
                    alt={`${titles[selectedProject.id]} ${imgIndex + 1}`}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </AnimatePresence>
                {selectedProject.images.length > 1 && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); setImgIndex(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length) }} aria-label="Previous" className="absolute left-3.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-accent/80">
                      <FiChevronLeft size={24} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setImgIndex(prev => (prev + 1) % selectedProject.images.length) }} aria-label="Next" className="absolute right-3.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-accent/80">
                      <FiChevronRight size={24} />
                    </button>
                    <span className="absolute bottom-3.5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3.5 py-1 text-sm text-white">{imgIndex + 1} / {selectedProject.images.length}</span>
                  </>
                )}
              </div>
              <div className="p-7">
                <span className={`mb-3.5 inline-block rounded-full bg-gradient-to-r ${selectedProject.gradient} px-3.5 py-1.5 text-xs font-semibold text-white`}>
                  {activeCatLabels[selectedProject.category]}
                </span>
                <h3 className="text-2xl font-bold text-white">{titles[selectedProject.id]}</h3>
                <p className="mb-3 text-sm font-medium text-accent-2">{pSubtitles[selectedProject.id]}</p>
                <p className="mb-5 leading-relaxed text-white/70">{pDescriptions[selectedProject.id]}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-accent/15 px-3.5 py-1.5 text-xs font-medium text-accent">{tag}</span>
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
