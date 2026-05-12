import { motion } from 'framer-motion'
import { CalendarIcon as CalendarDaysIcon } from './Icons'

export default function CTA() {
  return (
    <section id="reserver" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card relative overflow-hidden p-8 sm:p-12 md:p-16"
        >
          {/* Background glows */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full opacity-25 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #c80d0d, transparent)', filter: 'blur(60px)' }} />
          <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #ff3333, transparent)', filter: 'blur(50px)' }} />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 text-center lg:text-left">
            <div>
              <p className="text-red-400 text-xs sm:text-sm font-medium uppercase tracking-widest mb-2 sm:mb-3">
                Prêt pour un Nouveau Look?
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-3 sm:mb-4">
                Réservez Votre<br />
                Rendez-vous
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                Prenez rendez-vous dès aujourd'hui et vivez la différence Blackcut.
                Moins de 2 minutes pour réserver votre session.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 w-full sm:w-auto">
              <a
                href="#accueil"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn-primary text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-xl whitespace-nowrap w-full sm:w-auto justify-center"
              >
                <CalendarDaysIcon className="w-5 h-5" />
                Réserver Maintenant
              </a>
              <a href="#contact" className="btn-outline text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-xl whitespace-nowrap w-full sm:w-auto justify-center">
                Nous Contacter
              </a>
            </div>
          </div>

          {/* Watermark */}
          <div className="absolute right-4 bottom-2 sm:right-8 sm:bottom-4 opacity-[0.04] pointer-events-none overflow-hidden">
            <div className="font-display text-5xl sm:text-8xl text-white tracking-widest">BLACKCUT</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
