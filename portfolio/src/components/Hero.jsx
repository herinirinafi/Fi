import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'
import profileImg from '../assets/profile.png'

const techPills = [
  { name: 'React', color: '#22d3ee' },
  { name: 'Node.js', color: '#22c55e' },
  { name: 'Python', color: '#a78bfa' },
]

export default function Hero() {
  const { t } = useLanguage()

  const handleScrollProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 md:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-80px] top-[-120px] h-[480px] w-[480px] rounded-full bg-accent/30 blur-[90px]" />
        <div className="absolute bottom-[-120px] left-[-60px] h-[400px] w-[400px] rounded-full bg-accent-2/25 blur-[90px]" />
        <div className="absolute left-[35%] top-[30%] h-[300px] w-[300px] rounded-full bg-accent/20 blur-[90px]" />
        {Array.from({ length: 45 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-white/70"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: 'twinkle 3s ease-in-out infinite',
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
          <div className="absolute h-[380px] w-[380px] animate-spin-slower rounded-full border-2 border-dashed border-accent/40" />
          <div className="absolute h-[330px] w-[330px] animate-spin-slow rounded-full border-2 border-dashed border-accent-2/30" />

          <div className="absolute h-[300px] w-[300px] overflow-hidden rounded-full bg-gradient-to-br from-accent/20 to-accent-2/20 blur-md" />

          <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-[3px] border-white/10 shadow-[0_0_60px_rgba(167,139,250,0.25)]">
            <img src={profileImg} alt="HERINIRINA Sitrakiniaina Fi'tia" className="h-full w-full object-cover" />
            <span className="absolute right-[-30px] top-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-semibold text-accent backdrop-blur-md">
              Full Stack
            </span>
            <span className="absolute bottom-3 left-[-30px] rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-semibold text-accent-2 backdrop-blur-md">
              Developer
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
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400" />
            {t.hero.hello}
          </motion.div>

          <motion.h1
            className="flex flex-col font-display leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <span className="text-5xl tracking-tight text-white md:text-7xl">{t.hero.firstName}</span>
            <span className="mt-1.5 text-3xl text-gradient md:text-5xl">{t.hero.lastName}</span>
          </motion.h1>

          <motion.div
            className="text-xl font-semibold text-accent-2 md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {t.hero.role}
          </motion.div>

          <motion.div
            className="font-terminal text-sm text-accent/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-emerald-400">$</span> whoami <span className="text-white/30">// {t.hero.whoami}</span>
          </motion.div>

          <motion.p
            className="max-w-[540px] text-lg text-white/75"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            {t.hero.bio}
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
            <a href="#projects" onClick={handleScrollProjects} className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-8 py-3.5 text-sm font-semibold text-[#0a0a12] shadow-[0_10px_30px_rgba(167,139,250,0.35)] transition-all hover:-translate-y-1 hover:brightness-105 hover:shadow-[0_15px_40px_rgba(167,139,250,0.5)]">
              {t.hero.ctaProjects}
            </a>
            <a href="/src/assets/Sitrakiniaina.pdf" download className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-accent/40 hover:bg-white/10">
              <FiDownload size={18} />
              {t.hero.ctaCv}
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              {[
                { icon: <FiGithub size={20} />, href: 'https://github.com/', label: 'GitHub' },
                { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-white hover:shadow-[0_8px_25px_rgba(167,139,250,0.3)]">
                  {s.icon}
                </a>
              ))}
            </div>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-400">
              <span className="mr-1.5 h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400" />
              {t.hero.available}
            </span>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 flex max-w-6xl justify-center">
        <a href="#skills" onClick={(e) => { e.preventDefault(); document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }) }} className="flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-accent">
          <span className="text-xs font-semibold uppercase tracking-widest">{t.hero.scroll}</span>
          <FiArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
