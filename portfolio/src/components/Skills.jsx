import { motion } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    title: 'Développement Frontend',
    techs: 5,
    gradient: 'linear-gradient(135deg, #22d3ee, #60a5fa)',
    color: '#22d3ee',
    skills: ['React.js', 'Angular', 'JavaScript', 'Tailwind CSS', 'Figma'],
  },
  {
    title: 'Backend & API',
    techs: 5,
    gradient: 'linear-gradient(135deg, #34d399, #22c55e)',
    color: '#34d399',
    skills: ['Node.js', 'ASP.NET Core', 'NestJS', 'REST API', 'Express.js'],
  },
  {
    title: 'Systèmes & Réseaux',
    techs: 5,
    gradient: 'linear-gradient(135deg, #818cf8, #6366f1)',
    color: '#818cf8',
    skills: ['Windows / Linux', 'TCP/IP & VPN', 'Cybersécurité', 'Cloud & Virtualisation', 'PostgreSQL'],
  },
  {
    title: 'Bases de Données',
    techs: 4,
    gradient: 'linear-gradient(135deg, #fbbf24, #fb923c)',
    color: '#fbbf24',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'],
  },
  {
    title: 'Outils & Design',
    techs: 5,
    gradient: 'linear-gradient(135deg, #a8a8a8, #6b7280)',
    color: '#a8a8a8',
    skills: ['Pack Office', 'Photoshop', 'Illustrator', 'Trello', 'Canva'],
  },
  {
    title: 'Gestion & Soft Skills',
    techs: 4,
    gradient: 'linear-gradient(135deg, #f472b6, #e879f9)',
    color: '#f472b6',
    skills: ['Management', 'Communication', 'Leadership', 'Travail d\'équipe'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Compétences Techniques</span>
          <h2 className="section-title">Mes Compétences</h2>
          <div className="section-underline" />
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <div className="category-header" style={{ backgroundImage: category.gradient }}>
                <div className="category-dot" style={{ background: '#ffffff' }} />
                <h3 className="category-title">{category.title}</h3>
                <span className="category-count">{category.techs} techs</span>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + i * 0.07, duration: 0.4 }}
                  >
                    <span className="skill-dot" style={{ background: category.color }} />
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
