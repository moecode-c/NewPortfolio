import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { LuFilter } from 'react-icons/lu'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const FILTER_GROUPS = [
  {
    name: 'Mobile',
    matches: ['react native', 'expo', 'sockets'],
  },
  {
    name: 'Front-End',
    matches: ['react', 'next.js', 'typescript', 'css', 'framer', 'zustand', 'api', 'blade', 'dashboard', 'pixel art', 'gamification'],
  },
  {
    name: 'Back-End',
    matches: ['mern', 'node', 'mongodb', 'express', 'php', 'laravel', 'sql', 'nestjs', 'payments', 'fullstack', 'docker'],
  },
  {
    name: 'AI / Data',
    matches: ['ai', 'machine learning', 'algorithms'],
  },
  {
    name: '3D / Creative',
    matches: ['3d', 'three.js', 'vanilla js', 'js', 'gamedev', 'javafx'],
  },
  {
    name: 'Languages',
    matches: ['python', 'java', 'oop'],
  },
]

const getTechGroup = (techLabel) => {
  const normalized = String(techLabel).toLowerCase().trim()

  const matchedGroup = FILTER_GROUPS.find((group) =>
    group.matches.some((keyword) => normalized === keyword || normalized.includes(keyword)),
  )

  return matchedGroup?.name ?? 'Other'
}

const Projects = () => {
  const [activeGroup, setActiveGroup] = useState('All')
  const [activeSkill, setActiveSkill] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const groupedFilters = useMemo(() => {
    const grouped = new Map()

    FILTER_GROUPS.forEach((group) => {
      grouped.set(group.name, new Map())
    })
    grouped.set('Other', new Map())

    projects.forEach((project) => {
      ;(project.tech ?? []).forEach((item) => {
        const label = String(item).trim()
        if (!label) return
        const key = label.toLowerCase()
        const groupName = getTechGroup(label)
        const groupSkills = grouped.get(groupName)

        if (!groupSkills.has(key)) {
          groupSkills.set(key, { label, count: 0 })
        }
        groupSkills.get(key).count += 1
      })
    })

    return [...grouped.entries()]
      .map(([name, skillsMap]) => {
        const skills = [...skillsMap.values()]
          .sort((a, b) => {
            if (b.count !== a.count) return b.count - a.count
            return a.label.localeCompare(b.label)
          })
          .map((skill) => skill.label)

        return { name, skills }
      })
      .filter((group) => group.skills.length > 0)
  }, [])

  const groupFilters = useMemo(() => ['All', ...groupedFilters.map((group) => group.name)], [groupedFilters])

  const activeGroupSkills = useMemo(() => {
    if (activeGroup === 'All') return []
    return groupedFilters.find((group) => group.name === activeGroup)?.skills ?? []
  }, [activeGroup, groupedFilters])

  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()
    const normalizedSkill = activeSkill.toLowerCase()

    return projects.filter((project) => {
      const techItems = (project.tech ?? []).map((item) => String(item).toLowerCase())

      const matchesGroup =
        activeGroup === 'All' || techItems.some((item) => getTechGroup(item) === activeGroup)

      const matchesSkill = activeSkill === 'All' || techItems.some((item) => item === normalizedSkill)

      if (!matchesGroup || !matchesSkill) return false
      if (!normalizedQuery) return true

      const haystack = [project.title, project.description, (project.tech ?? []).join(' ')].join(' ').toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [activeGroup, activeSkill, searchQuery])

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
        <div className="flex flex-col gap-4">
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search projects..."
            aria-label="Search projects"
            className="w-full rounded-full border border-white/15 bg-black/20 px-5 py-2 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition focus:border-neon/40 focus:ring-2 focus:ring-neon/20"
          />

          <div className="flex flex-wrap gap-3">
            {groupFilters.map((group) => (
              <motion.button
                key={group}
                type="button"
                onClick={() => {
                  setActiveGroup(group)
                  setActiveSkill('All')
                }}
                className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.3em] transition ${
                  activeGroup === group
                    ? 'border border-neon/70 bg-neon/15 text-neon shadow-glow'
                    : 'border border-white/15 text-slate-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {group}
              </motion.button>
            ))}
          </div>

          {activeGroup !== 'All' && (
            <div className="space-y-2 rounded-2xl border border-white/10 bg-black/20 p-3">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-neon/80">{activeGroup} Skills</p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveSkill('All')}
                  className={`rounded-full px-4 py-1 text-xs uppercase tracking-[0.25em] transition ${
                    activeSkill === 'All'
                      ? 'border border-neon/70 bg-neon/15 text-neon shadow-glow'
                      : 'border border-white/15 text-slate-300 hover:text-white'
                  }`}
                >
                  All
                </button>
                {activeGroupSkills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => setActiveSkill(skill)}
                    className={`rounded-full px-4 py-1 text-xs uppercase tracking-[0.25em] transition ${
                      activeSkill === skill
                        ? 'border border-neon/70 bg-neon/15 text-neon shadow-glow'
                        : 'border border-white/15 text-slate-300 hover:text-white'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeGroup === 'All' && (
            <div className="grid gap-3 md:grid-cols-2">
              {groupedFilters.map((group) => (
                <div key={group.name} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <p className="mb-2 text-[0.65rem] uppercase tracking-[0.35em] text-neon/80">{group.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <button
                        key={`${group.name}-${skill}`}
                        type="button"
                        onClick={() => {
                          setActiveGroup(group.name)
                          setActiveSkill(skill)
                        }}
                        className="rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.25em] text-slate-300 transition hover:text-white"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
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
