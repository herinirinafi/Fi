import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            N'hesitez pas a me contacter pour discuter de vos projets
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="contact-heading">Parlons ensemble</h3>
            <p className="contact-text">
              Je suis toujours ouvert a de nouvelles opportunites et collaborations.
              Que ce soit pour un projet, une question ou simplement pour discuter,
              n'hesitez pas a me contacter.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMail size={20} />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">herinirinafitia@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FiPhone size={20} />
                </div>
                <div>
                  <span className="contact-label">Telephone</span>
                  <span className="contact-value">+261 34 25 091 34</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <span className="contact-label">Localisation</span>
                  <span className="contact-value">Fianarantsoa, Madagascar</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="name">Nom</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Votre message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={`btn btn-primary form-submit ${submitted ? 'submitted' : ''}`}>
              {submitted ? (
                <>Envoye !</>
              ) : (
                <><FiSend size={18} /> Envoyer le message</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
