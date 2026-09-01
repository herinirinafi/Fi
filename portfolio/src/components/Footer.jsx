import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiHeart } from 'react-icons/fi'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: <FaFacebookF size={18} />, href: '#', label: 'Facebook' },
    { icon: <FaWhatsapp size={18} />, href: '#', label: 'WhatsApp' },
    { icon: <FiMail size={18} />, href: 'mailto:herinirinafitia@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950 px-6 pb-7 pt-16">
      <div className="pointer-events-none absolute -top-[200px] left-[5%] h-[400px] w-[400px] rounded-full bg-blue-500/25 blur-[100px]" />
      <div className="pointer-events-none absolute -top-[180px] right-[5%] h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 pb-10 md:grid-cols-[1fr_1.4fr_1fr]">
        <div>
          <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-widest text-white/40">Localisation</span>
          <div className="flex items-center gap-3.5">
            <FiMapPin size={20} className="text-blue-400" />
            <div>
              <p className="text-sm font-semibold text-white">Fianarantsoa</p>
              <p className="text-xs text-white/60">Madagascar</p>
            </div>
          </div>
        </div>

        <div className="md:text-center">
          <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-widest text-white/40 md:text-center">Infos</span>
          <p className="mb-4 text-sm leading-relaxed text-white/60">
            Portfolio personnel de HERINIRINA Sitrakiniaina Fi'tia. Développeur & entrepreneur passionné.
          </p>
          <p className="text-xs text-white/40">
            Technologies :
            <span className="ml-2 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-xs text-blue-300">React</span>
            <span className="ml-2 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-xs text-blue-300">Vite</span>
            <span className="ml-2 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-xs text-blue-300">Tailwind</span>
          </p>
        </div>

        <div>
          <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-widest text-white/40 md:text-right">Suivez-moi</span>
          <div className="flex flex-wrap gap-2.5 md:justify-end">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-1 hover:border-blue-400/50 hover:text-white">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
        <p className="text-xs text-white/40">&copy; {year} Fi'tia Portfolio. Tous droits réservés.</p>
        <p className="inline-flex items-center gap-1.5 text-xs text-white/40">
          Fait avec <FiHeart size={14} className="text-red-400" /> au <span className="text-sm">🇲🇬</span>
        </p>
      </div>
    </footer>
  )
}
