import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { LuFilter } from 'react-icons/lu'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const filters = ['All', 'Frontend', 'Fullstack', 'MERN', '3D', 'Other']

const projectCategories = {
  1: ['Fullstack', 'MERN'],
  2: ['Frontend', '3D'],
  3: ['Frontend', 'Other'],
  4: ['Fullstack', 'MERN', '3D'],
  5: ['Frontend', 'Other'],
  6: ['3D', 'Other'],
  7: ['Fullstack', 'MERN'],
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => projectCategories[project.id]?.includes(activeFilter))
  }, [activeFilter])

  return (
    <motion.section
      className="mx-auto max-w-6xl space-y-8 px-6 pb-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
    >
      <header className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-midnight/85 via-slateGlow/70 to-black/90 p-6">
        <p className="text-xs uppercase tracking-[0.5em] text-neon">/projects</p>
        <h1 className="text-3xl font-semibold text-white">Operational portfolio</h1>
        <p className="text-neon text-lg font-bold">{`Total Projects: ${projects.length}`}</p>
        <p className="text-slate-300">
          Explore my portfolio of real-world projects: client websites, 3D apps, e-learning platforms, and SaaS dashboards built with React, MERN, and Three.js. Each card shows a project I’ve designed, shipped, or am actively building—click for details and tech breakdowns.
        </p>
      </header>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-midnight/80 via-slateGlow/60 to-black/80 p-4 shadow-[0_15px_45px_rgba(2,6,10,0.6)]">
        <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-neon/80">
          <LuFilter aria-hidden /> Filter Projects
        </p>
        <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.3em] transition ${
              activeFilter === filter
                ? 'border border-neon/70 bg-neon/15 text-neon shadow-glow'
                : 'border border-white/15 text-slate-300 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </motion.button>
        ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </motion.section>
  )
}

export default Projects
