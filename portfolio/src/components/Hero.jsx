import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'
import profileImg from '../assets/profile.png'

export default function Hero() {
  const { t, lang } = useLanguage()

  const handleScroll = (id) => (e) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#090c14] px-6 pt-[78px]">
      <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-[1440px] items-center md:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 flex min-h-[520px] flex-col justify-center py-16 md:pl-8 lg:pl-14">
          <motion.div
            className="mb-7 inline-flex w-fit items-center gap-3 text-[13px] font-medium text-white/75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#ff5a36]" />
            {lang === 'fr' ? 'Actuellement occupé' : 'Currently available'}
          </motion.div>

          <motion.h1
            className="flex flex-col font-display leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <span className="max-w-[650px] text-[48px] leading-[0.98] tracking-[-0.045em] text-white md:text-[70px] lg:text-[78px]">
              {lang === 'fr' ? 'Développeur Full Stack basé à Madagascar' : 'Full Stack Developer based in Madagascar'}
            </span>
          </motion.h1>
          <motion.div className="mt-10 flex gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <a href="#projects" onClick={handleScroll('#projects')} className="inline-flex h-12 items-center gap-3 rounded-full bg-[#ff5a36] px-7 text-sm font-bold text-white">
              {t.hero.ctaProjects} <FiArrowRight />
            </a>
            <a href="/src/assets/Sitrakiniaina.pdf" download className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 px-6 text-sm font-semibold text-white/80">
              <FiDownload /> CV
            </a>
          </motion.div>
        </div>

        <motion.div className="relative h-[520px] self-end overflow-hidden md:h-[calc(100vh-78px)]" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_55%,rgba(49,58,75,0.7),transparent_48%)]" />
          <img src={profileImg} alt="Fi'tia HERINIRINA" className="absolute bottom-0 right-[-4%] h-[92%] w-[96%] object-contain object-bottom grayscale-[10%]" />
          <div className="absolute right-6 top-1/2 hidden w-[260px] -translate-y-1/2 rounded-2xl border border-white/10 bg-[#111620]/90 p-5 text-[14px] text-white/80 backdrop-blur-xl lg:block">
            <p>{lang === 'fr' ? 'Une question sur mon parcours ou mes projets ?' : 'A question about my work or projects?'}</p>
            <a href="#contact" onClick={handleScroll('#contact')} className="mt-2 inline-block text-[#ff7661]">
              {lang === 'fr' ? 'Demande-moi' : 'Ask me'} ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
