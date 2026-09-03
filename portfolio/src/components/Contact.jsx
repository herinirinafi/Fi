import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMail, FiPhone, FiMapPin, FiCheckCircle } from 'react-icons/fi'
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
    }, 1200)
  }

  const contactItems = [
    { icon: <FiMail size={18} />, label: 'EMAIL', value: t.contact.emailValue },
    { icon: <FiPhone size={18} />, label: 'TEL', value: t.contact.phoneValue },
    { icon: <FiMapPin size={18} />, label: 'LOC', value: t.contact.location },
  ]

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
          <span className="section-eyebrow">{t.contact.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.contact.title}</h2>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-[20px] border border-white/10 bg-[#12121d]/90 shadow-[0_24px_60px_rgba(0,0,0,0.4)] backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-terminal text-xs text-white/50">{t.contact.terminalTitle}</span>
            <span className="ml-auto inline-flex items-center gap-1.5 font-terminal text-xs text-emerald-400">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400" />
              {t.contact.online}
            </span>
          </div>

          <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1fr_1.3fr]">
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-[#0a0a12] p-5">
                <div className="mb-4 flex flex-wrap gap-3 font-terminal text-[0.7rem] text-white/50">
                  <span className="text-emerald-400">{t.contact.status}</span>
                  {[
                    { k: t.contact.alt, v: '5300' },
                    { k: t.contact.vel, v: '255' },
                    { k: t.contact.o2, v: '21%' },
                    { k: t.contact.pwr, v: 'PRO' },
                  ].map((s) => (
                    <span key={s.k} className="rounded-full border border-white/10 px-2.5 py-1">
                      {s.k}: <span className="text-accent-2">{s.v}</span>
                    </span>
                  ))}
                </div>
                <p className="font-terminal text-sm text-white/70">{t.contact.status}: <span className="text-accent-2">ONLINE</span></p>
              </div>

              <div className="flex flex-col gap-3">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors hover:border-accent/40">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">{item.icon}</span>
                    <div>
                      <span className="block font-terminal text-[0.65rem] uppercase tracking-widest text-white/40">{item.label}</span>
                      <span className="block text-sm font-semibold text-white">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-2 block font-terminal text-xs text-accent-2">{t.contact.name}</label>
                <input id="name" name="name" type="text" placeholder={t.contact.placeholderName} value={formData.name} onChange={handleChange} required
                  className="w-full rounded-xl border border-white/10 bg-[#0a0a12] px-4 py-3.5 font-terminal text-sm text-white placeholder-white/30 transition-all focus:border-accent/60 focus:outline-none focus:ring-[3px] focus:ring-accent/15"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-terminal text-xs text-accent-2">{t.contact.email}</label>
                <input id="email" name="email" type="email" placeholder={t.contact.placeholderEmail} value={formData.email} onChange={handleChange} required
                  className="w-full rounded-xl border border-white/10 bg-[#0a0a12] px-4 py-3.5 font-terminal text-sm text-white placeholder-white/30 transition-all focus:border-accent/60 focus:outline-none focus:ring-[3px] focus:ring-accent/15"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-terminal text-xs text-accent-2">{t.contact.message}</label>
                <textarea id="message" name="message" rows="5" placeholder={t.contact.placeholderMessage} value={formData.message} onChange={handleChange} required
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#0a0a12] px-4 py-3.5 font-terminal text-sm text-white placeholder-white/30 transition-all focus:border-accent/60 focus:outline-none focus:ring-[3px] focus:ring-accent/15"
                />
              </div>

              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3.5 text-sm font-medium text-emerald-400"
                >
                  <FiCheckCircle size={18} />
                  <span className="font-terminal">{t.contact.sent}</span>
                </motion.div>
              )}

              <button type="submit" disabled={status === 'sending'} className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-2 py-4 font-terminal text-sm font-bold text-[#0a0a12] shadow-[0_10px_30px_rgba(167,139,250,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(167,139,250,0.5)] disabled:cursor-not-allowed disabled:opacity-70">
                {status === 'sending' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0a0a12]/30 border-t-[#0a0a12]" />
                    {t.contact.sending}
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
