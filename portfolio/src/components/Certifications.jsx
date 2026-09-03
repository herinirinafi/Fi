import { motion } from 'framer-motion'
import { FiAward, FiChevronsRight } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

export default function Certifications() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.certifications.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.certifications.title}</h2>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-3">
          {t.certifications.items.map((cert, i) => (
            <motion.div
              key={i}
              className="group relative h-[300px] [perspective:1200px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 glass flex flex-col items-center justify-center rounded-[20px] p-7 [backface-visibility:hidden]">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/15 text-accent">
                    <FiAward size={30} />
                  </div>
                  <h3 className="mb-2 text-center text-lg font-bold text-white">{cert.title}</h3>
                  <p className="mb-4 text-sm font-medium text-accent-2">{cert.org} · {cert.year}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white/40">
                    <FiChevronsRight size={14} /> {t.certifications.flip}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center rounded-[20px] border border-accent/40 bg-gradient-to-br from-accent/15 to-accent-2/15 p-7 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="mb-4 font-terminal text-xs text-emerald-400">STATUS: NOMINAL</span>
                  <h3 className="mb-3 text-lg font-bold text-white">{cert.title}</h3>
                  <p className="text-sm leading-relaxed text-white/75">{cert.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
