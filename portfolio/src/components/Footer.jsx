import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiHeart } from 'react-icons/fi'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const socials = [
    { icon: <FiGithub size={18} />, href: t.contact.githubValue, label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: t.contact.linkedinValue, label: 'LinkedIn' },
    { icon: <FaFacebookF size={18} />, href: '#', label: 'Facebook' },
    { icon: <FaWhatsapp size={18} />, href: '#', label: 'WhatsApp' },
    { icon: <FiMail size={18} />, href: `mailto:${t.contact.emailValue}`, label: 'Email' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a12] px-6 pb-7 pt-16">
      <div className="pointer-events-none absolute -top-[200px] left-[5%] h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px]" />
      <div className="pointer-events-none absolute -top-[180px] right-[5%] h-[350px] w-[350px] rounded-full bg-accent-2/15 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 pb-10 md:grid-cols-[1fr_1.4fr_1fr]">
        <div>
          <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-widest text-white/40">{t.footer.location}</span>
          <div className="flex items-center gap-3.5">
            <FiMapPin size={20} className="text-accent" />
            <div>
              <p className="text-sm font-semibold text-white">Fianarantsoa</p>
              <p className="text-xs text-white/60">Madagascar</p>
            </div>
          </div>
        </div>

        <div className="md:text-center">
          <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-widest text-white/40 md:text-center">FITIA</span>
          <p className="mb-4 text-sm leading-relaxed text-white/60">{t.footer.tagline}</p>
          <p className="text-xs text-white/40">
            {t.footer.techs} :
            <span className="ml-2 inline-block rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs text-accent">React</span>
            <span className="ml-2 inline-block rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs text-accent">Vite</span>
            <span className="ml-2 inline-block rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs text-accent">Tailwind</span>
          </p>
        </div>

        <div>
          <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-widest text-white/40 md:text-right">{t.footer.follow}</span>
          <div className="flex flex-wrap gap-2.5 md:justify-end">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-white">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
        <p className="text-xs text-white/40">&copy; {year} Fi'tia Portfolio. {t.footer.rights}</p>
        <p className="inline-flex items-center gap-1.5 text-xs text-white/40">
          {t.footer.made} <FiHeart size={14} className="text-accent" /> 🇲🇬
        </p>
      </div>
    </footer>
  )
}
