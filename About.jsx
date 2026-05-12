import { motion } from 'framer-motion'
import { ArrowRightIcon } from './Icons'

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      <div
        className="absolute right-0 bottom-0 w-48 h-48 rounded-full opacity-10 translate-x-1/3 translate-y-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c80d0d, transparent)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="h-0.5 w-6 sm:w-8 bg-red-600 rounded" />
              <span className="text-red-500 text-[10px] sm:text-xs uppercase tracking-widest font-medium">Notre Histoire</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-white mb-4 sm:mb-6 leading-tight">
              À Propos de<br />
              <span className="text-gradient">Blackcut</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
              Chez Blackcut Barbershop, nous combinons précision, style et culture pour offrir
              une expérience de soin irréprochable. Nos barbiers ne sont pas seulement des experts —
              ce sont des artistes qui comprennent que chaque coupe raconte une histoire.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Fondé avec la passion du style masculin authentique, Blackcut est devenu
              le rendez-vous incontournable pour les hommes qui exigent l'excellence.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6 mb-6 sm:mb-8">
              {[
                { val: '5+', label: "Années d'Excellence" },
                { val: '5000+', label: 'Clients Satisfaits' },
                { val: '10+', label: 'Barbiers Experts' },
                { val: '98%', label: 'Satisfaction' },
              ].map((s) => (
                <div key={s.label} className="min-w-0">
                  <div className="font-display text-xl sm:text-3xl text-red-500">{s.val}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <a href="#reserver" className="btn-primary inline-flex">
              En Savoir Plus
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-0 pb-8 sm:pb-0"
          >
            <div className="glass-card p-5 sm:p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{ background: 'radial-gradient(circle at 80% 20%, #c80d0d, transparent 60%)' }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#c80d0d,#ff3333)' }}
                >
                  <span className="text-2xl sm:text-4xl">✂️</span>
                </div>
                <h3 className="font-display text-xl sm:text-3xl text-white text-center mb-0.5">BLACKCUT</h3>
                <p className="text-red-400 text-center text-[9px] sm:text-xs tracking-[3px] sm:tracking-[4px] uppercase mb-5 sm:mb-8">Barbershop</p>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    { title: 'Précision', desc: 'Chaque coupe exécutée avec un soin minutieux' },
                    { title: 'Style', desc: 'Des tendances modernes aux classiques intemporels' },
                    { title: 'Culture', desc: "Un espace de partage et d'expression authentique" },
                  ].map((v, i) => (
                    <motion.div
                      key={v.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-red-600/20 border border-red-700/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-white font-semibold text-xs sm:text-sm">{v.title}</div>
                        <div className="text-gray-500 text-[10px] sm:text-xs">{v.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 left-3 translate-y-1/2 sm:-bottom-6 sm:-left-6 glass-card px-3 sm:px-5 py-2 sm:py-3 red-glow"
            >
              <div className="text-yellow-400 text-[10px] sm:text-xs font-bold">★★★★★</div>
              <div className="text-white text-xs sm:text-sm font-semibold">Noté 5/5</div>
              <div className="text-gray-500 text-[9px] sm:text-[10px]">par 500+ clients</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}