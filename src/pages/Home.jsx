import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LuMapPin, LuPhone, LuMail } from 'react-icons/lu'
import { FaGithub, FaLinkedin, FaGlobe, FaYoutube } from 'react-icons/fa6'
import StatsDashboard from '../components/StatsDashboard'
import DownloadResumeButton from '../components/DownloadResumeButton'
import ProjectCard from '../components/ProjectCard'
import TextType from '../components/TextType'
import CurvedLoop from '../components/CurvedLoop'
import LogoLoop from '../components/LogoLoop'
import { stats } from '../data/stats'
import { projects } from '../data/projects'
import { profile } from '../data/profile'

const Home = () => {
  const navigate = useNavigate()
  const previewProjects = projects.slice(0, 3)
  const primaryExperience = profile.experience.slice(0, 3)
  const extracurriculars = profile.extracurriculars
  const loopBrands = [
    { node: <span className="font-semibold text-neon">React</span> },
    { node: <span className="font-semibold text-neon">MERN</span> },
    { node: <span className="font-semibold text-neon">Three.js</span> },
    { node: <span className="font-semibold text-neon">TypeScript</span> },
    { node: <span className="font-semibold text-neon">WebGL</span> },
    { node: <span className="font-semibold text-neon">Tailwind</span> },
    { node: <span className="font-semibold text-neon">Mentor</span> },
  ]

  return (
    <motion.section
      className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-midnight via-pulse to-slateGlow p-8 shadow-[0_20px_140px_rgba(0,255,170,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,170,0.25),_transparent_55%)]" aria-hidden />
          <div className="relative space-y-8">
            <p className="text-xs uppercase tracking-[0.6em] text-neon">{profile.title}</p>
            <TextType
              text={[profile.name, 'SWE @ El Zatuna', 'Full-Stack Dev @ Mezatech', 'Tutor • Coach • Creator']}
              className="text-4xl font-semibold leading-tight text-white md:text-6xl"
              textColors={['#f2f7ff', '#00ffaa', '#00bcd4']}
              variableSpeed={{ min: 35, max: 90 }}
              pauseDuration={2200}
            />
            <p className="text-lg text-slate-200 md:text-xl">
              SWE @ El Zatuna | Full-Stack Developer @ Mezatech. I build and maintain large-scale platforms, enjoy solving real problems, and write clean, scalable code. Experienced in React.js, Laravel, Next.js, TypeScript, PHP, and more. I’ve shipped production projects for startups, tech clubs, and freelance clients, and I’m always learning, mentoring, and pushing for better code and better teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <DownloadResumeButton label="Download Resume" />
              <motion.button
                type="button"
                className="rounded-full border border-white/20 px-6 py-2 text-sm uppercase tracking-widest text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/projects')}
              >
                View Projects
              </motion.button>
            </div>
            <div className="grid gap-3 text-sm text-slate-200 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <LuMapPin className="text-neon" />
                <span>{profile.location}</span>
              </div>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-3 hover:text-neon">
                <LuPhone className="text-neon" /> {profile.phone}
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-neon">
                <LuMail className="text-neon" /> {profile.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a className="flex items-center gap-2 hover:text-neon" href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a className="flex items-center gap-2 hover:text-neon" href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
              <a className="flex items-center gap-2 hover:text-neon" href={profile.codeContent.youtube} target="_blank" rel="noreferrer">
                <FaYoutube /> {profile.codeContent.branding}
              </a>
              <a className="flex items-center gap-2 hover:text-neon" href={profile.website} target="_blank" rel="noreferrer">
                <FaGlobe /> Portfolio
              </a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slateGlow/70 via-midnight/90 to-black p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,188,212,0.35),_transparent_70%)] blur-2xl" aria-hidden />
          <div className="relative flex h-full flex-col">
            <p className="text-xs uppercase tracking-[0.4em] text-neon/80">3D Ops Scanner</p>
            <model-viewer
              src="/models/orange_droid.glb"
              alt="Cyber security guardian"
              auto-rotate
              camera-controls
              interaction-prompt="none"
              disable-zoom
              exposure="1.1"
              shadow-intensity="1"
              style={{ width: '100%', height: '360px' }}
            />
            <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-neon/80">Currently shipping</p>
              <ul className="mt-2 space-y-1 text-slate-200">
                <li>Building a MERN-based e-learning platform for coding skills</li>
                <li>Launching VisionX: interactive 3D web experiences</li>
                <li>Delivering security audits for EVO Championship</li>
                <li>Mentoring and coaching tech club teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-midnight/80 via-slateGlow/60 to-black/70 p-4 shadow-[0_20px_60px_rgba(2,6,10,0.6)]">
        <LogoLoop
          logos={loopBrands}
          gap={48}
          speed={120}
          logoHeight={30}
          fadeOut
          scaleOnHover
          ariaLabel="Technologies and focus areas"
        />
      </div>

      <div className="space-y-2 w-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2">
        <CurvedLoop
          marqueeText="SECURE BUILDS • MERN • 3D SYSTEMS • ZERO-DOWNTIME • COACHING • CYBER INSPIRED • "
          containerClassName="py-2 w-full"
          className="fill-neon w-full"
          curveAmount={-30}
          direction='left'
          speed={3}
        />
        <CurvedLoop
          marqueeText="SECURE BUILDS • MERN • 3D SYSTEMS • ZERO-DOWNTIME • COACHING • CYBER INSPIRED • "
          containerClassName="py-2 w-full"
          className="fill-neon w-full"
          curveAmount={-20}
          direction='right'
          speed={3}
        />
      </div>

      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-tr from-midnight/80 via-slateGlow/70 to-black/90 p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,170,0.2),_transparent_70%)] opacity-80" aria-hidden />
        <div className="relative">
          <StatsDashboard stats={stats} />
        </div>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        {primaryExperience.map((entry) => (
          <div key={entry.role} className="rounded-3xl border border-white/10 bg-gradient-to-b from-slateGlow/70 via-midnight/80 to-black p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.5em] text-neon">{entry.timeline}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{entry.role}</h3>
            <p className="text-slate-400">{entry.company} · {entry.location}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-neon/80">Ops center</p>
            <h2 className="text-2xl font-semibold text-white">Active Deployments</h2>
          </div>
          <Link to="/projects" className="text-sm uppercase tracking-[0.4em] text-neon">
            View full archive ↗
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {previewProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={() => navigate('/projects')} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-midnight/80 via-pulse/60 to-black p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-neon">Extracurricular radar</p>
            <h3 className="text-xl font-semibold text-white">Leadership & Content</h3>
            <p className="text-sm text-slate-300">
              Coaching MSP Tech Club teams, co-leading technical programs, and producing 40+ YouTube lessons (20k views, 1.5k watch hours).
            </p>
          </div>
          <div className="grid gap-2 text-sm text-slate-200">
            {extracurriculars.map((item) => (
              <div key={`${item.role}-${item.timeline}`} className="rounded-full border border-white/10 px-4 py-2">
                <span className="text-neon">{item.role}</span> · {item.org ?? 'Content Lab'} · {item.timeline ?? ''}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  )
}

export default Home
