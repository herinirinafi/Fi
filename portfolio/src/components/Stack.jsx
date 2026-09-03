import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCode, FiServer, FiCpu, FiTool } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

const stackData = [
  {
    icon: FiCode,
    skills: ['React.js', 'Angular', 'JavaScript', 'Tailwind CSS', 'Figma', 'HTML5', 'CSS3'],
  },
  {
    icon: FiServer,
    skills: ['Node.js', 'ASP.NET Core', 'NestJS', 'Express.js', 'REST API', 'Python'],
  },
  {
    icon: FiCpu,
    skills: ['Windows / Linux', 'TCP/IP & VPN', 'Cybersécurité', 'Cloud & Virtualisation', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    icon: FiTool,
    skills: ['Pack Office', 'Photoshop', 'Illustrator', 'Trello', 'Canva', 'Management', 'Communication'],
  },
]

export default function Stack() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)

  return (
    <section id="stack" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.stack.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.stack.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">{t.stack.subtitle}</p>
        </motion.div>

        <motion.div
          className="mx-auto mb-12 flex max-w-3xl flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {stackData.map((cat, i) => {
            const Icon = cat.icon
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === i
                    ? 'bg-gradient-to-r from-accent to-accent-2 text-[#0a0a12] shadow-[0_6px_20px_rgba(167,139,250,0.3)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Icon size={16} />
                <span>{t.stack.tabs[i]}</span>
              </button>
            )
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {stackData[active].skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group glass flex items-center gap-3 rounded-2xl px-5 py-4 transition-all hover:border-accent/40 hover:bg-white/[0.06]"
              >
                <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2 transition-transform group-hover:scale-125" />
                <span className="text-sm font-medium text-white/80">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
