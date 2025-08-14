'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const footerSections = [
    {
      title: '브랜드',
      links: [
        { name: '브랜드 소개', href: '#brand' },
        { name: '경쟁력', href: '#competitive' },
        { name: '메뉴 안내', href: '#menu' },
        { name: '매장 찾기', href: '#' }
      ]
    },
    {
      title: '창업 안내',
      links: [
        { name: '창업 절차', href: '#franchise' },
        { name: '창업 비용', href: '#franchise' },
        { name: '상권 분석', href: '#' },
        { name: '성공 사례', href: '#' }
      ]
    },
    {
      title: '고객 지원',
      links: [
        { name: '창업 문의', href: '#contact' },
        { name: '자주 묻는 질문', href: '#' },
        { name: '공지사항', href: '#' },
        { name: '이벤트', href: '#' }
      ]
    }
  ]


  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', name: 'Youtube' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <div className="mb-6">
                <Image
                  src="/images/e9c9fbfb95f43.png"
                  alt="황금쭈꾸미집"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                대한민국 쭈꾸미 맛의 기준을 세우는 황금쭈꾸미집과 함께 
                성공적인 창업의 꿈을 실현하세요.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h3 className="text-xl font-bold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>



          {/* Bottom Footer */}
          <motion.div
            className="pt-8 border-t border-gray-800"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-6 mb-4">
              <div className="flex space-x-4 text-sm">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  이용약관
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  개인정보처리방침
                </motion.a>
              </div>
            </div>
            
            <div className="text-gray-400 text-sm space-y-1">
              <p>사업자번호 : 754-88-01536   |   대표 : 유지원</p>
              <p>주소 : 대구광역시 수성구 청수로9길 39, 1층(중동)</p>
              <p>대표번호 & 창업문의 : 010-7206-0066</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}