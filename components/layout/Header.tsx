'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'index', label: '브랜드소개' },
    { id: '15', label: '경쟁력' },
    { id: 'menu', label: '메뉴 안내' },
    { id: '16', label: '창업 안내' },
    { id: '17', label: '창업 문의' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('index')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/e9c9fbfb95f43.png"
              alt="황금쭈꾸미집"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`relative px-4 py-2 text-lg font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
                onClick={() => onNavigate(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/d026e3399a332.png"
                alt="전국 가맹문의 1577-6615"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-sm rounded-b-lg">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`block w-full text-left px-4 py-3 text-lg font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-800 hover:text-red-600 hover:bg-gray-50'
                }`}
                onClick={() => {
                  onNavigate(item.id)
                  setIsMobileMenuOpen(false)
                }}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="px-4 py-3 border-t border-gray-200">
              <p className="text-sm text-gray-600">전국 가맹문의</p>
              <p className="text-xl font-bold text-red-600">1577-6615</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}