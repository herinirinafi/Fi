import { motion } from 'framer-motion'
import { FiCode, FiServer, FiCpu, FiUsers } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()
  const icons = [FiCode, FiServer, FiCpu, FiUsers]

  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.skills.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.skills.title}</h2>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {t.skills.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                className="group glass relative overflow-hidden rounded-[20px] p-7 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(167,139,250,0.15)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition-all group-hover:bg-accent/20" />
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/15 text-accent transition-all group-hover:scale-110 group-hover:bg-accent/25">
                  <Icon size={26} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{card.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
