import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import DownloadResumeButton from './DownloadResumeButton'

const CompactNavbar = ({ isVisible, navLinks, currentPath }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed top-4 left-0 right-0 z-50 mx-auto hidden max-w-4xl w-full rounded-full border border-neon/20 bg-gradient-to-r from-[#03120f]/95 via-[#010607]/95 to-[#000]/95 px-6 py-3 text-xs shadow-glow backdrop-blur md:flex"
        >
          <div className="flex items-center justify-between gap-6">
            <div className="hidden items-center gap-4 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`tracking-[0.2em] uppercase transition-colors ${
                    currentPath === link.path ? 'text-neon' : 'text-slate-300 hover:text-neon'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.icon && <link.icon className="text-neon/80" aria-hidden />}
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-1 items-center justify-between gap-3 lg:justify-end">
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-400">
                Mohammed Essam El Din
              </p>
              <DownloadResumeButton label="Download CV" variant="ghost" className="text-[0.65rem]" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CompactNavbar
