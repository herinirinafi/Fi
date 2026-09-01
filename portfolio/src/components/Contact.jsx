import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Me Contacter</span>
          <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">Contactez-moi</h2>
          <div className="section-underline" />
          <p className="mt-4 text-white/60">N'hésitez pas à me contacter pour discuter de vos projets</p>
        </motion.div>

        <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            className="glass flex flex-col gap-6 rounded-[20px] p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-5">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/60">
                <span className="h-2.5 w-2.5 animate-pulse-dot rounded-full bg-emerald-400" />
                En ligne
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/60">
                <span className="h-2.5 w-2.5 animate-pulse-dot rounded-full bg-blue-400" />
                Réponse rapide
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">Parlons ensemble</h3>
            <p className="leading-relaxed text-white/70">
              Je suis toujours ouvert à de nouvelles opportunités et collaborations. Que ce soit pour un
              projet, une question ou simplement pour discuter, n'hésitez pas à me contacter.
            </p>

            <div className="flex flex-col gap-3.5">
              {[
                { icon: <FiMail size={20} />, label: 'Email', value: 'herinirinafitia@gmail.com' },
                { icon: <FiPhone size={20} />, label: 'Téléphone', value: '+261 34 25 091 34' },
                { icon: <FiMapPin size={20} />, label: 'Localisation', value: 'Fianarantsoa, Madagascar' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors hover:border-blue-400/40">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">{item.icon}</span>
                  <div>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-widest text-white/40">{item.label}</span>
                    <span className="block text-sm font-semibold text-white">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-2 text-xs text-white/40">
              <span>Données sécurisées</span>
              <span className="text-blue-400">•</span>
              <span>Réponse rapide</span>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="glass rounded-[20px] p-7">
              <h4 className="mb-5 border-b border-white/10 pb-4 text-lg font-bold text-white">Informations personnelles</h4>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">Votre Nom <span className="text-red-400">*</span></label>
                <input id="name" name="name" type="text" placeholder="Entrez votre nom" value={formData.name} onChange={handleChange} required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 transition-all focus:border-blue-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-[3px] focus:ring-blue-500/15"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">Votre Email <span className="text-red-400">*</span></label>
                <input id="email" name="email" type="email" placeholder="Entrez votre email" value={formData.email} onChange={handleChange} required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 transition-all focus:border-blue-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-[3px] focus:ring-blue-500/15"
                />
              </div>
            </div>

            <div className="glass rounded-[20px] p-7">
              <h4 className="mb-5 border-b border-white/10 pb-4 text-lg font-bold text-white">Votre message</h4>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">Votre Message <span className="text-red-400">*</span></label>
              <textarea id="message" name="message" rows="5" placeholder="Écrivez votre message ici..." value={formData.message} onChange={handleChange} required
                className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 transition-all focus:border-blue-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-[3px] focus:ring-blue-500/15"
              />
            </div>

            {status === 'sent' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3.5 text-sm font-medium text-emerald-400"
              >
                <FiCheckCircle size={18} />
                Message envoyé ! Je vous répondrai dans les plus brefs délais.
              </motion.div>
            )}

            <button type="submit" disabled={status === 'sending'} className="w-full rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)] disabled:cursor-not-allowed disabled:opacity-70">
              {status === 'sending' ? (
                <span className="inline-flex items-center gap-2.5">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Envoi en cours...
                </span>
              ) : (
                <span className="inline-flex items-center gap-2.5"><FiSend size={18} /> Envoyer le message</span>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-white/40">
              <span>Données sécurisées</span>
              <span className="text-blue-400">•</span>
              <span>Réponse rapide</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
