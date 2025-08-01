'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { DollarSign, TrendingUp, HeadphonesIcon, MapPin, Clock, Award } from 'lucide-react'

export default function FranchiseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const franchiseFeatures = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: '합리적인 창업비용',
      description: '적은 초기 투자로 안정적인 수익 창출이 가능합니다',
      detail: '창업비용 5,000만원부터'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '높은 수익성',
      description: '검증된 비즈니스 모델로 안정적인 매출을 보장합니다',
      detail: '평균 월매출 2,000만원'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: '체계적인 지원',
      description: '창업부터 운영까지 전 과정을 완벽하게 서포트합니다',
      detail: '24시간 상담 지원'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: '입지 분석',
      description: '데이터 기반의 정확한 상권 분석으로 최적의 입지를 제안합니다',
      detail: '전문 입지 컨설팅'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '빠른 오픈',
      description: '체계적인 시스템으로 신속한 매장 오픈이 가능합니다',
      detail: '계약 후 30일 내 오픈'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '브랜드 신뢰도',
      description: '10년 이상의 운영 노하우로 검증된 브랜드입니다',
      detail: '가맹점 만족도 95%'
    }
  ]

  const processSteps = [
    { step: '01', title: '상담 신청', description: '온라인 또는 전화로 창업 상담을 신청하세요' },
    { step: '02', title: '사업 설명회', description: '브랜드 소개와 사업 모델에 대해 자세히 설명드립니다' },
    { step: '03', title: '입지 분석', description: '전문가가 최적의 매장 입지를 분석해드립니다' },
    { step: '04', title: '계약 체결', description: '조건 협의 후 가맹계약을 체결합니다' },
    { step: '05', title: '매장 준비', description: '인테리어부터 장비 설치까지 완벽하게 준비합니다' },
    { step: '06', title: '교육 및 오픈', description: '운영 교육 후 성공적인 매장 오픈을 지원합니다' }
  ]

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

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden"
      id="franchise"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/e08a8254ed5ca.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
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
              창업 안내
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              황금쭈꾸미집과 함께하는 성공적인 창업의 첫걸음을 시작하세요
            </p>
            <motion.div
              className="w-24 h-1 bg-red-500 mx-auto mt-8"
              variants={itemVariants}
            />
          </motion.div>

          {/* Franchise Features */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
          >
            {franchiseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-red-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-red-300 font-semibold">
                  {feature.detail}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            className="mb-16"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              창업 프로세스
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
                    <div className="text-4xl font-bold text-red-400 mb-4">
                      {step.step}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connection Line (hidden on mobile) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-red-400/50" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              지금 바로 창업 상담을 받아보세요!
            </h3>
            <p className="text-xl text-white/90 mb-8">
              성공적인 창업을 위한 전문 상담을 무료로 제공해드립니다
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                className="px-12 py-4 bg-red-600 text-white text-xl font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                온라인 상담 신청
              </motion.button>
              
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-white/80 text-lg mb-2">전국 가맹문의</p>
                <p className="text-3xl font-bold text-white">1577-6615</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}