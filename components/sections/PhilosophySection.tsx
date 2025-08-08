'use client'

import Image from 'next/image'

export default function PhilosophySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="philosophy">
      {/* 배경 이미지 - 원본과 동일한 고정 배경 */}
      <div className="absolute inset-0">
        <Image
          src="/images/6cd8f9fa642fe.png"
          alt="황금쭈꾸미집 철학 배경"
          fill
          className="object-cover"
          priority
        />
        {/* 흰색 오버레이 - 원본과 동일 */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* 메인 텍스트 - 원본과 동일한 흰색 텍스트 */}
          <div className="mb-12">
            <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              백반집은 밥이 맛있어야 하고,
            </h4>
            <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-8">
              쭈꾸미집은 쭈꾸미가 맛있어야 한다.
            </h4>
            
            {/* 브랜드 로고 - 원본과 동일한 위치와 크기 */}
            <div className="flex items-center justify-center mb-12">
              <Image
                src="/images/b8ea0f0bb3662.png"
                alt="황금쭈꾸미집 로고"
                width={253}
                height={200}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}