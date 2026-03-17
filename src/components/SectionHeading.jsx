import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase
          ${light ? 'bg-brand-500/20 text-brand-300' : 'bg-brand-50 text-brand-600 border border-brand-100'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {eyebrow}
        </div>
      )}
      <h2 className={`font-display font-bold text-4xl md:text-5xl leading-tight mb-4
        ${light ? 'text-white' : 'text-forest-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}
          ${light ? 'text-white/60' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}