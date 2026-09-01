import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

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
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Me Contacter</span>
          <h2 className="section-title">Contactez-moi</h2>
          <div className="section-underline" />
          <p className="section-subtitle">
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="contact-status-row">
              <span className="status-item">
                <span className="status-dot online" />
                En ligne
              </span>
              <span className="status-item quick">
                <span className="status-dot" />
                Réponse rapide
              </span>
            </div>

            <h3 className="contact-heading">Parlons ensemble</h3>
            <p className="contact-text">
              Je suis toujours ouvert à de nouvelles opportunités et collaborations.
              Que ce soit pour un projet, une question ou simplement pour discuter,
              n'hésitez pas à me contacter.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><FiMail size={20} /></div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">herinirinafitia@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FiPhone size={20} /></div>
                <div>
                  <span className="contact-label">Téléphone</span>
                  <span className="contact-value">+261 34 25 091 34</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FiMapPin size={20} /></div>
                <div>
                  <span className="contact-label">Localisation</span>
                  <span className="contact-value">Fianarantsoa, Madagascar</span>
                </div>
              </div>
            </div>

            <div className="contact-trust">
              <span>Données sécurisées</span>
              <span className="trust-dot">•</span>
              <span>Réponse rapide</span>
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
            <div className="form-card">
              <h4 className="form-card-title">Informations personnelles</h4>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Votre Nom <span className="required">*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Entrez votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Votre Email <span className="required">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="Entrez votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-card">
              <h4 className="form-card-title">Votre message</h4>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Votre Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Écrivez votre message ici..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {status === 'sent' && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FiCheckCircle size={18} />
                Message envoyé ! Je vous répondrai dans les plus brefs délais.
              </motion.div>
            )}

            <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <><span className="spinner" /> Envoi en cours...</>
              ) : (
                <><FiSend size={18} /> Envoyer le message</>
              )}
            </button>

            <div className="form-trust">
              <span>Données sécurisées</span>
              <span className="trust-dot">•</span>
              <span>Réponse rapide</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
