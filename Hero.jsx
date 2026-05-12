import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon as CalendarDaysIcon, ArrowRightIcon } from './Icons'
import BookingWidget from './BookingWidget'

export default function Hero() {
  const [showBooking, setShowBooking] = useState(false)

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden w-full">
      {/* Background — barbershop photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image.png"
          alt="Blackcut Barbershop"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Mobile: heavy dark overlay for full readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.92) 100%)',
          }}
        />
        {/* Desktop: directional overlay */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(105deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.80) 45%, rgba(10,10,10,0.45) 70%, rgba(10,10,10,0.25) 100%)',
          }}
        />
        {/* Red cinematic tint at bottom */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(180,10,10,0.25) 0%, transparent 50%)' }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-red rounded-full px-3 py-1.5 mb-4 lg:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-xs text-red-400 font-medium tracking-wider uppercase">
                Coupes Premium · Style Intemporel
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[0.9] mb-4 lg:mb-6"
            >
              <span className="text-white">Élevez</span>
              <br />
              <span className="text-white">Votre</span>
              <br />
              <span className="text-gradient">Apparence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-sm sm:max-w-md mx-auto lg:mx-0"
            >
              Coupes précises, dégradés nets et expérience haut de gamme.
              Bienvenue chez Blackcut Barbershop — l'art du style masculin.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-8 lg:mb-10 justify-center lg:justify-start"
            >
              <button
                onClick={() => setShowBooking(true)}
                className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto justify-center"
              >
                <CalendarDaysIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                Réserver un Rendez-vous
              </button>
              <a href="#services" className="btn-outline text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl justify-center">
                Nos Services
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8"
            >
              {[
                { val: '5+', label: 'Années' },
                { val: '5000+', label: 'Clients' },
                { val: '10+', label: 'Barbiers' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl sm:text-3xl text-red-500">{s.val}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Booking widget (desktop only inline) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden lg:block"
          >
            <BookingWidget inline />
          </motion.div>

          {/* ── Mobile: small booking teaser card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:hidden"
          >
            <div
              onClick={() => setShowBooking(true)}
              className="glass-card p-4 flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#c80d0d,#ff3333)' }}>
                <CalendarDaysIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-sm">Prendre Rendez-vous</div>
                <div className="text-gray-400 text-xs mt-0.5">Moins de 2 minutes • Gratuit</div>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(200,13,13,0.2)', border: '1px solid rgba(200,13,13,0.4)' }}>
                <ArrowRightIcon className="w-4 h-4 text-red-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />

      {/* Booking modal (mobile + desktop) */}
      {showBooking && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowBooking(false)}
        >
          {/* Sheet slides up on mobile */}
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full sm:max-w-md sm:w-full rounded-t-3xl sm:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <BookingWidget onClose={() => setShowBooking(false)} />
          </motion.div>
        </div>
      )}
    </section>
  )
}
