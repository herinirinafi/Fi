import { motion } from 'framer-motion'

const skillCategories = [
  { title: 'Développement Frontend', techs: 5, gradient: 'from-cyan-400 to-blue-400', color: '#22d3ee', skills: ['React.js', 'Angular', 'JavaScript', 'Tailwind CSS', 'Figma'] },
  { title: 'Backend & API', techs: 5, gradient: 'from-emerald-400 to-green-400', color: '#34d399', skills: ['Node.js', 'ASP.NET Core', 'NestJS', 'REST API', 'Express.js'] },
  { title: 'Systèmes & Réseaux', techs: 5, gradient: 'from-indigo-400 to-blue-500', color: '#818cf8', skills: ['Windows / Linux', 'TCP/IP & VPN', 'Cybersécurité', 'Cloud & Virtualisation', 'PostgreSQL'] },
  { title: 'Bases de Données', techs: 4, gradient: 'from-amber-400 to-orange-400', color: '#fbbf24', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'] },
  { title: 'Outils & Design', techs: 5, gradient: 'from-gray-300 to-gray-500', color: '#a8a8a8', skills: ['Pack Office', 'Photoshop', 'Illustrator', 'Trello', 'Canva'] },
  { title: 'Gestion & Soft Skills', techs: 4, gradient: 'from-pink-400 to-fuchsia-400', color: '#f472b6', skills: ["Management", "Communication", "Leadership", "Travail d'équipe"] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Compétences Techniques</span>
          <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">Mes Compétences</h2>
          <div className="section-underline" />
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              className="glass rounded-[20px] p-6 transition-all hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <div className={`mb-5 flex items-center gap-3 rounded-2xl bg-gradient-to-r ${cat.gradient} px-4 py-3.5 text-white`}>
                <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-white" />
                <h3 className="flex-1 font-bold text-white">{cat.title}</h3>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[0.7rem] font-semibold whitespace-nowrap">{cat.techs} techs</span>
              </div>

              <div className="flex flex-col gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + i * 0.07, duration: 0.4 }}
                  >
                    <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: cat.color }} />
                    <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white hover:text-white">{skill}</span>
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
