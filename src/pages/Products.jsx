import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'

const products = [
  { name: 'Mango', category: 'Juice' },
  { name: 'Apple', category: 'Juice' },
  { name: 'Guava', category: 'Juice' },
  { name: 'Orange', category: 'Carbonated' },
  { name: 'Paneer Soda', category: 'Carbonated' },
  { name: 'Grape', category: 'Carbonated' },
  { name: 'Green Lemon', category: 'Carbonated' },
  { name: 'Cola', category: 'Carbonated' },
  { name: 'Bovo', category: 'Carbonated' },
  { name: 'Jeera Soda', category: 'Carbonated' },
  { name: 'Soda', category: 'Carbonated' },
]

const filters = ['All', 'Juice', 'Carbonated']

const packaging = [
  { size: '200ml', type: 'PET Bottle', best: 'Restaurants & Cafes' },
  { size: '500ml', type: 'PET Bottle', best: 'Retail & On-the-go' },
  { size: '1L', type: 'PET Bottle', best: 'Family & Bulk' },
  { size: 'Custom', type: 'White-label', best: 'Brand Partners' },
]

export default function Products() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-forest-900 via-forest-800 to-[#1f1008]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-60 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 mb-6">
              <span className="text-brand-300 text-xs font-body font-semibold tracking-widest uppercase">Our Range</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">Product Portfolio</h1>
            <p className="font-body text-white/60 text-xl max-w-2xl mx-auto">
              {products.length}+ premium beverages — from refreshing fruit juices to lively carbonated drinks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-cream">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-12 justify-center flex-wrap"
          >
            <Filter size={18} className="text-gray-400" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-6 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                  active === f
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                    : 'bg-white text-gray-600 hover:bg-brand-50 hover:text-brand-600 border border-gray-200'
                }`}
              >
                {f}
                <span className="ml-2 text-xs opacity-70">
                  {f === 'All' ? products.length : products.filter((p) => p.category === f).length}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.name} {...product} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Packaging" title="Available Formats" subtitle="Flexible sizing to fit every distribution channel." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {packaging.map((p, i) => (
              <motion.div
                key={p.size}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream rounded-3xl p-7 text-center border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">🫙</div>
                <div className="font-display font-bold text-3xl text-brand-500 mb-1">{p.size}</div>
                <div className="font-body text-forest-900 font-semibold text-sm mb-1">{p.type}</div>
                <div className="font-body text-gray-400 text-xs">{p.best}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing spec */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-forest-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Process" title="How We Make It" subtitle="Our end-to-end production excellence." light />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: '01', icon: '💧', label: 'RO Water Treatment' },
              { step: '02', icon: '🧪', label: 'Blending & Mixing' },
              { step: '03', icon: '🔬', label: 'QC Testing' },
              { step: '04', icon: '🔥', label: 'Pasteurization' },
              { step: '05', icon: '🫧', label: 'CO₂ Carbonation' },
              { step: '06', icon: '📦', label: 'Bottling & Dispatch' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-5 text-center"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-display font-bold text-brand-400 text-xs mb-1 tracking-wider">STEP {s.step}</div>
                <div className="font-body text-white text-xs leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}