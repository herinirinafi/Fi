import { motion } from 'framer-motion'
import { FiDownload, FiMapPin, FiBookOpen, FiUser } from 'react-icons/fi'
import profileImg from '../assets/profile.png'

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Qui suis-je ?</span>
          <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">À propos de moi</h2>
          <div className="section-underline" />
        </motion.div>

        <div className="grid items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="mx-auto flex w-full max-w-[360px] items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute h-[340px] w-[340px] animate-spin-slow rounded-full border-2 border-dashed border-blue-400/40" />
            <div className="absolute h-[290px] w-[290px] animate-spin-slower rounded-full border-2 border-dashed border-purple-400/30" />
            <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full border-[3px] border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.25)]">
              <img src={profileImg} alt="HERINIRINA Sitrakiniaina Fi'tia" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <blockquote className="rounded-r-xl border-l-4 border-blue-400 bg-blue-500/10 px-6 py-4 font-serif text-lg italic text-white">
              <span className="text-xl text-blue-400 not-italic">"</span>
              L'innovation naît de la passion et de la persévérance.
              <span className="text-xl text-blue-400 not-italic">"</span>
            </blockquote>

            <p className="leading-relaxed text-white/75">
              Je suis <strong className="font-semibold text-white">HERINIRINA Sitrakiniaina Fi'tia</strong>, étudiant en
              1ère année de Master Informatique à l'École Nationale d'Informatique de Fianarantsoa. Passionné par la
              gestion des systèmes informatiques, le développement web et le management d'entreprise.
            </p>
            <p className="leading-relaxed text-white/75">
              J'ai acquis de solides compétences en administration de réseaux, sécurité informatique et support
              utilisateurs. Mon double parcours en informatique et en management me permet d'avoir une vision complète
              des projets digitaux. Actuellement Responsable Communication au CODEL et impliqué dans plusieurs projets
              de développement, je crée des solutions innovantes comme DataMap et des applications de gestion
              multiservices.
            </p>

            <div className="flex flex-col gap-3.5">
              {[
                { icon: <FiUser size={18} />, label: 'Nationalité', value: 'Malgache' },
                { icon: <FiMapPin size={18} />, label: 'Localisation', value: 'Fianarantsoa, Madagascar' },
                { icon: <FiBookOpen size={18} />, label: 'Formation', value: 'Master Informatique — ENI Fianarantsoa' },
              ].map((card) => (
                <div key={card.label} className="glass flex items-center gap-4 rounded-2xl px-5 py-4 transition-all hover:translate-x-1 hover:border-blue-400/40">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                    {card.icon}
                  </span>
                  <div>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-widest text-white/40">{card.label}</span>
                    <span className="block font-semibold text-white">{card.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="/src/assets/Sitrakiniaina.pdf" download className="mt-1 self-start inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)]">
              <FiDownload size={18} />
              Télécharger mon CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
