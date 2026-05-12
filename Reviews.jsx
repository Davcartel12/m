import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

const reviews = [
  { name: 'James K.', initials: 'JK', rating: 5, text: 'Le meilleur barbershop de la ville! L\'attention aux détails est incomparable. Marcus m\'a fait une coupe parfaite.', date: 'Il y a 2 jours', service: 'Dégradé Américain' },
  { name: 'Michaël T.', initials: 'MT', rating: 5, text: 'Ambiance incroyable, barbiers très compétents, je pars toujours satisfait. Je recommande vivement Blackcut!', date: 'Il y a 1 semaine', service: 'Coupe Classique' },
  { name: 'Daniel O.', initials: 'DO', rating: 5, text: 'Je viens chez Blackcut depuis plus d\'un an. Cohérence et excellence à chaque visite. Karim est un vrai artiste!', date: 'Il y a 2 semaines', service: 'Design & Lignes' },
  { name: 'Raphaël M.', initials: 'RM', rating: 5, text: 'L\'expérience Blackcut est unique. Le cadre est luxueux, le personnel accueillant. Julien a transformé ma barbe!', date: 'Il y a 3 semaines', service: 'Taille de Barbe' },
  { name: 'Antoine B.', initials: 'AB', rating: 5, text: 'Premier rendez-vous hier et je suis complètement conquis. La qualité de service est exceptionnelle.', date: 'Il y a 1 mois', service: 'Soin Complet' },
]

export default function Reviews() {
  const [idx, setIdx] = useState(0)

  // Responsive: 1 card on mobile, 2 on md, 3 on lg
  const getVisible = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
    }
    return 1
  }

  const prev = () => setIdx((p) => Math.max(0, p - 1))
  const next = () => setIdx((p) => Math.min(reviews.length - 1, p + 1))

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full">
      <div
        className="absolute left-1/2 top-0 w-48 h-32 opacity-10 -translate-x-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #c80d0d, transparent)', filter: 'blur(50px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-2 sm:mb-3"
            >
              <div className="h-0.5 w-6 sm:w-8 bg-red-600 rounded" />
              <span className="text-red-500 text-[10px] sm:text-xs uppercase tracking-widest font-medium">Témoignages</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl text-white"
            >
              Ce Que Disent<br className="sm:hidden" /> Nos Clients
            </motion.h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={idx === 0}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400
                hover:border-red-700 hover:text-red-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={next}
              disabled={idx >= reviews.length - 1}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400
                hover:border-red-700 hover:text-red-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Cards — single card visible on mobile with smooth slide */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-4 sm:p-6 md:hidden"
            >
              <ReviewCard review={reviews[idx]} />
            </motion.div>
          </AnimatePresence>

          {/* Desktop: multi-card slider */}
          <div className="hidden md:block overflow-hidden">
            <motion.div
              animate={{ x: `-${idx * (100 / 3)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex gap-5"
            >
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ minWidth: 'calc(33.333% - 14px)' }}
                  className="glass-card p-6 flex-shrink-0"
                >
                  <ReviewCard review={r} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 ${
                i === idx ? 'w-6 h-2 bg-red-600' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review: r }) {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        <div
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#c80d0d,#ff3333)' }}
        >
          {r.initials}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{r.name}</div>
          <div className="text-gray-500 text-[10px] sm:text-xs">{r.date}</div>
        </div>
      </div>
      <div className="flex gap-0.5 mb-2 sm:mb-3">
        {[...Array(r.rating)].map((_, j) => (
          <span key={j} className="text-yellow-400 text-xs sm:text-sm">★</span>
        ))}
      </div>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">"{r.text}"</p>
      <div className="glass rounded-lg px-2.5 py-1 inline-block">
        <span className="text-red-400 text-[9px] sm:text-[10px] font-medium">{r.service}</span>
      </div>
    </>
  )
}
