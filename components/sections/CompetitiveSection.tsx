'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, TrendingUp, Users, Zap } from 'lucide-react'

export default function CompetitiveSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6
      }
    }
  }

  const competitivePoints = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "10년 이상의 노하우",
      description: "검증된 운영 시스템과 축적된 경험으로 안정적인 사업 운영이 가능합니다."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "강력한 브랜드 파워",
      description: "차별화된 브랜드 아이덴티티와 높은 인지도로 고객 유치에 유리합니다."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "체계적인 지원 시스템",
      description: "창업부터 운영까지 단계별 맞춤 지원으로 성공적인 사업을 도와드립니다."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "차별화된 메뉴",
      description: "독자적인 레시피와 조리법으로 경쟁업체와 확실한 차별화를 실현합니다."
    }
  ]

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden"
      id="competitive"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/5ee1f4de0f2bb.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              황금쭈꾸미집의 강력한 경쟁력
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              10년 이상 진정성으로 운영해온 쭈꾸미집의 경쟁력은 
              강력한 프랜차이즈 시스템에 있습니다.
            </p>
            <motion.div
              className="w-24 h-1 bg-red-500 mx-auto mt-8"
              variants={itemVariants}
            />
          </motion.div>

          {/* Competitive Points Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {competitivePoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
              >
                <div className="text-red-400 mb-6">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {point.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Statistics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
          >
            {[
              { number: "10+", label: "운영 경력" },
              { number: "100+", label: "가맹점" },
              { number: "95%", label: "고객 만족도" },
              { number: "24/7", label: "지원 시스템" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-red-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-white/80 text-lg">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              지금 바로 시작하세요!
            </h3>
            <p className="text-xl text-white/90 mb-8">
              황금쭈꾸미집과 함께하는 성공적인 창업을 경험해보세요
            </p>
            <motion.button
              className="px-12 py-4 bg-red-600 text-white text-xl font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              창업 상담 신청
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-500/20 rounded-full"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}