import { motion } from 'framer-motion'
import { FiCpu, FiArrowUpRight, FiTerminal, FiZap } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

const icons = [FiCpu, FiTerminal, FiZap]

export default function AIInnovation() {
  const { t } = useLanguage()

  return (
    <section id="ai" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/10 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.ai.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.ai.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">{t.ai.subtitle}</p>
        </motion.div>

        <motion.div
          className="glass rounded-[24px] p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid gap-6 sm:grid-cols-3">
            {t.ai.items.map((item, i) => {
              const Icon = icons[i]
              return (
                <div key={item} className="group flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-2/40">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-2/15 text-accent-2 transition-all group-hover:scale-110">
                    <Icon size={26} />
                  </span>
                  <span className="font-semibold text-white">{item}</span>
                </div>
              )
            })}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-white/70">{t.ai.description}</p>

          <div className="mt-8 text-center">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-8 py-3.5 text-sm font-semibold text-[#0a0a12] shadow-[0_10px_30px_rgba(167,139,250,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(167,139,250,0.5)]">
              {t.ai.cta}
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
