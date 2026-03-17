import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">R</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl">Richi Food Products</div>
                <div className="text-xs text-brand-400 tracking-widest uppercase">Be Rich, Feel Rich</div>
              </div>
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed max-w-xs">
              Premium beverage manufacturer based in Krishnagiri, Tamil Nadu. Delivering quality fruit juices and carbonated drinks across South India.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-body text-white/70">FSSAI Certified</div>
              <div className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-body text-white/70">ISO Standards</div>
              <div className="px-3 py-1.5 rounded-full bg-brand-500/20 text-xs font-body text-brand-300">100 KL/Day</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Products', path: '/products' },
                { name: 'Investor Relations', path: '/investors' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-brand-400 transition-colors duration-200 font-body text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-500 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand-400 mt-0.5 shrink-0" />
                <a href="mailto:richifoodproduct@gmail.com" className="text-white/60 hover:text-brand-400 transition-colors font-body text-sm">
                  richifoodproduct@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-400 mt-0.5 shrink-0" />
                <div className="font-body text-sm text-white/60">
                  <div>+91 94435 18521</div>
                  <div>+91 99443 66592</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-400 mt-0.5 shrink-0" />
                <p className="text-white/60 font-body text-sm">
                  489/1, Karagur Village, Piyur-2,<br />Krishnagiri District – 635112,<br />Tamil Nadu, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body text-xs">
            © 2024 Richi Food Products. All rights reserved. GST: 33ABJFR2254F1ZD
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://dffipl.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/40 hover:text-brand-400 text-xs font-body transition-colors"
            >
              <ExternalLink size={12} />
              DFF India Partners
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}