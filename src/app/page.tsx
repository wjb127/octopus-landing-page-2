'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import HeroSection from '../../components/sections/HeroSection'
import BrandSection from '../../components/sections/BrandSection'
import StoreAtmosphereSection from '../../components/sections/StoreAtmosphereSection'
import PhilosophySection from '../../components/sections/PhilosophySection'
import CompetitiveAdvantageSection from '../../components/sections/CompetitiveAdvantageSection'
import ProfitAnalysisSection from '../../components/sections/ProfitAnalysisSection'
import SuccessFormulaSection from '../../components/sections/SuccessFormulaSection'
import MenuSection from '../../components/sections/MenuSection'
import FranchiseSection from '../../components/sections/FranchiseSection'
import ContactSection from '../../components/sections/ContactSection'
import ConsultationSection from '../../components/sections/ConsultationSection'
import BottomContactForm from '../../components/ui/BottomContactForm'
import FixedBottomForm from '../../components/ui/FixedBottomForm'

export default function Home() {
  const [activeSection, setActiveSection] = useState('index')

  const sections = useMemo(() => [
    { id: 'index', component: HeroSection },
    { id: 'brand', component: BrandSection },
    { id: 'menu', component: MenuSection },
    { id: '16', component: FranchiseSection },
    { id: '17', component: ContactSection },
  ], [])

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(
      sectionId === 'index' ? 'hero' : sectionId === '16' ? 'franchise' : sectionId === '17' ? 'contact' : sectionId
    )
    
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      sections.forEach(({ id }) => {
        const elementId = id === 'index' ? 'hero' : id === '16' ? 'franchise' : id === '17' ? 'contact' : id
        const element = document.getElementById(elementId)
        
        if (element) {
          const { offsetTop, offsetHeight } = element
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        {/* Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* Brand Section */}
        <div id="brand">
          <BrandSection />
        </div>

        {/* Store Atmosphere Section */}
        <div id="store-atmosphere">
          <StoreAtmosphereSection />
        </div>

        {/* Philosophy Section */}
        <div id="philosophy">
          <PhilosophySection />
        </div>

        {/* Competitive Advantage Section */}
        <div id="competitive-advantage">
          <CompetitiveAdvantageSection />
        </div>

        {/* Profit Analysis Section */}
        <div id="profit-analysis">
          <ProfitAnalysisSection />
        </div>

        {/* Success Formula Section */}
        <div id="success-formula">
          <SuccessFormulaSection />
        </div>

        {/* Menu Section */}
        <div id="menu">
          <MenuSection />
        </div>

        {/* Franchise Section */}
        <div id="franchise">
          <FranchiseSection />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>

        {/* Consultation Section */}
        <div id="consultation">
          <ConsultationSection />
        </div>
      </main>

      <Footer />

      {/* Bottom Contact Form */}
      <BottomContactForm />

      {/* Fixed Bottom Form */}
      <FixedBottomForm />

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-24 left-6 w-12 h-12 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </div>
  )
}
