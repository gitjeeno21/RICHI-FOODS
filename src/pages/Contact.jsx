import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Building } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'richifoodproduct@gmail.com',
    desc: 'We respond within 24 hours',
    link: 'mailto:richifoodproduct@gmail.com',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Phone,
    label: 'Mr. Velmurukan',
    value: '+91 94435 18521',
    desc: 'Founder & Director',
    link: 'tel:9443518521',
    color: 'from-brand-500 to-brand-700',
  },
  {
    icon: Phone,
    label: 'Mr. Bharath',
    value: '+91 99443 66592',
    desc: 'Operations & Marketing',
    link: 'tel:9944366592',
    color: 'from-green-500 to-green-700',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Krishnagiri District, TN',
    desc: '489/1, Karagur Village, Piyur-2 – 635112',
    link: 'https://maps.google.com/?q=Krishnagiri,Tamil+Nadu',
    color: 'from-purple-500 to-purple-700',
  },
]

const reasons = [
  { icon: Building, text: 'Schedule a Plant Visit or Virtual Tour' },
  { icon: Clock, text: 'Discuss Contract Manufacturing Terms' },
  { icon: CheckCircle, text: 'White-label & Distribution Inquiry' },
  { icon: Mail, text: 'Request Samples or Pricing' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate submission
    setTimeout(() => setSubmitted(true), 500)
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-forest-900 via-forest-800 to-[#1f1008]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-forest-900 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 mb-6">
              <span className="text-brand-300 text-xs font-body font-semibold tracking-widest uppercase">Let's Connect</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">Get In Touch</h1>
            <p className="font-body text-white/60 text-xl max-w-2xl mx-auto">
              Ready to explore a partnership? Reach out — our team will respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {contactMethods.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.link}
              target={c.label === 'Visit Us' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-cream rounded-3xl p-6 text-center hover:shadow-xl transition-all duration-400 cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${c.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <c.icon size={22} className="text-white" />
              </div>
              <div className="font-body text-xs text-gray-400 uppercase tracking-wider mb-1">{c.label}</div>
              <div className="font-display font-bold text-forest-900 text-sm mb-1">{c.value}</div>
              <div className="font-body text-gray-400 text-xs">{c.desc}</div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="font-display font-bold text-3xl text-forest-900 mb-4">
              Let's Build Something<br />
              <span className="bg-linear-to-r from-(--brand-orange) via-(--brand-gold) to-(--brand-orange) bg-clip-text text-transparent">Great Together</span>
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed mb-8">
              Whether you're a distributor, retailer, brand looking for manufacturing, or an investor — we want to hear from you.
            </p>

            <div className="space-y-4 mb-8">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <r.icon size={18} className="text-brand-500" />
                  </div>
                  <span className="font-body text-sm text-gray-600">{r.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Address card */}
            <div className="bg-forest-900 rounded-3xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-brand-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-base mb-1">Factory Address</div>
                  <div className="font-body text-white/60 text-sm leading-relaxed">
                    489/1, Karagur Village, Piyur-2,<br />
                    Krishnagiri District – 635112,<br />
                    Tamil Nadu, India
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-white/40 mb-0.5">GST</div>
                      <div className="text-white/70 font-mono">33ABJFR2254F1ZD</div>
                    </div>
                    <div>
                      <div className="text-white/40 mb-0.5">FSSAI</div>
                      <div className="text-white/70 font-mono">12424011000549</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="font-display font-bold text-2xl text-forest-900 mb-3">Message Sent!</h3>
                <p className="font-body text-gray-500">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-2xl text-forest-900 mb-6">Send us a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm text-gray-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/10 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-gray-700 mb-2">Company</label>
                    <input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm text-gray-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/10 transition-all"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm text-gray-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/10 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm text-gray-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/10 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-gray-700 mb-2">I'm interested in *</label>
                  <select
                    required
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm text-gray-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/10 transition-all bg-white"
                  >
                    <option value="">Select partnership type...</option>
                    <option value="contract">Contract Manufacturing</option>
                    <option value="whitelabel">White-Label Partnership</option>
                    <option value="distribution">Distribution Partnership</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="plant-visit">Plant Visit / Virtual Tour</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm text-gray-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/10 transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-500 text-white font-body font-bold rounded-xl hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}