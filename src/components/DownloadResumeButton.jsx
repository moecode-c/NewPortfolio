import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const buttonVariants = {
  primary:
    'bg-neon/20 text-neon border border-neon/60 hover:bg-neon/30 focus-visible:ring-2 focus-visible:ring-neon/70',
  ghost:
    'bg-transparent text-slate-100 border border-slate-700 hover:border-neon/70 hover:text-neon focus-visible:ring-2 focus-visible:ring-neon/70',
}

const DownloadResumeButton = ({ label = 'Download Resume', className = '', variant = 'primary' }) => {
  return (
    <motion.a
      href={profile.resumePath}
      download
      className={`inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${buttonVariants[variant]} ${className}`}
      whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 170, 0.35)' }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="h-2 w-2 rounded-full bg-neon animate-pulse" aria-hidden />
      {label}
    </motion.a>
  )
}

export default DownloadResumeButton
