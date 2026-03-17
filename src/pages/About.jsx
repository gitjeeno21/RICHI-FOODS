import { motion } from 'framer-motion'
import { Users, Target, Eye, Phone, Mail, MapPin, Shield, Zap, Globe } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'

const team = [
  {
    name: 'Mr. Velmurukan',
    role: 'Founder & Director',
    phone: '9443518521',
    emoji: '👨‍💼',
    bio: 'Visionary leader with deep expertise in food manufacturing and quality standards. Drives Richi\'s growth and strategic partnerships.',
  },
  {
    name: 'Mr. Bharath',
    role: 'Operations & Marketing',
    phone: '9944366592',
    emoji: '👨‍💻',
    bio: 'Operations expert ensuring seamless production and supply chain. Spearheads marketing initiatives and distributor relationships.',
  },
]

const milestones = [
  { year: '2020', event: 'Richi Food Products founded in Krishnagiri, TN' },
  { year: '2021', event: 'FSSAI license obtained, first product lines launched' },
  { year: '2022', event: 'Expanded to 10+ drink variants, entered Karnataka market' },
  { year: '2023', event: 'Scaled to 100 KL/day capacity with new plant upgrades' },
  { year: '2024', event: 'White-label & contract manufacturing partnerships launched' },
]

const values = [
  { icon: Shield, title: 'Quality First', desc: 'Every bottle passes rigorous QC checks before leaving our facility.' },
  { icon: Zap, title: 'Innovation', desc: 'Continuously developing new flavors and healthier formulations.' },
  { icon: Globe, title: 'Sustainability', desc: 'Eco-friendly packaging and responsible water management practices.' },
  { icon: Users, title: 'Partnership', desc: 'Long-term relationships with distributors, retailers, and farmers.' },
]

export default function About() {
  return (
    <PageWrapper>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-forest-900 via-forest-800 to-[#1f1008]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/8 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 mb-6">
              <span className="text-brand-300 text-xs font-body font-semibold tracking-widest uppercase">Our Story</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">About Richi</h1>
            <p className="font-body text-white/60 text-xl max-w-2xl mx-auto">
              Born in the heart of Tamil Nadu, built for all of India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
              <span className="text-brand-600 text-xs font-body font-semibold tracking-widest uppercase">Company Profile</span>
            </div>
            <h2 className="font-display font-bold text-4xl text-forest-900 mb-6 leading-tight">
              Crafting Beverages That<br />
              <span className="bg-linear-to-r from-(--brand-orange) via-(--brand-gold) to-(--brand-orange) bg-clip-text text-transparent">Delight Every Sip</span>
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
              Richi Food Products is a modern beverage manufacturer located in Krishnagiri, Tamil Nadu. We specialize in high-quality fruit juices and carbonated drinks for B2B partners — from contract manufacturing to white-label solutions.
            </p>
            <p className="font-body text-gray-500 leading-relaxed mb-8">
              Our state-of-the-art facility equipped with RO Water systems, Blending, Filtration, Pasteurization, CO₂ Carbonation, Bottling, QC Lab, and Cold Storage ensures every product meets the highest standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'GST No.', value: '33ABJFR2254F1ZD' },
                { label: 'FSSAI License', value: '12424011000549' },
                { label: 'Location', value: 'Krishnagiri, TN' },
                { label: 'Capacity', value: '100 KL/Day' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-4 border border-gray-100">
                  <div className="text-xs font-body text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-body font-semibold text-forest-900 text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Plant visual card */}
            <div className="bg-forest-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl" />
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="font-display font-bold text-2xl mb-4">Our Plant Infrastructure</h3>
              <ul className="space-y-3">
                {['RO Water Treatment', 'Blending & Mixing Units', 'Pasteurization System', 'CO₂ Carbonation', 'PET Bottle Filling Line', 'Dedicated QC Laboratory', 'Cold Storage Facility'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-sm text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-3xl text-brand-400">100 KL</div>
                  <div className="font-body text-white/50 text-xs">Daily Production</div>
                </div>
                <div className="text-right">
                  <div className="font-body text-white/50 text-xs">Location</div>
                  <div className="font-body font-medium text-white text-sm">Krishnagiri District, TN</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Direction"
            title="Vision & Mission"
            subtitle="Our north star that guides every decision we make."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-forest-900 to-forest-800 rounded-3xl p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/15 rounded-full blur-2xl" />
              <Eye size={40} className="text-brand-400 mb-5" />
              <h3 className="font-display font-bold text-2xl mb-4">Our Vision</h3>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                To be a leading manufacturer of high-quality fruit juices and carbonated beverages, recognized across South India for unmatched taste and standards.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-linear-to-br from-brand-500 to-brand-700 rounded-3xl p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <Target size={40} className="text-white mb-5" />
              <h3 className="font-display font-bold text-2xl mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  'Deliver hygienic, affordable, and tasty drinks',
                  'Maintain best-in-class manufacturing standards',
                  'Build long-term partnerships with distributors & retailers',
                ].map((m) => (
                  <li key={m} className="flex items-start gap-3 font-body text-white/85 text-base">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="What We Stand For" title="Our Core Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-500 transition-colors duration-300">
                  <v.icon size={28} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-xl text-forest-900 mb-3">{v.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Leadership" title="Meet Our Team" subtitle="The people driving Richi forward." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-brand-400 to-brand-600 flex items-center justify-center text-3xl shadow-lg shadow-brand-500/20">
                    {member.emoji}
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl text-forest-900">{member.name}</div>
                    <div className="font-body text-brand-500 text-sm font-semibold">{member.role}</div>
                  </div>
                </div>
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">{member.bio}</p>
                <a
                  href={`tel:${member.phone}`}
                  className="inline-flex items-center gap-2 text-brand-500 font-body font-semibold text-sm hover:text-brand-600 transition-colors"
                >
                  <Phone size={15} /> +91 {member.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-forest-900">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Journey" title="Our Milestones" light />
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-500/30" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white font-display font-bold text-sm z-10 relative shadow-lg shadow-brand-500/30">
                  {m.year.slice(2)}
                </div>
                <div className="pt-2">
                  <div className="font-display font-bold text-brand-400 mb-1">{m.year}</div>
                  <div className="font-body text-white/70 text-sm leading-relaxed">{m.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}