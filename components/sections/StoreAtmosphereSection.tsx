'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function StoreAtmosphereSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }
  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } }
  }
  const zoomInVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } }
  }
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // 매장 이미지들
  const storeImages = [
    {
      src: "/images/store-front-day.png", // 주간 매장 외관 이미지
      alt: "황금쭈꾸미집 매장 외관"
    },
    {
      src: "/images/e08a8254ed5ca.png", // 실제 매장 내부 이미지
      alt: "황금쭈꾸미집 매장 내부"
    },
    {
      src: "/images/store-night-exterior.png", // 야간 매장 외관 이미지
      alt: "황금쭈꾸미집 야간 매장 외관"
    },
    {
      src: "/images/store-interior-2.png", // 매장 내부 다른 각도
      alt: "황금쭈꾸미집 매장 내부 - 테이블과 냉장고"
    }
  ]

  // 자동 슬라이드 효과
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storeImages.length)
    }, 3000) // 3초마다 변경

    return () => clearInterval(timer)
  }, [storeImages.length])

  return (
    <section className="relative overflow-hidden" id="store-atmosphere">
      {/* 메인 타이틀 섹션 - 황금색 배경 */}
      <motion.div
        className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* 좌측 원형 로고 이미지 - 모바일에서 숨김 */}
        <div className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 w-32 h-32 md:w-48 md:h-48">
          <Image
            src="/images/e94a4a8e9a1d6.png"
            alt="황금쭈꾸미집 로고"
            fill
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div className="max-w-4xl mx-auto" variants={containerVariants}>
            <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4" variants={itemVariants}>
              깔끔하고 따뜻한 분위기의
            </motion.h2>
            <motion.div className="flex items-center justify-center gap-4 mb-8" variants={itemVariants}>
              <div className="h-1 w-16 md:w-24 bg-red-600"></div>
              <motion.h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-600" variants={zoomInVariants}>
                완벽한 쭈꾸미집!
              </motion.h3>
              <div className="h-1 w-16 md:w-24 bg-red-600"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* 슬라이드 이미지 섹션 */}
      <motion.div
        className="relative bg-yellow-400 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 이미지 슬라이더 */}
            <motion.div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl" variants={zoomInVariants}>
              {storeImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              
              {/* 슬라이드 인디케이터 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {storeImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

              {/* 이전/다음 버튼 */}
              <motion.button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + storeImages.length) % storeImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                ←
              </motion.button>
              <motion.button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % storeImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                →
              </motion.button>
            </motion.div>

            {/* 슬라이드 카운터 */}
            <motion.div className="text-center mt-6" variants={itemVariants}>
              <span className="text-gray-700 font-medium">
                {currentSlide + 1} / {storeImages.length}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}