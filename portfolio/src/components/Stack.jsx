import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const deviconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const iconPaths = {
  react: `${deviconBase}/react/react-original.svg`,
  nextjs: `${deviconBase}/nextjs/nextjs-original.svg`,
  typescript: `${deviconBase}/typescript/typescript-original.svg`,
  angular: `${deviconBase}/angularjs/angularjs-original.svg`,
  nodejs: `${deviconBase}/nodejs/nodejs-original.svg`,
  nestjs: `${deviconBase}/nestjs/nestjs-original.svg`,
  express: `${deviconBase}/express/express-original.svg`,
  python: `${deviconBase}/python/python-original.svg`,
  mongodb: `${deviconBase}/mongodb/mongodb-original.svg`,
  postgresql: `${deviconBase}/postgresql/postgresql-original.svg`,
  mysql: `${deviconBase}/mysql/mysql-original.svg`,
  microsoftsqlserver: `${deviconBase}/microsoftsqlserver/microsoftsqlserver-original.svg`,
  git: `${deviconBase}/git/git-original.svg`,
  github: `${deviconBase}/github/github-original.svg`,
  docker: `${deviconBase}/docker/docker-original.svg`,
  postman: `${deviconBase}/postman/postman-original.svg`,
  figma: `${deviconBase}/figma/figma-original.svg`,
  tailwindcss: `${deviconBase}/tailwindcss/tailwindcss-original.svg`,
}

const labelMap = {
  react: 'React',
  nextjs: 'Next.js',
  typescript: 'TypeScript',
  angular: 'Angular',
  nodejs: 'Node.js',
  nestjs: 'NestJS',
  express: 'Express',
  python: 'Python',
  mongodb: 'MongoDB',
  postgresql: 'PostgreSQL',
  mysql: 'MySQL',
  microsoftsqlserver: 'SQL Server',
  git: 'Git',
  github: 'GitHub',
  docker: 'Docker',
  postman: 'Postman',
  figma: 'Figma',
  tailwindcss: 'Tailwind CSS',
}

export default function Stack() {
  const { t } = useLanguage()

  return (
    <section id="stack" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.stack.eyebrow}</span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">{t.stack.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">{t.stack.subtitle}</p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2">
          {t.stack.groups.map((group, gi) => (
            <motion.div
              key={gi}
              className="glass rounded-[20px] p-7 transition-all hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(167,139,250,0.12)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-2" />
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">{group.label}</h3>
              </div>

              <div className="flex flex-wrap gap-3.5">
                {group.items.map((iconKey, i) => (
                  <motion.div
                    key={iconKey}
                    title={labelMap[iconKey]}
                    className="group flex h-20 w-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05]"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <img
                      src={iconPaths[iconKey]}
                      alt={labelMap[iconKey]}
                      loading="lazy"
                      className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
                    />
                    <span className="text-[0.65rem] font-medium text-white/50 group-hover:text-white/80">{labelMap[iconKey]}</span>
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
