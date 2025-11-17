import { LuMail, LuMapPin } from 'react-icons/lu'
import DownloadResumeButton from './DownloadResumeButton'
import { profile } from '../data/profile'

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-gradient-to-b from-[#010304] via-[#040d0e] to-[#000] py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-neon">{profile.name}</p>
          <p className="mt-2 text-slate-400">{profile.title}</p>
          <div className="mt-3 flex flex-col gap-2 text-slate-300">
            <a className="flex items-center gap-2 text-neon" href={`mailto:${profile.email}`}>
              <LuMail aria-hidden /> {profile.email}
            </a>
            <p className="flex items-center gap-2">
              <LuMapPin aria-hidden className="text-neon" /> {profile.location}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.3em] md:items-end">
          <DownloadResumeButton label="Download CV" variant="ghost" />
          <span className="text-slate-500">© {new Date().getFullYear()} All systems secure.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
