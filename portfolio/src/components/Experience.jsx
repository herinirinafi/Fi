import { motion } from 'framer-motion'
import { FiBriefcase, FiUsers, FiAward, FiMessageCircle } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

const icons = [FiBriefcase, FiUsers, FiAward, FiMessageCircle]

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.experience.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.experience.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">{t.experience.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.experience.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                className="group glass flex items-start gap-5 rounded-[20px] p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(167,139,250,0.12)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
              >
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/15 text-accent transition-all group-hover:scale-110 group-hover:bg-accent/25">
                  <Icon size={26} />
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
