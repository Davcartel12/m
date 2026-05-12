import { motion } from 'framer-motion'

const services = [
  { icon: '✂️', name: 'Coupe Classique', desc: 'Coupe traditionnelle nette', price: '1 000 FCFA' },
  { icon: '💈', name: 'Dégradé Américain', desc: 'Fondu parfait, style moderne', price: '1 000 FCFA' },
  { icon: '🪒', name: 'Taille de Barbe', desc: 'Sculpter et définir votre barbe', price: '1 000 FCFA' },
  { icon: '🌿', name: 'Serviette Chaude', desc: 'Rasage traditionnel relaxant', price: '1 000 FCFA' },
  { icon: '⬆️', name: 'Mise en Forme', desc: 'Ligne et contours parfaits', price: '1 000 FCFA' },
  { icon: '👦', name: 'Coupe Enfant', desc: 'Coupes adaptées aux juniors', price: '500 FCFA' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full">
      <div
        className="absolute left-0 top-1/2 w-40 h-40 rounded-full opacity-10 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c80d0d, transparent)', filter: 'blur(50px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-2 sm:mb-3"
            >
              <div className="h-0.5 w-6 sm:w-8 bg-red-600 rounded" />
              <span className="text-red-500 text-[10px] sm:text-xs uppercase tracking-widest font-medium">Ce que nous offrons</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl text-white"
            >
              Nos Services
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#reserver"
            className="btn-outline text-sm self-start sm:self-auto"
          >
            Voir Tout
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-4 sm:p-5 group cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-red flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 group-hover:scale-110">
                  {s.icon}
                </div>
                <span className="text-xs text-red-400 font-semibold mt-1">{s.price}</span>
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{s.name}</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{s.desc}</p>
              <button className="w-full py-2 rounded-lg text-xs font-medium border border-white/10 text-gray-400
                hover:border-red-700 hover:text-red-400 hover:bg-red-600/5 transition-all duration-200">
                Réserver
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}