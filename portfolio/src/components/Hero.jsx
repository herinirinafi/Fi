import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import profileImg from '../assets/profile.png'

const techPills = [
  { name: 'React', color: '#22d3ee' },
  { name: 'Node.js', color: '#22c55e' },
  { name: 'Python', color: '#3b82f6' },
]

export default function Hero() {
  const handleScrollProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-80px] top-[-120px] h-[480px] w-[480px] rounded-full bg-blue-500/30 blur-[90px]" />
        <div className="absolute bottom-[-120px] left-[-60px] h-[400px] w-[400px] rounded-full bg-purple-500/30 blur-[90px]" />
        <div className="absolute left-[40%] top-[40%] h-[300px] w-[300px] rounded-full bg-indigo-500/25 blur-[90px]" />
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-white animate-twinkle"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 10) * 0.6}s`,
              animationDuration: `${2 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="mx-auto flex w-full max-w-[420px] items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute h-[380px] w-[380px] animate-spin-slower rounded-full border-2 border-dashed border-blue-400/40" />
          <div className="absolute h-[330px] w-[330px] animate-spin-slow rounded-full border-2 border-dashed border-purple-400/30" />
          <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-[3px] border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.25)]">
            <img src={profileImg} alt="HERINIRINA Sitrakiniaina Fi'tia" className="h-full w-full object-cover" />
            <span className="absolute right-[-30px] top-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-semibold text-blue-300 backdrop-blur-md">
              Full Stack
            </span>
            <span className="absolute bottom-3 left-[-30px] rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-semibold text-purple-300 backdrop-blur-md">
              Junior Dev
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col items-start gap-6">
          <motion.div
            className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-blue-400" />
            Bonjour, je suis
          </motion.div>

          <motion.h1
            className="flex flex-col font-serif font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <span className="text-5xl tracking-tight text-white md:text-7xl">HERINIRINA</span>
            <span className="mt-1.5 text-3xl text-gradient md:text-5xl">Sitrakiniaina Fi'tia</span>
          </motion.h1>

          <motion.div
            className="text-xl font-semibold text-gradient-accent md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Développeur & Entrepreneur
          </motion.div>

          <motion.p
            className="max-w-[540px] text-lg text-white/75"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            Étudiant en Master Informatique à l'ENI Fianarantsoa — Passionné par la gestion des
            systèmes, le développement web et le management d'entreprise.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            {techPills.map((pill) => (
              <span
                key={pill.name}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
                style={{ borderColor: `${pill.color}55`, background: `${pill.color}1a` }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: pill.color }} />
                {pill.name}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <a href="#projects" onClick={handleScrollProjects} className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition-all hover:-translate-y-1 hover:brightness-105 hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)]">
              Voir mes projets
            </a>
            <a href="/src/assets/Sitrakiniaina.pdf" download className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-blue-400/40 hover:bg-white/10">
              <FiDownload size={18} />
              Télécharger mon CV
            </a>
          </motion.div>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {[
              { icon: <FiGithub size={20} />, href: 'https://github.com/', label: 'GitHub' },
              { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-1 hover:border-blue-400/50 hover:text-white hover:shadow-[0_8px_25px_rgba(59,130,246,0.3)]">
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
