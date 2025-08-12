'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BrandSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  }

  const zoomInVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  }
  return (
    <section 
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="brand"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* 단일 이미지로 교체 */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <motion.div variants={zoomInVariants} className="flex justify-center">
              <Image
                src="/images/3b7f53ca7fee6.png"
                alt="황금쭈꾸미집 로고와 텍스트"
                width={1200}
                height={400}
                className="w-full max-w-5xl h-auto"
                priority
              />
            </motion.div>
          </motion.div>


          {/* Brand Promise Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 px-8 md:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
                대한민국 쭈꾸미 맛의 기준을 세우다
              </h3>
            </div>
          </div>

          {/* Success Secret Section - 이미지로 교체 */}
          <div className="bg-gray-100 py-20 text-center">
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/21d2d0f214e82.png"
                  alt="손님이 끊이지 않는 식당의 비결 - 음식에 대한 진정성"
                  width={837}
                  height={279}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* First Authenticity Section */}
          <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                {/* Left - Octopus Image */}
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/images/05a959de74097.png"
                    alt="황금색 고리의 최상급 쭈꾸미"
                    width={500}
                    height={400}
                    className="w-full max-w-lg h-auto"
                  />
                </div>

                {/* Right - Content */}
                <div className="space-y-6">
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
                </div>
              </div>
            </div>
          </div>

          {/* Second Authenticity Section */}
          <div className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-[0.8fr_1.8fr] gap-12 items-center">
                {/* Left - Content */}
                <div className="space-y-6 order-2 lg:order-1">
                  {/* Badge */}
                  <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
                    두 번째 진정성
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                    건강한 재료로<br />
                    숙성된 특제양념
                  </h3>
                  
                  {/* Content */}
                  <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                    <p>
                      최상급 쭈꾸미와 <span className="font-semibold text-red-600">46시간 숙성</span>시킨 맛있게 매운 특제소스를
                    </p>
                    <p>
                      <span className="font-semibold">배합 24시간 숙성</span>, 총 <span className="font-semibold text-red-600">70시간의 숙성 과정</span>을 거쳐 양배추, 대파와
                    </p>
                    <p>
                      함께 철판에 볶아낸 <span className="font-semibold">쭈꾸미 본연의 맛</span>을 느낄 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* Right - Cooked Octopus Image */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                  <Image
                    src="/images/3738797c89abf.png"
                    alt="건강한 재료로 숙성된 특제양념"
                    width={600}
                    height={480}
                    className="w-full max-w-2xl h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Third Authenticity Section - 3무 법칙 */}
          <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-[1.8fr_0.8fr] gap-12 items-center">
                {/* Left - 3무 법칙 Image */}
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/images/1dd61c4af9b12.png"
                    alt="황금쭈꾸미의 3무 법칙"
                    width={600}
                    height={480}
                    className="w-full max-w-2xl h-auto"
                  />
                </div>

                {/* Right - Content */}
                <div className="space-y-6">
                  {/* Badge */}
                  <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
                    세 번째 진정성
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                    황금쭈꾸미의<br />
                    3무 법칙
                  </h3>
                  
                  {/* Content */}
                  <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                    <p>
                      최상급 재료와 자연 그대로의 맛을 위해
                    </p>
                    <p>
                      <span className="font-semibold text-red-600">합성보존료, 인공착색료, 캡사이신 첨가물</span>을 넣지 않습니다.
                    </p>
                    <p>
                      건강하고 깨끗한 식사를 선물하는 것이 황금쭈꾸미의 <span className="font-semibold text-red-600">진정성</span>입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}