import { useEffect, useRef, useState, useMemo, memo } from 'react'
import { motion, useInView } from 'framer-motion'

// Check for reduced motion preference once at module load
const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}

const REDUCED_MOTION = prefersReducedMotion()

function CountUp({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const timerRef = useRef(null)

  useEffect(() => {
    if (!isInView) return
    
    // If reduced motion, set to end immediately
    if (REDUCED_MOTION) {
      setCount(end)
      return
    }

    let start = 0
    const step = end / (duration * 60)
    
    timerRef.current = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timerRef.current)
        timerRef.current = null
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 100, suffix: ' KL', label: 'Daily Capacity', desc: 'Production per day' },
  { value: 10, suffix: '+', label: 'Drink Variants', desc: 'Juices & carbonated' },
  { value: 3, suffix: '', label: 'Business Models', desc: 'Contract, White-label, Own' },
  { value: 6, suffix: ' Mo', label: 'Shelf Life', desc: 'Quality guaranteed' },
]

const StatsCounter = memo(function StatsCounter({ light = false }) {
  const memoizedStats = useMemo(() => stats, [])
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {memoizedStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className={`font-display font-bold text-5xl md:text-6xl mb-1 ${light ? 'text-white' : 'bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-500 bg-clip-text text-transparent'}`}>
            <CountUp end={stat.value} suffix={stat.suffix} />
          </div>
          <div className={`font-display font-semibold text-lg mb-0.5 ${light ? 'text-white/90' : 'text-gray-900'}`}>
            {stat.label}
          </div>
          <div className={`font-body text-sm ${light ? 'text-white/50' : 'text-gray-500'}`}>
            {stat.desc}
          </div>
        </motion.div>
      ))}
    </div>
  )
})

export default StatsCounter