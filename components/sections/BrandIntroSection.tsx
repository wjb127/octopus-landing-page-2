'use client'

import Image from 'next/image'

export default function BrandIntroSection() {
  return (
    <section className="relative" id="brand-intro">
      {/* 빨간색 브랜드 영역 */}
      <div className="bg-red-600 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* 브랜드 로고 */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/77a7e0d139593.png"
                alt="황금쭈꾸미집 로고"
                width={400}
                height={120}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}