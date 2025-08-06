'use client'

import Image from 'next/image'

export default function SignatureMenuSection() {
  return (
    <section className="py-20 bg-gray-50" id="signature-menu">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 2개 메뉴 카드 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 왼쪽 - 우삼겹쭈꾸미 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* 메뉴 이미지 */}
              <div className="relative h-64">
                <Image
                  src="/images/790405263fa66.jpg"
                  alt="우삼겹쭈꾸미"
                  fill
                  className="object-cover"
                />
                {/* 하단 라벨 */}
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-4">
                  <h3 className="text-2xl font-bold">우삼겹쭈꾸미</h3>
                </div>
              </div>
              
              {/* 메뉴 정보 */}
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  고소한 우삼겹과 탱글탱글한 쭈꾸미, 싱싱한 채소까지!<br />
                  황금쭈꾸미집의 황금삼합세트를 특별한 상에서 즐기세요!
                </p>
                
                {/* 태그들 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">볶음</span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">매콤</span>
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">채소포함</span>
                </div>
                
                {/* BEST 배지 */}
                <div className="text-right">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">BEST</span>
                </div>
              </div>
            </div>

            {/* 오른쪽 - 대창쭈꾸미 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* 메뉴 이미지 */}
              <div className="relative h-64">
                <Image
                  src="/images/5ee1f4de0f2bb.jpg"
                  alt="대창쭈꾸미"
                  fill
                  className="object-cover"
                />
                {/* 하단 라벨 */}
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-4">
                  <h3 className="text-2xl font-bold">대창쭈꾸미</h3>
                </div>
              </div>
              
              {/* 메뉴 정보 */}
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  쫄깃한 쭈꾸미와 진짜 쫄깃한 대창의 만남!<br />
                  주방장 내친네 맛있게 대창을 특별한 하트에 담아서 서빙합니다!
                </p>
                
                {/* 태그들 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">볶음</span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">매콤</span>
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">채소포함</span>
                </div>
                
                {/* NEW 배지 */}
                <div className="text-right">
                  <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">NEW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}