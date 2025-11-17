import { motion } from 'framer-motion'
import { LuGraduationCap, LuBriefcase, LuAward, LuUsers } from 'react-icons/lu'
import DownloadResumeButton from '../components/DownloadResumeButton'
import TextType from '../components/TextType'
import { profile } from '../data/profile'

const About = () => {
  return (
    <motion.section
      className="mx-auto max-w-6xl space-y-10 px-6 pb-16"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
    >
      <header className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#031915] via-[#020807] to-[#000] p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,170,0.22),_transparent_65%)]" aria-hidden />
        <div className="relative space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-neon">/about</p>
          <TextType
            text={['Building secure, cinematic software.', 'Teaching, shipping, mentoring daily.']}
            className="text-3xl font-semibold text-white"
            textColors={['#ffffff', '#00ffaa']}
            pauseDuration={2500}
            variableSpeed={{ min: 25, max: 60 }}
          />
          <p className="text-slate-300">{profile.profile}</p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(profile.skills).map(([label, items]) => (
          <div key={label} className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#040f11] via-[#020708] to-[#000] p-6">
            <p className="text-xs uppercase tracking-[0.5em] text-neon/70">{label}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-neon" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#04121a] via-[#010607] to-[#000] p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,188,212,0.25),_transparent_70%)]" aria-hidden />
          <div className="relative space-y-3">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-neon/70">
              <LuGraduationCap aria-hidden /> Education
            </p>
            <h3 className="text-xl font-medium text-white">{profile.education.degree} — {profile.education.institution}</h3>
            <p className="text-sm text-slate-300">{profile.education.timeline} · GPA {profile.education.gpa}</p>
            <p className="text-sm text-slate-400">Relevant Courses:</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
              {profile.education.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#030c0f] via-[#020708] to-[#000] p-6 text-sm text-slate-300">
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-neon/70">
            <LuAward aria-hidden /> Resume
          </p>
          <p className="mt-3">Full case studies, references, certificates, and links live inside my CV.</p>
          <DownloadResumeButton className="mt-4" label="Download Resume" />
        </div>
      </div>

      <section className="space-y-4">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-neon">
          <LuBriefcase aria-hidden /> Experience
        </p>
        <div className="space-y-4">
          {profile.experience.map((role) => (
            <div key={role.role} className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#041013] via-[#02080a] to-[#000] p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{role.role}</h3>
                  <p className="text-sm text-slate-300">{role.company} · {role.location}</p>
                </div>
                <p className="text-xs uppercase tracking-[0.4em] text-neon">{role.timeline}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {role.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#040f11] via-[#020708] to-[#000] p-6">
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-neon">
            <LuUsers aria-hidden /> References
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {profile.references.map((ref) => (
              <li key={ref.name} className="border-b border-white/5 pb-3 last:border-0">
                <p className="font-semibold text-white">{ref.name}</p>
                <p>{ref.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#040d12] via-[#020809] to-[#000] p-6">
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-neon">
            <LuAward aria-hidden /> Extracurriculars
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {profile.extracurriculars.map((item) => (
              <li key={`${item.role}-${item.timeline ?? item.org}`} className="border-b border-white/5 pb-3 last:border-0">
                <p className="font-semibold text-white">{item.role}</p>
                <p>{item.org}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-neon/80">{item.timeline ?? ''}</p>
                {item.description && <p className="text-slate-400">{item.description}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.section>
  )
}

export default About
