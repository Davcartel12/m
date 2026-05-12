import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryItems = [
  { id: 1, style: 'Dégradé Américain', tag: 'Fade', gradient: 'from-zinc-900 via-zinc-800 to-zinc-700' },
  { id: 2, style: 'Coupe Classique', tag: 'Classic', gradient: 'from-stone-900 via-stone-800 to-stone-600' },
  { id: 3, style: 'Taper Fade', tag: 'Taper', gradient: 'from-neutral-900 via-neutral-700 to-neutral-600' },
  { id: 4, style: 'Barbe Sculptée', tag: 'Barbe', gradient: 'from-zinc-900 via-zinc-700 to-zinc-500' },
  { id: 5, style: 'Burst Fade', tag: 'Fade', gradient: 'from-gray-900 via-gray-700 to-gray-600' },
  { id: 6, style: 'Afro Texture', tag: 'Texture', gradient: 'from-stone-900 via-zinc-800 to-neutral-700' },
]

const tags = ['Tout', 'Fade', 'Classic', 'Taper', 'Barbe', 'Texture']

export default function Gallery() {
  const [active, setActive] = useState('Tout')
  const [enlarged, setEnlarged] = useState(null)

  const filtered = active === 'Tout' ? galleryItems : galleryItems.filter((g) => g.tag === active)

  return (
    <section id="galerie" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-2 sm:mb-3"
            >
              <div className="h-0.5 w-6 sm:w-8 bg-red-600 rounded" />
              <span className="text-red-500 text-[10px] sm:text-xs uppercase tracking-widest font-medium">Notre Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl text-white"
            >
              Notre Travail
            </motion.h2>
          </div>

          {/* Filter tabs — horizontally scrollable on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none -mx-4 sm:mx-0 px-4 sm:px-0">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-200 border flex-shrink-0 ${
                  active === tag
                    ? 'border-red-600 bg-red-600/20 text-red-400'
                    : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid — 2 cols always, gap responsive */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setEnlarged(item)}
                className="relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden group aspect-[3/4]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 40%, rgba(200,13,13,0.3) 0%, transparent 50%),
                      radial-gradient(circle at 70% 60%, rgba(0,0,0,0.5) 0%, transparent 50%)`
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span className="text-6xl sm:text-8xl">✂</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-all duration-300" />
                {/* Info */}
                <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-[9px] sm:text-xs text-red-400 font-medium">{item.tag}</span>
                  <p className="text-white font-semibold text-xs sm:text-sm">{item.style}</p>
                </div>
                {/* Tag badge */}
                <div className="absolute top-2 left-2 glass rounded-full px-1.5 py-0.5">
                  <span className="text-[9px] sm:text-[10px] text-gray-300">{item.tag}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-6 sm:mt-10"
        >
          <a href="#reserver" className="btn-outline text-sm">Voir la Galerie Complète →</a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {enlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 bg-black/85 backdrop-blur-sm"
            onClick={() => setEnlarged(null)}
          >
            <motion.div
              initial={{ y: '100%', scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: '100%', scale: 0.9 }}
              className={`relative rounded-t-3xl sm:rounded-2xl overflow-hidden w-full sm:w-72 sm:h-[400px] bg-gradient-to-br ${enlarged.gradient}`}
              style={{ maxHeight: '70vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[3/4] sm:h-full relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                  <span className="text-8xl sm:text-[120px]">✂</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 glass p-4 sm:p-5">
                  <span className="text-red-400 text-xs font-medium">{enlarged.tag}</span>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2">{enlarged.style}</h3>
                  <button className="btn-primary w-full justify-center py-2.5 text-sm rounded-xl">
                    Réserver ce Style
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
