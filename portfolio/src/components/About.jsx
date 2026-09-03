import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.about.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.about.title}</h2>
        </motion.div>

        <motion.div
          className="glass mx-auto max-w-3xl rounded-[24px] p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-2xl font-bold text-gradient md:text-3xl">{t.about.heading}</p>
          <p className="mt-2 text-lg font-medium text-accent-2">{t.about.sub}</p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {t.about.domains.map((d) => (
              <span key={d} className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
                {d}
              </span>
            ))}
          </div>

          <p className="mt-6 leading-relaxed text-white/70">
            {expanded ? t.about.body : `${t.about.body.slice(0, 220)}...`}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setExpanded(e => !e)}
              className="text-sm font-semibold text-accent transition-colors hover:text-accent-2"
            >
              {expanded ? '−' : '+'} {t.about.readMore}
            </button>
            <a href="/src/assets/Sitrakiniaina.pdf" download className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-[#0a0a12] shadow-[0_10px_30px_rgba(167,139,250,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(167,139,250,0.5)]">
              <FiDownload size={18} />
              {t.about.downloadCv}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
