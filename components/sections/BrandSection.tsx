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
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
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

          {/* Main Content - Text Left, Image Right */}
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center mb-16"
            variants={itemVariants}
          >
            {/* Left - Brand Story Text */}
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight">
                  브랜드 스토리
                </h3>
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p>
                    <span className="font-semibold text-red-600">2011년</span>, 열정 가득한 청년이 시작한 창업은<br />
                    보란듯이 <span className="font-semibold">실패했습니다.</span>
                  </p>
                  <p>
                    저희는 아주 작은 부분부터<br />
                    <span className="font-semibold">재료, 서비스, 맛</span>까지
                  </p>
                  <p>
                    <span className="font-semibold text-red-600">수없는 시행착오</span>로 <span className="font-semibold">10년의 세월</span>을<br />
                    걸어왔습니다.
                  </p>
                  <p>
                    이제는 그 길에서 얻은 노하우로<br />
                    <span className="font-semibold text-red-600">황금쭈꾸미집</span>의
                  </p>
                  <p>
                    새로운 식구들과 함께<br />
                    <span className="font-semibold">더 넓은 곳으로 나아가고 싶습니다.</span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right - Brand Image */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/aff99ce23d431.png"
                  alt="황금쭈꾸미집 브랜드 소개"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
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
                오직 쭈꾸미만을 바라보는 &apos;쭈편단심&apos;의 마음으로, 
                언제나 변함없는 맛과 특별함을 선사하고자 합니다.
              </p>
              <motion.blockquote
                className="text-2xl md:text-3xl font-bold text-red-600 italic"
                variants={itemVariants}
              >
                &ldquo;대한민국 쭈꾸미 맛의 기준을 세우다&rdquo;
              </motion.blockquote>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}