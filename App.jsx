import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Barbers from './components/Barbers'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: 'left',
        background: 'linear-gradient(90deg, #c80d0d, #ff6464)',
        height: '3px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    />
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full" style={{ backgroundColor: '#0a0a0a' }}>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Barbers />
        <div className="section-divider" />
        <Gallery />
        <div className="section-divider" />
        <Reviews />
        <div className="section-divider" />
        <CTA />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
