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
          {/* 로고 → 오른쪽 이미지 → 텍스트 (모바일 순서), 데스크탑 2열 배치 */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-center mb-16"
          >
            {/* 1) 로고 이미지 - 모바일 1번째, 데스크탑 좌상단 */}
            <motion.div 
              variants={zoomInVariants}
              className="order-1 lg:order-none lg:col-start-1 lg:row-start-1 flex justify-center"
            >
              <Image
                src="/images/3b7f53ca7fee6.png"
                alt="황금쭈꾸미집 로고와 텍스트"
                width={1200}
                height={400}
                className="w-full max-w-5xl h-auto"
                priority
              />
            </motion.div>

            {/* 2) 오른쪽 브랜드 이미지 - 모바일 2번째, 데스크탑 우측(두 행 차지) */}
            <motion.div 
              variants={zoomInVariants}
              className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 relative"
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

            {/* 3) 스토리 텍스트 - 모바일 3번째, 데스크탑 좌하단 */}
            <motion.div 
              variants={itemVariants}
              className="order-3 lg:order-none lg:col-start-1 lg:row-start-2 text-left md:text-center"
            >
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p className="text-gray-800 font-bold">
                  <span className="font-bold">2011년</span>, 열정 가득한 청년이 시작한 창업은<br />
                  보란듯이 <span className="font-bold">실패했습니다.</span>
                </p>
                <p>
                  저희는 아주 작은 부분부터 제품, 서비스, 맛까지<br />
                  수없는 시행착오로 <span className="font-semibold">10년의 세월</span>을 걸어왔습니다.
                </p>
                <p>
                  이제는 그 길에서 얻은 노하우로 <span className="text-red-600 font-semibold">황금쭈꾸미집의</span><br />
                  <span className="text-red-600 font-semibold">새로운 식구들과 함께 더 넓은 곳으로</span> 나아가고 싶습니다.
                </p>
              </div>
            </motion.div>
          </motion.div>


          {/* Brand Promise Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 px-8 md:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-[18px] sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8 whitespace-nowrap md:whitespace-normal leading-tight">
                대한민국 쭈꾸미 맛의 기준을 세우다
              </h3>
            </div>
          </div>

          {/* Success Secret Section - 대리석 배경 적용 */}
          <div className="relative py-20 text-center overflow-hidden">
            <Image
              src="/images/6cd8f9fa642fe.png"
              alt="브랜드 배경"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-white/60"></div>
            <div className="relative max-w-4xl mx-auto px-4">
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
                    src="/images/8175e595f1dbd.png"
                    alt="황금색 고리의 최상급 쭈꾸미"
                    width={600}
                    height={480}
                    className="w-full max-w-2xl h-auto"
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