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
              
              {/* 02 가맹교육 섹션 */}
              <motion.div 
                className="mt-16"
                initial="hidden"
                whileInView="visible" 
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
              >
                <motion.div className="mb-8" variants={itemVariants}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-red-600 mr-4">02</span>
                    <h4 className="text-2xl font-bold text-gray-800">가맹교육</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">10년간 쌓아온 데이터 기반의 운영 관리메뉴얼로</p>
                    <p className="text-gray-600 text-sm">효율적이고 전문적인 관리 능력 향상을 이끌어갑니다.</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-3 gap-8"
                  variants={containerVariants}
                >
                  <motion.div className="text-center" variants={itemVariants}>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                        <Image
                          src="/images/education-1.jpg"
                          alt="체계적인 교육 시스템"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                      체계적인<br />
                      교육 시스템
                    </p>
                  </motion.div>

                  <motion.div className="text-center" variants={itemVariants}>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                        <Image
                          src="/images/education-2.jpg"
                          alt="실무 중심 교육"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                      실무 중심<br />
                      교육
                    </p>
                  </motion.div>

                  <motion.div className="text-center" variants={itemVariants}>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                        <Image
                          src="/images/education-3.jpg"
                          alt="지속적인 관리"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                      지속적인<br />
                      관리
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* 03 상생전략 섹션 */}
              <motion.div 
                className="mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
              >
                <motion.div className="mb-8" variants={itemVariants}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-red-600 mr-4">03</span>
                    <h4 className="text-2xl font-bold text-gray-800">상생전략</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">본사와 가맹점간의 지속적인 소통으로,</p>
                    <p className="text-gray-600 text-sm">각 점포별 애로사항 파악 및 해결방안을 제시합니다.</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-3 gap-8"
                  variants={containerVariants}
                >
                  <motion.div className="text-center" variants={itemVariants}>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                        <Image
                          src="/images/partnership-1.jpg"
                          alt="지속적인 소통"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                      지속적인<br />
                      소통
                    </p>
                  </motion.div>

                  <motion.div className="text-center" variants={itemVariants}>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                        <Image
                          src="/images/partnership-2.jpg"
                          alt="문제해결 지원"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                      문제해결<br />
                      지원
                    </p>
                  </motion.div>

                  <motion.div className="text-center" variants={itemVariants}>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                        <Image
                          src="/images/partnership-3.jpg"
                          alt="상생 협력"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                      상생<br />
                      협력
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* 04 쉽고 빠른 창업 섹션 */}
              <motion.div 
                className="mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
              >
                <motion.div className="mb-8" variants={itemVariants}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-red-600 mr-4">04</span>
                    <h4 className="text-2xl font-bold text-gray-800">쉽고 빠른 창업</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">간편하고 체계적인 창업 시스템으로</p>
                    <p className="text-gray-600 text-sm">빠른 시일 내에 성공적인 오픈을 지원합니다.</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-3 gap-8"
                  variants={containerVariants}
                >
                  <motion.div className="text-center" variants={itemVariants}>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                        <Image
                          src="/images/startup-1.jpg"
                          alt="간편한 절차"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                      간편한<br />
                      절차
                    </p>
                  </motion.div>

                  <motion.div className="text-center" variants={itemVariants}>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                        <Image
                          src="/images/startup-2.jpg"
                          alt="빠른 오픈"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                      빠른<br />
                      오픈
                    </p>
                  </motion.div>

                  <motion.div className="text-center" variants={itemVariants}>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                        <Image
                          src="/images/startup-3.jpg"
                          alt="성공 지원"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                      성공<br />
                      지원
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}