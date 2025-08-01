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

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: '대표 전화',
      content: '1577-6615'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: '이메일',
      content: 'info@24khouses.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: '본사 주소',
      content: '서울특별시 강남구'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: '상담 시간',
      content: '평일 09:00-18:00'
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
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
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

          {/* Contact Information */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 p-8 bg-gray-800 rounded-xl"
            variants={itemVariants}
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="text-red-500 mt-1">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{info.title}</h4>
                  <p className="text-gray-400 text-sm">{info.content}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 mb-12"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              지금 바로 창업 상담을 신청하세요!
            </h3>
            <p className="text-xl mb-6 opacity-90">
              전문 상담사가 성공적인 창업을 위해 도움을 드립니다
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                className="px-8 py-3 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                온라인 상담 신청
              </motion.button>
              <div className="text-center">
                <p className="text-sm opacity-80">전국 가맹문의</p>
                <p className="text-2xl font-bold">1577-6615</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 황금쭈꾸미집. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  개인정보처리방침
                </motion.a>
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
                  사업자정보
                </motion.a>
              </div>
            </div>
            
            <div className="text-gray-400 text-sm">
              <p>사업자등록번호: 123-45-67890</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}