import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaUser, FaFolderOpen, FaPhone } from 'react-icons/fa'
import DownloadResumeButton from './DownloadResumeButton'
import CompactNavbar from './CompactNavbar'
import { profile } from '../data/profile'

const navLinks = [
  { label: 'Home', path: '/', icon: FaHome },
  { label: 'About', path: '/about', icon: FaUser },
  { label: 'Projects', path: '/projects', icon: FaFolderOpen },
  { label: 'Contact', path: '/contact', icon: FaPhone },
]

const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-gradient-to-r from-midnight/95 via-slateGlow/80 to-black/80 backdrop-blur-xl shadow-[0_15px_40px_rgba(3,7,11,0.65)]"
          >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link to="/" className="text-xl font-bold uppercase tracking-[0.4em] text-neon drop-shadow-glow">
                MOE
              </Link>
              <div className="hidden items-center gap-10 text-base md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-2 rounded-full px-3 py-2 transition-colors ease-soft-spring ${
                      location.pathname === link.path
                        ? 'bg-neon/15 text-neon shadow-glow'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <link.icon className="text-neon/80 text-lg" aria-hidden />
                    <span className="font-semibold tracking-wide">{link.label}</span>
                  </Link>
                ))}
                <DownloadResumeButton label="Download CV" className="text-xs ml-4" />
              </div>
              <button
                type="button"
                className="relative h-10 w-12 rounded border border-white/15 text-slate-100/90 backdrop-blur hover:border-neon/40 md:hidden"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <span className="sr-only">Toggle menu</span>
                <span
                  className={`absolute left-3 right-3 h-0.5 bg-white transition-all ${
                    menuOpen ? 'top-1/2 rotate-45' : 'top-3'
                  }`}
                />
                <span
                  className={`absolute left-3 right-3 h-0.5 bg-white transition-all ${
                    menuOpen ? 'top-1/2 -rotate-45' : 'top-6'
                  }`}
                />
              </button>
            </div>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  id="mobile-nav"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="border-t border-white/10 bg-surface/95 px-6 pb-8 pt-4 text-base md:hidden"
                >
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`flex items-center gap-2 px-3 py-2 rounded-full ${
                          location.pathname === link.path
                            ? 'bg-neon/20 text-neon'
                            : 'text-slate-200 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <link.icon className="text-neon/80 text-lg" aria-hidden />
                        <span className="font-semibold tracking-wide">{link.label}</span>
                      </Link>
                    ))}
                    <DownloadResumeButton label="Download CV" variant="ghost" className="mt-2" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>
      <CompactNavbar navLinks={navLinks} currentPath={location.pathname} isVisible={scrolled} />
    </>
  )
}

export default Navbar
