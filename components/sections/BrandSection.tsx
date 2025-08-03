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
        duration: 0.6
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
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main Content - Text Left, Image Right */}
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center mb-16"
            variants={itemVariants}
          >
            {/* Left - Brand Story Text */}
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-8">
                  <Image
                    src="/images/b4201f868df71.png"
                    alt="황금쭈꾸미집 로고"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                    쭈꾸미집
                  </h2>
                </div>
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p>
                    <span className="font-semibold text-red-600">2011년</span>, 열정 가득한 청년이 시작한 창업은<br />
                    보란듯이 <span className="font-semibold">실패했습니다.</span>
                  </p>
                  <p>
                    저희는 아주 작은 부분부터 제품, 서비스, 맛까지<br />
                    수없는 시행착오로 <span className="font-semibold">10년의 세월</span>을 걸어왔습니다.
                  </p>
                  <p>
                    이제는 그 길에서 얻은 노하우로 <span className="font-semibold text-red-600">황금쭈꾸미집</span>의<br />
                    새로운 식구들과 함께 <span className="font-semibold">더 넓은 곳으로</span> 나아가고 싶습니다.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right - Brand Image */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/aff99ce23d431.png"
                  alt="황금쭈꾸미집 브랜드 소개"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>


          {/* Brand Promise Section */}
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 px-8 md:px-12 text-center"
            variants={itemVariants}
          >
            <div className="max-w-4xl mx-auto">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-white mb-8"
                variants={itemVariants}
              >
                대한민국 쭈꾸미 맛의 기준을 세우다
              </motion.h3>
            </div>
          </motion.div>

          {/* Success Secret Section */}
          <motion.div
            className="bg-gray-100 py-20 text-center"
            variants={itemVariants}
          >
            <div className="max-w-4xl mx-auto px-4">
              <motion.div
                className="mb-12"
                variants={itemVariants}
              >
                <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  손님이 끊이지 않는 <span className="text-red-600 border-2 border-red-600 px-4 py-2 rounded-full inline-block">식당의 비결</span>
                </h4>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
              >
                <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
                  음식에 대한진정성!
                </h2>
              </motion.div>
            </div>
          </motion.div>

          {/* First Authenticity Section */}
          <motion.div
            className="bg-gray-50 py-20"
            variants={itemVariants}
          >
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                className="grid lg:grid-cols-2 gap-16 items-center"
                variants={itemVariants}
              >
                {/* Left - Octopus Image with Vertical Text */}
                <motion.div
                  className="relative"
                  variants={itemVariants}
                >
                  <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    {/* Octopus Image */}
                    <Image
                      src="/images/05a959de74097.png"
                      alt="황금색 고리의 최상급 쭈꾸미"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  className="space-y-8"
                  variants={itemVariants}
                >
                  {/* Badge */}
                  <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
                    첫 번째 진정성
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                    황금색 고리의<br />
                    최상급 쭈꾸미
                  </h3>
                  
                  {/* Content */}
                  <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                    <p>
                      쭈꾸미의 <span className="font-semibold text-yellow-600">황금색 고리</span>는 최상급의 신선도를 의미합니다.
                    </p>
                    <p>
                      맛있는 쭈꾸미는 먹지 않고 보는 것만으로도 구별할 수 있습니다.
                    </p>
                    <p>
                      황금쭈꾸미집은 <span className="font-semibold text-red-600">황금색 고리</span>가 없는 쭈꾸미는 <span className="font-semibold">사용하지 않습니다</span>.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}