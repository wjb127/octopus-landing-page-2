'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FranchiseSystemSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const headerVariants = {
    hidden: { 
      y: 30, 
      opacity: 0 
    },
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
    <section className="py-20 bg-gray-50" id="franchise-system">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 헤더 */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
          >
            <p className="text-lg text-gray-600 mb-2">성공 창업의 황금오션</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              황금쭈꾸미집의 <span className="text-red-600">프랜차이즈 시스템</span>
            </h2>
          </motion.div>

          {/* 메인 콘텐츠 */}
          <motion.div 
            className="grid lg:grid-cols-12 gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* 왼쪽 - 제목 */}
            <motion.div className="lg:col-span-3" variants={itemVariants}>
              <div className="border-l-4 border-red-600 pl-6">
                <p className="text-gray-700 text-lg mb-2">프랜차이즈 시스템</p>
                <h3 className="text-2xl font-bold text-red-600">FRANCHISE SYSTEM</h3>
              </div>
            </motion.div>

            {/* 오른쪽 - 품질관리 섹션 */}
            <motion.div className="lg:col-span-9" variants={itemVariants}>
              {/* 01 품질관리 헤더 */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-red-600 mr-4">01</span>
                  <h4 className="text-2xl font-bold text-gray-800">품질관리</h4>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-sm">동종 업계 중 최고의 원재료만을 공급하여,</p>
                  <p className="text-gray-600 text-sm">매뉴얼화된 품질관리 시스템으로 언제나 동일한 맛을 유지합니다.</p>
                </div>
              </div>

              {/* 3개 원형 이미지 */}
              <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
              >
                {/* 첫 번째 원형 이미지 */}
                <motion.div className="text-center" variants={itemVariants}>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                      <Image
                        src="/images/c86a37de188ad.png"
                        alt="최고 품질의 원재료 관리 및 공급"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                    최고 품질의<br />
                    원재료 관리 및<br />
                    공급
                  </p>
                </motion.div>

                {/* 두 번째 원형 이미지 */}
                <motion.div className="text-center" variants={itemVariants}>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                      <Image
                        src="/images/d2f6d31dc1a37.png"
                        alt="지속적인 레시피 개발 및 점포"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                    지속적인<br />
                    레시피 개발<br />
                    및 점포
                  </p>
                </motion.div>

                {/* 세 번째 원형 이미지 */}
                <motion.div className="text-center" variants={itemVariants}>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                      <Image
                        src="/images/6892d3c95a1c8.png"
                        alt="품질관리 시스템으로 향상 동일한 맛을 유지"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                    품질관리<br />
                    시스템으로<br />
                    향상 동일한<br />
                    맛을 유지
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}