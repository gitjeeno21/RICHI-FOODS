import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Award, Truck, Factory, Leaf } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import StatsCounter from '../components/StatsCounter'
import SectionHeading from '../components/SectionHeading'

const features = [
  { icon: Factory, title: 'Modern Plant', desc: '100 KL/day capacity with cutting-edge equipment including RO, pasteurization & CO₂ carbonation.' },
  { icon: Award, title: 'FSSAI Certified', desc: 'Full FSSAI compliance with rigorous quality assurance protocols and dedicated QC laboratory.' },
  { icon: Truck, title: 'Flexible Models', desc: 'Contract Manufacturing, White-label, and Own Brand partnerships — tailored to your needs.' },
  { icon: Leaf, title: 'Eco Practices', desc: 'PET recycling, water management, and local farmer partnerships for sustainable production.' },
]

const testimonialHighlights = [
  { text: '20% sales growth', caption: 'Mango Juice case study' },
  { text: '15% cost reduction', caption: 'Jeera Soda optimization' },
  { text: '5,000 L/month', caption: 'Scaled production milestone' },
]

export default function Home() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-forest-900">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-forest-900 via-forest-800 to-[#2a1a0a]" />
          <div className="absolute top-1/4 right-1/4 w-150 h-150 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-100 h-100 rounded-full bg-brand-600/8 blur-3xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/15 border border-brand-500/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-brand-300 text-xs font-body font-semibold tracking-widest uppercase">Krishnagiri, Tamil Nadu</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
            >
              Be Rich,{' '}
              <span className="relative">
                <span className="bg-linear-to-r from-(--brand-orange) via-(--brand-gold) to-(--brand-orange) bg-clip-text text-transparent">Feel Rich</span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 8 Q75 2 150 8 Q225 14 298 8"
                    stroke="#f4881a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-body text-lg text-white/60 leading-relaxed mb-8 max-w-xl"
            >
              South India's premier beverage manufacturer — delivering world-class fruit juices and carbonated drinks. Partner with us for contract manufacturing, white-label, or distribution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                to="/products"
                className="flex items-center gap-2 px-8 py-4 bg-brand-500 text-white font-body font-semibold rounded-full hover:bg-brand-600 hover:shadow-2xl hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link
                to="/investors"
                className="flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-body font-semibold rounded-full hover:border-brand-500/50 hover:bg-white/5 transition-all duration-300"
              >
                Partner With Us
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              {['FSSAI Licensed', 'GST Registered', '100 KL/Day Capacity'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-white/50 text-xs font-body">
                  <CheckCircle size={14} className="text-brand-400" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-115 h-115">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-brand-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-brand-500/10"
              />
              
              {/* Center glow orb */}
              <div className="absolute inset-16 rounded-full bg-linear-to-br from-brand-400/30 to-brand-600/20 blur-xl" />
              
              {/* Central circle */}
              <div className="absolute inset-16 rounded-full bg-linear-to-br from-brand-500/20 to-brand-700/10 border border-brand-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-2">🍹</div>
                  <div className="font-display font-bold text-white text-xl">Richi</div>
                  <div className="font-body text-brand-400 text-xs tracking-widest uppercase">Since 2020</div>
                </div>
              </div>

              {/* Orbiting items */}
              {['🥭', '🍊', '🍋', '🍇'].map((emoji, i) => {
                const angle = (i / 4) * Math.PI * 2
                const r = 170
                const x = Math.cos(angle) * r
                const y = Math.sin(angle) * r
                return (
                  <motion.div
                    key={emoji}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                    style={{ position: 'absolute', left: '50%', top: '50%' }}
                  >
                    <div style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                      className="w-14 h-14 rounded-2xl bg-white/8 backdrop-blur border border-white/10 flex items-center justify-center text-2xl shadow-lg">
                      {emoji}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs font-body tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-brand-500 to-transparent" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <StatsCounter />
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Why Richi"
            title="Built for Scale, Crafted for Quality"
            subtitle="From our modern facility in Krishnagiri to your customers' hands — every bottle delivers on our promise."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-500 transition-colors duration-300">
                  <f.icon size={24} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-xl text-forest-900 mb-3">{f.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY HIGHLIGHTS */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(244,136,26,0.3) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="Proven Results"
            title="Real Impact, Measurable Growth"
            subtitle="Our case studies demonstrate our commitment to delivering value for every partner."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonialHighlights.map((t, i) => (
              <motion.div
                key={t.caption}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 text-center"
              >
                <div className="font-display font-bold text-4xl text-brand-400 mb-2">{t.text}</div>
                <div className="font-body text-white/50 text-sm">{t.caption}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/investors"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white font-body font-semibold rounded-full hover:bg-brand-600 hover:shadow-2xl hover:shadow-brand-500/30 transition-all duration-300"
            >
              View Full Proposal <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16 px-6 bg-brand-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Ready to Partner with Richi?
            </h2>
            <p className="font-body text-white/80 text-lg mb-8">
              Schedule a plant visit or virtual tour today. Let's build something great together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand-600 font-body font-bold rounded-full hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Get In Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}