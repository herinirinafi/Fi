import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import project1 from '../assets/Image1.png'
import project6 from '../assets/Image6.png'
import project4 from '../assets/Image4.png'
import project7 from '../assets/Image7.png'
import project5 from '../assets/Image5.png'
import zama1 from '../assets/ZamaService1.png'

const images = [project1, project6, project4, project7, project5, zama1]

export default function Design() {
  const { t } = useLanguage()

  return (
    <section id="design" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.design.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.design.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">{t.design.subtitle}</p>
        </motion.div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-[20px] border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            >
              <img
                src={img}
                alt={`Design ${i + 1}`}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-4 text-xs font-semibold uppercase tracking-widest text-accent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {t.design.title} {i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
