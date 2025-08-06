'use client'

import Image from 'next/image'

export default function InterludeSection() {
  return (
    <section className="relative h-screen overflow-hidden" id="interlude">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/e08a8254ed5ca.png"
          alt="매장 배경"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 중앙 콘텐츠 */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          {/* 로고와 텍스트 이미지 */}
          <div className="relative">
            <Image
              src="/images/b8ea0f0bb3662.png"
              alt="황금쭈꾸미집"
              width={600}
              height={300}
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}