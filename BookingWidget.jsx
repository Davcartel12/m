import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon as CalendarDaysIcon, ClockIcon, ChevronDownIcon, XIcon as XMarkIcon, CheckCircleIcon } from './Icons'

const services = [
  { name: 'Coupe Classique', price: '1 000 FCFA', duration: '30 min' },
  { name: 'Dégradé Américain', price: '1 000 FCFA', duration: '45 min' },
  { name: 'Taille de Barbe', price: '1 000 FCFA', duration: '20 min' },
  { name: 'Serviette Chaude', price: '1 000 FCFA', duration: '15 min' },
  { name: 'Coupe Enfant', price: '500 FCFA', duration: '25 min' },
  { name: 'Soin Complet', price: '1 000 FCFA', duration: '75 min' },
]

const barbers = [
  { name: 'Marcus', initials: 'M', specialty: 'Fade & Taper' },
  { name: 'Julien', initials: 'J', specialty: 'Barbe & Rasage' },
  { name: 'Théo', initials: 'T', specialty: 'Classiques' },
  { name: 'Karim', initials: 'K', specialty: 'Design' },
]

const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']

export default function BookingWidget({ inline = false, onClose }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ service: '', barber: '', date: '', time: '', name: '', phone: '' })
  const [done, setDone] = useState(false)

  const handle = (field, val) => setForm((p) => ({ ...p, [field]: val }))

  const submitBooking = () => {
    if (!form.service || !form.barber || !form.date || !form.time) return
    setDone(true)
  }

  if (done) {
    return (
      <div className="glass-card p-6 sm:p-8 text-center w-full">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-4">
          <CheckCircleIcon className="w-14 h-14 sm:w-16 sm:h-16 text-red-500 mx-auto" />
        </motion.div>
        <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">Réservation Confirmée!</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          Rendez-vous le <span className="text-red-400">{form.date}</span> à{' '}
          <span className="text-red-400">{form.time}</span> avec <span className="text-red-400">{form.barber}</span>.
        </p>
        <button
          className="btn-primary w-full justify-center py-3"
          onClick={() => {
            setDone(false)
            setStep(1)
            setForm({ service: '', barber: '', date: '', time: '', name: '', phone: '' })
            if (onClose) onClose()
          }}
        >
          Nouvelle Réservation
        </button>
      </div>
    )
  }

  return (
    <div className="glass-card w-full">
      {onClose && (
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>
      )}

      <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
            <h3 className="font-semibold text-white text-base sm:text-lg">Réserver un Rendez-vous</h3>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-1 mt-3">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-1">
              <div
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step >= s ? 'text-white' : 'bg-white/5 text-gray-500'
                  }`}
                style={step >= s ? { background: 'linear-gradient(135deg,#c80d0d,#ff3333)' } : {}}
              >
                {s}
              </div>
              {s < 3 && (
                <div className={`h-0.5 w-8 sm:w-10 rounded transition-all duration-300 ${step > s ? 'bg-red-600' : 'bg-white/10'}`} />
              )}
            </div>
          ))}
          <div className="ml-2 text-[10px] sm:text-xs text-gray-500">
            {step === 1 ? 'Service & Barbier' : step === 2 ? 'Date & Heure' : 'Vos Infos'}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div>
              <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-2 block">Service</label>
              <div className="relative">
                <select
                  value={form.service}
                  onChange={(e) => handle('service', e.target.value)}
                  className="w-full glass rounded-xl px-3 sm:px-4 py-3 text-sm text-white appearance-none pr-10 focus:outline-none focus:border-red-700 border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <option value="" className="bg-[#111]">Choisir un service...</option>
                  {services.map((s) => {
                    const sName = s.name
                    const sPrice = s.price
                    const sDuration = s.duration
                    return (
                      <option key={sName} value={sName} className="bg-[#111]">
                        {sName} — {sPrice} ({sDuration})
                      </option>
                    )
                  })}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-2 block">Barbier</label>
              <div className="grid grid-cols-2 gap-2">
                {barbers.map((b) => {
                  const bName = b.name
                  const bInitials = b.initials
                  const bSpecialty = b.specialty
                  return (
                    <button
                      key={bName}
                      onClick={() => handle('barber', bName)}
                      className={`flex items-center gap-2 p-2.5 sm:p-3 rounded-xl border transition-all duration-200 text-left ${form.barber === bName
                          ? 'border-red-600 bg-red-600/10'
                          : 'border-white/10 hover:border-white/30'
                        }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${form.barber === bName ? 'bg-red-600 text-white' : 'bg-white/10 text-gray-300'
                        }`}>
                        {bInitials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-medium text-white truncate">{bName}</div>
                        <div className="text-[9px] sm:text-[10px] text-gray-500 truncate">{bSpecialty}</div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div>
              <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-2 block">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => handle('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full glass rounded-xl px-4 py-3 text-sm text-white border border-white/10 focus:outline-none focus:border-red-700"
                style={{ background: 'rgba(255,255,255,0.04)', colorScheme: 'dark' }}
              />
            </div>
            <div>
              <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-2 block">Heure Disponible</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => handle('time', t)}
                    className={`py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${form.time === t
                        ? 'border-red-600 bg-red-600/20 text-red-400'
                        : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                      }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div className="glass rounded-xl p-3 sm:p-4 space-y-1.5 text-sm border border-white/5">
              <h4 className="text-red-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider mb-2">Résumé</h4>
              {[
                ['Service', form.service],
                ['Barbier', form.barber],
                ['Date', form.date],
                ['Heure', form.time],
              ].map((pair) => {
                const pairKey = pair[0]
                const pairVal = pair[1]
                return (
                  <div key={pairKey} className="flex justify-between items-center gap-2">
                    <span className="text-gray-400 text-xs flex-shrink-0">{pairKey}:</span>
                    <span className="text-white text-xs font-medium text-right truncate">{pairVal || '—'}</span>
                  </div>
                )
              })}
            </div>
            <div>
              <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">Votre Nom</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handle('name', e.target.value)}
                placeholder="Jean Dupont"
                className="w-full glass rounded-xl px-4 py-3 text-sm text-white border border-white/10 focus:outline-none focus:border-red-700 placeholder-gray-600"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              />
            </div>
            <div>
              <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">Téléphone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handle('phone', e.target.value)}
                placeholder="+228 90 00 00 00"
                className="w-full glass rounded-xl px-4 py-3 text-sm text-white border border-white/10 focus:outline-none focus:border-red-700 placeholder-gray-600"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              />
            </div>
          </motion.div>
        )}

        <div className="flex gap-3 pt-1">
          {step > 1 && (
            <button
              onClick={() => setStep((p) => p - 1)}
              className="flex-1 py-3 rounded-xl border border-white/10 text-sm text-gray-300 hover:border-white/30 transition-all"
            >
              ← Retour
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => setStep((p) => p + 1)}
              disabled={step === 1 ? !form.service || !form.barber : !form.date || !form.time}
              className="flex-1 btn-primary justify-center py-3 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none text-sm"
            >
              Suivant →
            </button>
          ) : (
            <button
              onClick={submitBooking}
              className="flex-1 btn-primary justify-center py-3 rounded-xl text-sm"
            >
              Confirmer
            </button>
          )}
        </div>
      </div>
    </div>
  )
}