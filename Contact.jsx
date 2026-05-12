import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from './Icons'

const contactInfo = [
  { icon: PhoneIcon, label: 'Téléphone', value: '+228 98 42 03 36', href: 'tel:+22890000000' },
  { icon: EnvelopeIcon, label: 'Email', value: 'contact@blackcut.tg', href: 'mailto:contact@blackcut.tg' },
  { icon: MapPinIcon, label: 'Adresse', value: '8023 Agoe-Legbassito, à 500 m du Supermarché Mavaley, Lomé', href: 'https://maps.google.com/?q=Agoe-Legbassito,+Lomé,+Togo' },
  { icon: ClockIcon, label: 'Horaires', value: 'Lun-Sam: 9h-19h • Dim: 10h-17h', href: '#' },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  )
}

const socials = [
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'TikTok', href: '#', Icon: TikTokIcon },
  { label: 'YouTube', href: '#', Icon: YouTubeIcon },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', subject: '' })
  const [sent, setSent] = useState(false)

  const handle = (f, v) => setForm((p) => ({ ...p, [f]: v }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(200,13,13,0.07), transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-2 sm:mb-3"
          >
            <div className="h-0.5 w-6 sm:w-8 bg-red-600 rounded" />
            <span className="text-red-500 text-[10px] sm:text-xs uppercase tracking-widest font-medium">Parlons-en</span>
            <div className="h-0.5 w-6 sm:w-8 bg-red-600 rounded" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl text-white"
          >
            Contactez-Nous
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-3 sm:gap-4 glass-card p-3 sm:p-4 group block"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass-red flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">{item.label}</div>
                    <div className="text-white text-xs sm:text-sm font-medium mt-0.5 leading-snug">{item.value}</div>
                  </div>
                </motion.a>
              )
            })}

            <div className="glass-card p-3 sm:p-4">
              <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-3">Suivez-nous</p>
              <div className="flex gap-2 sm:gap-3">
                {socials.map((item) => {
                  const SocialIcon = item.Icon
                  const socialLabel = item.label
                  const socialHref = item.href
                  return (
                    <a
                      key={socialLabel}
                      href={socialHref}
                      aria-label={socialLabel}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:border-red-700 hover:text-red-400 hover:bg-red-600/10 transition-all duration-200"
                    >
                      <SocialIcon />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8">
              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-6 sm:py-8"
                >
                  <CheckCircleIcon className="w-14 h-14 sm:w-16 sm:h-16 text-red-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">Message Envoyé!</h3>
                  <p className="text-gray-400 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '', subject: '' }) }}
                    className="btn-outline mt-5 text-sm"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">Nom Complet</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handle('name', e.target.value)}
                        placeholder="Jean Dupont"
                        required
                        className="w-full glass rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white border border-white/10 focus:outline-none focus:border-red-700 placeholder-gray-600"
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handle('email', e.target.value)}
                        placeholder="jean@exemple.com"
                        required
                        className="w-full glass rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white border border-white/10 focus:outline-none focus:border-red-700 placeholder-gray-600"
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">Sujet</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => handle('subject', e.target.value)}
                      placeholder="Demande de renseignements..."
                      className="w-full glass rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white border border-white/10 focus:outline-none focus:border-red-700 placeholder-gray-600"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handle('message', e.target.value)}
                      placeholder="Votre message..."
                      required
                      rows={4}
                      className="w-full glass rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white border border-white/10 focus:outline-none focus:border-red-700 placeholder-gray-600 resize-none"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-3 sm:py-4 rounded-xl text-sm sm:text-base">
                    Envoyer le Message →
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}