'use client'

import Image from 'next/image'

export default function CompetitiveAdvantageSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="competitive-advantage">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/14117213e60f6.jpg"
          alt="황금쭈꾸미집 요리 배경"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* 메인 타이틀 */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              황금쭈꾸미집의{' '}
              <span className="text-red-500">강력한 경쟁력</span>
            </h2>
          </div>

          {/* 설명 텍스트 */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-medium">
              10년 이상 진정성으로 운영해온 쭈꾸미집의 경쟁력은<br />
              <span className="text-white font-bold">강력한 프랜차이즈 시스템</span>에 있습니다.
            </p>
          </div>

          {/* 장식적 요소 */}
          <div className="mt-12 flex items-center justify-center">
            <div className="w-16 h-1 bg-red-500 mr-4"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="w-16 h-1 bg-red-500 ml-4"></div>
          </div>
        </div>
      </div>

      {/* 하단 스크롤 힌트 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 opacity-80">MORE</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}