'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function PhilosophySection() {
  const [currentBg, setCurrentBg] = useState(0)
  
  // 배경 이미지들 (임시 이미지들 - 나중에 실제 이미지로 교체)
  const backgroundImages = [
    {
      src: "/images/aff99ce23d431.png", // 임시 배경 이미지 1
      alt: "황금쭈꾸미집 배경 1"
    },
    {
      src: "/images/e08a8254ed5ca.png", // 임시 배경 이미지 2
      alt: "황금쭈꾸미집 배경 2"
    }
  ]

  // 자동 배경 전환 효과
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // 5초마다 변경

    return () => clearInterval(timer)
  }, [backgroundImages.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="philosophy">
      {/* 배경 이미지 슬라이드 */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBg ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* 메인 텍스트 */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              백반집은 밥이 맛있어야 하고,
            </h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              쭈꾸미집은 쭈꾸미가 맛있어야 한다.
            </h2>
          </div>

          {/* 브랜드 로고 */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/b8ea0f0bb3662.png"
              alt="황금쭈꾸미집 로고"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>

        </div>
      </div>

      {/* 배경 전환 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBg(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBg 
                ? 'bg-yellow-400 scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* 스크롤 다운 화살표 */}
      <div className="absolute bottom-8 right-8 animate-bounce z-10">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">SCROLL</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}