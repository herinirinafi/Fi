import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

import imgDataMap from '../assets/Image1.png'
import imgFiCash from '../assets/adabocash-interface.png'
import imgTaskFlow from '../assets/taskflow-interface.png'

const projectImages = [imgDataMap, imgFiCash, imgTaskFlow]

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.projects.eyebrow}</span>
          <h2 className="text-4xl font-bold text-ink md:text-5xl">{t.projects.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">{t.projects.subtitle}</p>
        </motion.div>

        <div className="flex flex-col gap-9">
          {t.projects.featured.map((project, i) => (
            <motion.article
              key={project.name}
              className="group glass relative overflow-hidden rounded-[24px] transition-all hover:border-accent/40 hover:shadow-[0_30px_70px_rgba(167,139,250,0.2)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="grid items-stretch md:grid-cols-[0.95fr_1.05fr]">
                <div className={`relative aspect-[16/11] overflow-hidden md:aspect-auto md:min-h-[300px] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={projectImages[i]}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/70 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a12]/40" />
                  <span className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[#0a0a12]/70 text-3xl shadow-lg backdrop-blur-md">
                    {project.medal}
                  </span>
                </div>

                <div className="flex flex-col justify-center gap-4 p-7 md:p-9">
                  <h3 className="text-3xl font-bold text-ink md:text-4xl">{project.name}</h3>
                  <p className="text-lg font-semibold text-gradient">{project.subtitle}</p>

                  <p className="leading-relaxed text-ink/70">{project.description}</p>

                  <div className="mt-1 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <a href={project.live || '#'} target={project.live ? '_blank' : undefined} rel={project.live ? 'noopener noreferrer' : undefined} onClick={project.live ? undefined : (e) => e.preventDefault()} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-accent-contrast shadow-[0_8px_25px_rgba(167,139,250,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(167,139,250,0.5)]">
                      <FiExternalLink size={16} />
                      {t.projects.live}
                    </a>
                    <a href={t.contact.githubValue} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-line bg-soft px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-soft">
                      <FiGithub size={16} />
                      {t.projects.github}
                    </a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-flex items-center gap-2 rounded-xl border border-line bg-soft px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-soft">
                      {t.projects.details}
                      <FiArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-8 py-3.5 text-sm font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/20">
            {t.projects.viewAll}
            <FiArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
