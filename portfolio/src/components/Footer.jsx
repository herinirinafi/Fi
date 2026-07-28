import { FiHeart } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          &copy; {year} Sitrakiniaina. Tous droits reserves.
        </p>
        <p className="footer-made">
          Fait avec <FiHeart size={14} className="heart-icon" /> en React
        </p>
      </div>
    </footer>
  )
}
