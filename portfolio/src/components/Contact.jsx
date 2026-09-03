import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiMapPin } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
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
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  const actions = [
    { icon: <FiMail size={20} />, label: t.contact.email, href: `mailto:${t.contact.emailValue}`, external: true },
    { icon: <FiGithub size={20} />, label: t.contact.github, href: t.contact.githubValue, external: true },
    { icon: <FiLinkedin size={20} />, label: t.contact.linkedin, href: t.contact.linkedinValue, external: true },
  ]

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.contact.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.contact.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">{t.contact.subtitle}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-xs font-semibold text-emerald-400">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400" />
            {t.chatbot.status}
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-[24px] p-7 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white/70">
                <FiMapPin size={18} className="text-accent" />
                <span className="text-sm">{t.contact.location}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <FiMail size={18} className="text-accent" />
                <a href={`mailto:${t.contact.emailValue}`} className="text-sm transition-colors hover:text-accent">{t.contact.emailValue}</a>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {actions.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    target={a.external ? '_blank' : undefined}
                    rel={a.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/10"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">{a.icon}</span>
                    {a.label}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" type="text" placeholder={t.contact.namePlaceholder} value={formData.name} onChange={handleChange} required
                  className="w-full rounded-xl border border-white/10 bg-[#0a0a12] px-4 py-3.5 text-sm text-white placeholder-white/30 transition-all focus:border-accent/60 focus:outline-none focus:ring-[3px] focus:ring-accent/15"
                />
                <input name="email" type="email" placeholder={t.contact.emailPlaceholder} value={formData.email} onChange={handleChange} required
                  className="w-full rounded-xl border border-white/10 bg-[#0a0a12] px-4 py-3.5 text-sm text-white placeholder-white/30 transition-all focus:border-accent/60 focus:outline-none focus:ring-[3px] focus:ring-accent/15"
                />
              </div>
              <textarea name="message" rows="5" placeholder={t.contact.messagePlaceholder} value={formData.message} onChange={handleChange} required
                className="w-full resize-y rounded-xl border border-white/10 bg-[#0a0a12] px-4 py-3.5 text-sm text-white placeholder-white/30 transition-all focus:border-accent/60 focus:outline-none focus:ring-[3px] focus:ring-accent/15"
              />

              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3.5 text-sm font-medium text-emerald-400"
                >
                  <FiCheckCircle size={18} />
                  {t.chatbot.answers.default}
                </motion.div>
              )}

              <button type="submit" disabled={status === 'sending'} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 py-4 text-sm font-bold text-[#0a0a12] shadow-[0_10px_30px_rgba(167,139,250,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(167,139,250,0.5)] disabled:cursor-not-allowed disabled:opacity-70">
                {status === 'sending' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0a0a12]/30 border-t-[#0a0a12]" />
                    ...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    {t.contact.send}
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
