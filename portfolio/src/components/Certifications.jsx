import { motion } from 'framer-motion'
import { FiAward, FiHexagon, FiLayers, FiCpu, FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

const frontIcons = [FiAward, FiHexagon, FiLayers, FiCpu]

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
          <h2 className="text-4xl font-bold text-ink md:text-5xl">{t.certifications.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">{t.certifications.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.certifications.items.map((item, i) => {
            const CardIcon = frontIcons[i]
            return (
              <motion.div
                key={i}
                className="group h-72 [perspective:1200px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.4,0.2,0.2,1)] [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]">
                  <div className="glass absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[20px] p-6 [backface-visibility:hidden]">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/15 text-accent transition-all group-hover:scale-110">
                      <CardIcon size={30} />
                    </span>
                    <h3 className="text-center text-lg font-bold text-ink">{item.title}</h3>
                    <p className="text-center text-xs uppercase tracking-widest text-accent">{item.org}</p>
                    <span className="mt-1 flex items-center gap-1 text-xs text-muted">
                      Hover <FiArrowRight size={12} />
                    </span>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[20px] border border-accent/40 bg-bg p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <span className="text-accent">
                      <FiAward size={22} />
                    </span>
                    <h3 className="text-center text-base font-bold text-ink">{item.title}</h3>
                    <p className="text-center text-sm leading-relaxed text-ink/65">{item.desc}</p>
                    <span className="mt-1 inline-block rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-[11px] font-semibold text-accent">
                      {item.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
