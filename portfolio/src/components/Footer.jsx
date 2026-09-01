import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-1" />
      <div className="footer-glow footer-glow-2" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-label">Localisation</span>
            <div className="footer-address">
              <FiMapPin size={18} className="footer-addr-icon" />
              <div>
                <p className="footer-addr-line">Fianarantsoa</p>
                <p className="footer-addr-sub">Madagascar</p>
              </div>
            </div>
          </div>

          <div className="footer-col footer-col-center">
            <span className="footer-label">Infos</span>
            <p className="footer-info">
              Portfolio personnel de HERINIRINA Sitrakiniaina Fi'tia.
              Développeur & entrepreneur passionné.
            </p>
            <p className="footer-tech">
              Technologies : <span className="footer-chip">React</span> <span className="footer-chip">Vite</span>
            </p>
          </div>

          <div className="footer-col footer-col-social">
            <span className="footer-label">Suivez-moi</span>
            <div className="footer-socials">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub"><FiGithub size={18} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook"><FaFacebookF size={18} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="WhatsApp"><FaWhatsapp size={18} /></a>
              <a href="mailto:herinirinafitia@gmail.com" className="footer-social" aria-label="Email"><FiMail size={18} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; {year} Fi'tia Portfolio. Tous droits réservés.</p>
          <p className="footer-made">
            Fait avec <FiHeart size={14} className="heart-icon" /> au <span className="flag">🇲🇬</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
