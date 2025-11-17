import { AnimatePresence, motion } from 'framer-motion'
import DownloadResumeButton from './DownloadResumeButton'

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-neon/30 bg-surface/95 p-6 shadow-glow"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 text-slate-400 transition hover:text-neon"
              onClick={onClose}
              aria-label="Close project modal"
            >
              ✕
            </button>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.5em] text-neon">Briefing File</p>
              <h2 id="project-modal-title" className="text-2xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-sm text-slate-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-cyberGray">
                {project.tech.map((stack) => (
                  <span key={stack} className="rounded-full border border-white/10 px-3 py-1">
                    {stack}
                  </span>
                ))}
              </div>
              <div className="grid gap-3 text-sm md:grid-cols-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-neon/60 px-6 py-2 text-neon"
                  >
                    Visit live deployment
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-2 text-slate-200"
                  >
                    View code repository
                  </a>
                )}
                {!project.github && !project.live && (
                  <p className="text-slate-400">
                    Secure repository. Request access via email.
                  </p>
                )}
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-slate-400">
                <p>Need deeper intel? Resume contains extended case studies.</p>
                <DownloadResumeButton className="mt-3 text-[0.65rem]" label="Download CV" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
