import { useLanguage } from '../i18n/LanguageContext'
import { FiGlobe } from 'react-icons/fi'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      <FiGlobe size={14} className="ml-1 text-white/50" />
      {['fr', 'en'].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`rounded-full px-2 py-1 text-[0.7rem] font-bold uppercase transition-all ${
            lang === code
              ? 'bg-gradient-to-r from-accent to-accent-2 text-[#0a0a12] shadow-[0_0_15px_rgba(167,139,250,0.5)]'
              : 'text-white/60 hover:text-white'
          }`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
