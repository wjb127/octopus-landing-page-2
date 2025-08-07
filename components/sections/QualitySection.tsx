'use client'

import Image from 'next/image'

export default function QualitySection() {
  return (
    <section className="py-20 bg-gray-50" id="quality">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽 - 텍스트 영역 */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight">
                진짜 맛집은 <span className="text-red-600">맛있어야 하니까</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg font-medium">
                  황금쭈꾸미집의 특제 소스는 <strong>동원홈푸드</strong>와 함께합니다.
                </p>
                
                <p>
                  전국 7개의 유통센터와 국내 최대 규모의 동원그룹 물류망으로
                </p>
                
                <p>
                  어느 지역이든 원활하게 최고 품질의 소스를 유통받고 있습니다.
                </p>
              </div>
            </div>

            {/* 오른쪽 - 이미지 영역 */}
            <div className="relative">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/9b29d411a2014.jpeg"
                  alt="동원홈푸드 건물"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}