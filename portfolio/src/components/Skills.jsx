import { motion } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    title: 'Developpement',
    color: '#6c63ff',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Angular', level: 75 },
      { name: 'ASP.NET Core', level: 70 },
      { name: 'NestJS', level: 70 },
      { name: 'Python', level: 80 },
    ],
  },
  {
    title: 'Systemes & Reseaux',
    color: '#22c55e',
    skills: [
      { name: 'Windows / Linux', level: 90 },
      { name: 'TCP/IP & VPN', level: 80 },
      { name: 'Cybersecurite', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Cloud & Virtualisation', level: 70 },
    ],
  },
  {
    title: 'Outils & Design',
    color: '#f59e0b',
    skills: [
      { name: 'Pack Office', level: 90 },
      { name: 'Photoshop', level: 75 },
      { name: 'Illustrator', level: 70 },
      { name: 'Trello', level: 85 },
      { name: 'Canva', level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Competences</h2>
          <p className="section-subtitle">
            Les technologies et outils que je maitrise
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.5 }}
            >
              <div className="category-header">
                <div className="category-dot" style={{ background: category.color }} />
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.15 + i * 0.08, duration: 0.4 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-fill"
                        style={{ background: category.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
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
