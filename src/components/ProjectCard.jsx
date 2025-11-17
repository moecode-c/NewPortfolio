import { motion } from 'framer-motion'
import { LuExternalLink } from 'react-icons/lu'

const ProjectCard = ({ project, onSelect }) => {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-slateGlow/60 via-midnight/80 to-black p-5 text-left shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon/60"
      whileHover={{ y: -6, boxShadow: '0 25px 60px rgba(0, 255, 170, 0.2)' }}
    >
      <div className="relative overflow-hidden rounded-xl border border-white/10">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-40 w-full object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
          onError={(event) => {
            event.currentTarget.style.opacity = '0.6'
          }}
        />
        <span className="absolute inset-0 bg-gradient-to-tr from-base/60 via-transparent to-neon/10 mix-blend-screen" aria-hidden />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neon/80">Project</p>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        </div>
        <p className="text-sm text-slate-400">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-wider text-cyberGray">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {item}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-xs text-neon">
          Tap to open dossier <LuExternalLink aria-hidden />
        </span>
      </div>
    </motion.button>
  )
}

export default ProjectCard
