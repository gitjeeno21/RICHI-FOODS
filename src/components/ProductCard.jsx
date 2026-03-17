import { motion } from 'framer-motion'

const flavorColors = {
  'Mango': { bg: 'from-yellow-400 to-orange-400', emoji: '🥭', accent: '#f59e0b' },
  'Apple': { bg: 'from-green-400 to-emerald-500', emoji: '🍎', accent: '#10b981' },
  'Guava': { bg: 'from-pink-400 to-rose-400', emoji: '🍈', accent: '#f43f5e' },
  'Orange': { bg: 'from-orange-400 to-amber-500', emoji: '🍊', accent: '#f97316' },
  'Paneer Soda': { bg: 'from-purple-400 to-violet-500', emoji: '🫧', accent: '#8b5cf6' },
  'Grape': { bg: 'from-purple-500 to-purple-700', emoji: '🍇', accent: '#7c3aed' },
  'Green Lemon': { bg: 'from-lime-400 to-green-500', emoji: '🍋', accent: '#84cc16' },
  'Cola': { bg: 'from-amber-800 to-stone-800', emoji: '🥤', accent: '#92400e' },
  'Bovo': { bg: 'from-cyan-400 to-blue-500', emoji: '💧', accent: '#06b6d4' },
  'Jeera Soda': { bg: 'from-yellow-600 to-amber-700', emoji: '🌿', accent: '#d97706' },
  'Soda': { bg: 'from-sky-400 to-cyan-500', emoji: '🫙', accent: '#38bdf8' },
}

export default function ProductCard({ name, category, index }) {
  const style = flavorColors[name] || { bg: 'from-brand-400 to-brand-600', emoji: '🍹', accent: '#f4881a' }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
    >
      {/* Color top section */}
      <div className={`h-40 bg-linear-to-br ${style.bg} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)`
        }} />
        <motion.span
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
          className="text-6xl filter drop-shadow-lg"
        >
          {style.emoji}
        </motion.span>
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-body font-semibold">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-forest-900 mb-1">{name}</h3>
        <p className="font-body text-sm text-gray-500">
          {category === 'Juice' ? 'Fresh fruit juice, 6-month shelf life' : 'Carbonated, crisp & refreshing'}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: style.accent }} />
            <span className="text-xs font-body text-gray-400">Available in PET</span>
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-brand-50 transition-colors">
            <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}