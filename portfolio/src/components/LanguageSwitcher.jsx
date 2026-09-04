import { useLanguage } from '../i18n/LanguageContext'
import { FiGlobe } from 'react-icons/fi'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-soft p-1">
      <FiGlobe size={14} className="ml-1 text-muted" />
      {['fr', 'en'].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`rounded-full px-2 py-1 text-[0.7rem] font-bold uppercase transition-all ${
            lang === code
              ? 'bg-gradient-to-r from-accent to-accent-2 text-accent-contrast shadow-[0_0_15px_rgba(167,139,250,0.5)]'
              : 'text-muted hover:text-ink'
          }`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
