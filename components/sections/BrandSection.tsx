'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function BrandSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="brand"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              황금쭈꾸미집
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              대한민국 쭈꾸미 맛의 기준을 세우다
            </p>
            <motion.div
              className="w-24 h-1 bg-red-600 mx-auto mt-8"
              variants={itemVariants}
            />
          </motion.div>

          {/* Main Brand Image */}
          <motion.div
            className="relative mb-16"
            variants={itemVariants}
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/aff99ce23d431.png"
                alt="황금쭈꾸미집 브랜드 소개"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  진정성 있는 맛
                </h3>
                <p className="text-lg md:text-xl opacity-90">
                  10년 이상의 노하우로 만들어낸 황금 레시피
                </p>
              </div>
            </div>
          </motion.div>

          {/* Brand Values */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {[
              {
                title: "엄선된 재료",
                description: "신선한 쭈꾸미와 최고급 재료만을 사용합니다",
                icon: "🦑"
              },
              {
                title: "황금 레시피",
                description: "10년간 연구개발한 비법 양념과 조리법",
                icon: "👨‍🍳"
              },
              {
                title: "정성스러운 서비스",
                description: "고객 한 분 한 분께 정성을 다하는 마음",
                icon: "❤️"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Brand Story */}
          <motion.div
            className="bg-red-50 rounded-2xl p-8 md:p-12"
            variants={itemVariants}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                브랜드 스토리
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                황금쭈꾸미집은 대한민국 최고의 쭈꾸미 전문점을 꿈꾸며 시작되었습니다. 
                오직 쭈꾸미만을 바라보는 '쭈편단심'의 마음으로, 
                언제나 변함없는 맛과 특별함을 선사하고자 합니다.
              </p>
              <motion.blockquote
                className="text-2xl md:text-3xl font-bold text-red-600 italic"
                variants={itemVariants}
              >
                "대한민국 쭈꾸미 맛의 기준을 세우다"
              </motion.blockquote>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}