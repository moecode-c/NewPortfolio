import { motion } from 'framer-motion'
import DownloadResumeButton from '../components/DownloadResumeButton'
import LetterGlitch from '../components/LetterGlitch'
import { profile } from '../data/profile'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.section
      className="mx-auto max-w-3xl space-y-8 px-6 pb-16 text-center"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.5em] text-neon">/contact</p>
        <h1 className="text-3xl font-semibold text-white">Secure handshakes only.</h1>
        <p className="text-slate-300">
          Drop me a line for product builds, audits, mentoring, or to review detailed credentials.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/80 p-8">
        <div className="absolute inset-0 opacity-45" aria-hidden>
          <LetterGlitch glitchColors={['#03130d', '#0a4033', '#00ffaa']} glitchSpeed={60} />
        </div>
        <div className="relative space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-neon/70">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-4 flex items-center gap-2 text-2xl font-semibold text-white hover:text-neon transition-colors">
              <FaEnvelope className="text-neon/80" aria-hidden />
              {profile.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-neon/70">Phone</p>
            <a href={`tel:${profile.phone}`} className="mt-2 flex items-center gap-2 text-xl text-slate-200 hover:text-neon transition-colors">
              <FaPhone className="text-neon/80" aria-hidden />
              {profile.phone}
            </a>
          </div>
          <div className="text-sm text-slate-300">
            <p>Find me on:</p>
            <div className="mt-2 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4 text-base justify-center">
              <a className="flex items-center justify-center gap-2 px-3 py-2 rounded hover:text-neon hover:bg-neon/5 transition-colors" href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-neon/80 text-lg" aria-hidden /> <span>LinkedIn</span>
              </a>
              <a className="flex items-center justify-center gap-2 px-3 py-2 rounded hover:text-neon hover:bg-neon/5 transition-colors" href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub className="text-neon/80 text-lg" aria-hidden /> <span>GitHub</span>
              </a>
              <a className="flex items-center justify-center gap-2 px-3 py-2 rounded hover:text-neon hover:bg-neon/5 transition-colors" href={profile.website} target="_blank" rel="noreferrer">
                <FaGlobe className="text-neon/80 text-lg" aria-hidden /> <span>Portfolio</span>
              </a>
              <a className="flex items-center justify-center gap-2 px-3 py-2 rounded hover:text-neon hover:bg-neon/5 transition-colors" href={profile.codeContent.youtube} target="_blank" rel="noreferrer">
                <FaYoutube className="text-neon/80 text-lg" aria-hidden /> <span>{profile.codeContent.branding}</span>
              </a>
            </div>
          </div>
          <DownloadResumeButton className="mx-auto mt-4" label="Download Resume" />
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
