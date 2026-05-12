import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarsIcon as Bars3Icon, XIcon as XMarkIcon, CalendarIcon as CalendarDaysIcon, ScissorsIcon } from './Icons'

const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Services', href: '#services' },
  { name: 'Barbiers', href: '#barbiers' },
  { name: 'Galerie', href: '#galerie' },
  { name: 'À Propos', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when link clicked
  const handleLinkClick = () => setMobileOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark py-2.5 sm:py-3' : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2 group" onClick={handleLinkClick}>
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#c80d0d,#ff3333)', boxShadow: '0 0 12px rgba(200,13,13,0.4)' }}
            >
              <ScissorsIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="leading-none">
              <span className="font-display text-lg sm:text-xl tracking-widest text-white">BLACKCUT</span>
              <p className="text-[8px] sm:text-[9px] tracking-[3px] sm:tracking-[4px] text-red-500 uppercase">Barbershop</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: 'linear-gradient(90deg,#c80d0d,#ff3333)' }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#accueil" className="btn-primary text-sm">
              <CalendarDaysIcon className="w-4 h-4" />
              Réserver
            </a>
          </div>

          {/* Mobile right side: CTA + burger */}
          <div className="flex lg:hidden items-center gap-2">
            <a href="#accueil" className="btn-primary text-xs px-3 py-2 rounded-lg" onClick={handleLinkClick}>
              <CalendarDaysIcon className="w-3.5 h-3.5" />
              Réserver
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-2 rounded-lg glass border border-white/10"
              aria-label="Menu"
            >
              {mobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu — full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 glass-dark border-l border-white/5 lg:hidden flex flex-col"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,#c80d0d,#ff3333)' }}>
                    <ScissorsIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-display text-base tracking-widest text-white">BLACKCUT</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-white p-1">
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-5 py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 py-3 px-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="px-5 py-5 border-t border-white/5">
                <a
                  href="#accueil"
                  onClick={handleLinkClick}
                  className="btn-primary w-full justify-center py-3 rounded-xl text-sm"
                >
                  <CalendarDaysIcon className="w-4 h-4" />
                  Réserver un Rendez-vous
                </a>
                <p className="text-gray-600 text-[10px] text-center mt-3">
                  8023 Agoe-Legbassito, Lomé, Togo
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
