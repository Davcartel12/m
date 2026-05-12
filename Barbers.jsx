import { motion } from 'framer-motion'

const barbers = [
  { name: 'Marcus D.', role: 'Maître Barbier', specialty: 'Fade & Taper', exp: '8 ans', initials: 'MD', rating: 4.9, cuts: 3200, color: 'from-red-800 to-red-600' },
  { name: 'Julien M.', role: 'Expert Barbe', specialty: 'Barbe & Rasage Classique', exp: '6 ans', initials: 'JM', rating: 4.8, cuts: 2800, color: 'from-rose-900 to-red-700' },
  { name: 'Théo B.', role: 'Styliste', specialty: 'Coupes Modernes', exp: '5 ans', initials: 'TB', rating: 4.9, cuts: 2100, color: 'from-red-900 to-rose-600' },
  { name: 'Karim L.', role: 'Artiste Cheveux', specialty: 'Design & Lignes', exp: '7 ans', initials: 'KL', rating: 5.0, cuts: 2600, color: 'from-red-700 to-orange-700' },
]

export default function Barbers() {
  return (
    <section id="barbiers" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      <div
        className="absolute right-0 top-1/2 w-48 h-48 rounded-full opacity-10 translate-x-1/3 -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c80d0d, transparent)', filter: 'blur(70px)' }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-2 sm:mb-3"
          >
            <div className="h-0.5 w-6 sm:w-8 bg-red-600 rounded" />
            <span className="text-red-500 text-[10px] sm:text-xs uppercase tracking-widest font-medium">Notre Équipe</span>
            <div className="h-0.5 w-6 sm:w-8 bg-red-600 rounded" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl text-white"
          >
            Nos Barbiers Experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3 max-w-xs sm:max-w-xl mx-auto"
          >
            Des artistes passionnés qui transforment chaque visite en expérience unique
          </motion.p>
        </div>

        {/* Grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {barbers.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group cursor-pointer min-w-0"
            >
              {/* Avatar banner */}
              <div className={`h-24 sm:h-40 bg-gradient-to-br ${b.color} relative flex items-center justify-center`}>
                <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-black/30 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center">
                  <span className="font-display text-lg sm:text-3xl text-white">{b.initials}</span>
                </div>
                <div className="absolute top-2 right-2 glass rounded-full px-1.5 py-0.5 flex items-center gap-0.5">
                  <span className="text-yellow-400 text-[9px]">★</span>
                  <span className="text-white text-[9px] sm:text-[10px] font-semibold">{b.rating}</span>
                </div>
              </div>

              <div className="p-2.5 sm:p-5">
                <h3 className="text-white font-bold text-xs sm:text-lg leading-tight truncate">{b.name}</h3>
                <p className="text-red-400 text-[9px] sm:text-xs font-medium mb-0.5 sm:mb-1 truncate">{b.role}</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4 hidden sm:block">{b.specialty}</p>

                <div className="flex justify-between text-center mb-2.5 sm:mb-4">
                  <div>
                    <div className="text-white font-bold text-xs sm:text-base">{b.exp}</div>
                    <div className="text-gray-600 text-[8px] sm:text-[10px]">Exp.</div>
                  </div>
                  <div className="w-px bg-white/5" />
                  <div>
                    <div className="text-white font-bold text-xs sm:text-base">{(b.cuts / 1000).toFixed(1)}k</div>
                    <div className="text-gray-600 text-[8px] sm:text-[10px]">Coupes</div>
                  </div>
                </div>

                <button className="w-full py-1.5 sm:py-2 rounded-xl text-[9px] sm:text-xs font-semibold text-white transition-all duration-300
                  border border-red-700/50 hover:bg-red-600 hover:border-red-600">
                  Réserver
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}