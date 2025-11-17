import { motion } from 'framer-motion'

const container = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const card = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

const StatsDashboard = ({ stats }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid gap-4 rounded-3xl border border-white/5 bg-surface/80 p-6 text-center text-sm shadow-inner md:grid-cols-4"
    >
      {stats.map((item) => (
        <motion.div key={item.id} variants={card} className="space-y-2">
          <p className="text-xs uppercase tracking-[0.5em] text-neon/70">{item.label}</p>
          <p className="text-4xl font-semibold text-white">{item.value}</p>
          <p className="text-xs text-slate-400">{item.detail}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StatsDashboard
