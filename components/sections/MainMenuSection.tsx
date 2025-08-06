'use client'

import Image from 'next/image'

export default function MainMenuSection() {
  return (
    <section className="py-20 bg-white" id="main-menu">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <p className="text-red-600 text-sm font-bold mb-2">MAIN MENU</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">메인 메뉴</h2>
          </div>

          {/* 2개 메뉴 카드 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 왼쪽 - 황금쭈꾸미 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* 메뉴 이미지 */}
              <div className="relative h-64">
                <Image
                  src="/images/ae7d0ac0c48d6.jpg"
                  alt="황금쭈꾸미"
                  fill
                  className="object-cover"
                />
                {/* 하단 라벨 */}
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-4">
                  <h3 className="text-2xl font-bold">황금쭈꾸미</h3>
                </div>
              </div>
              
              {/* 메뉴 정보 */}
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  신선한 쭈꾸미와 돼지고기 특제 양념장으로 마리네이드로<br />
                  황금쭈꾸미집 1인분 노하우를 익상은 담은 곡
                </p>
                
                {/* 태그들 */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">볶음</span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">매콤</span>
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">채소포함</span>
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold">中 택1</span>
                </div>
              </div>
            </div>

            {/* 오른쪽 - 삼겹쭈꾸미 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* 메뉴 이미지 */}
              <div className="relative h-64">
                <Image
                  src="/images/9c58833338d6e.jpg"
                  alt="삼겹쭈꾸미"
                  fill
                  className="object-cover"
                />
                {/* 하단 라벨 */}
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-4">
                  <h3 className="text-2xl font-bold">삼겹쭈꾸미</h3>
                </div>
              </div>
              
              {/* 메뉴 정보 */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    달콤하고 촉촉한 맛과 삼겹살의 고소한 맛에원이 쭈꾸미의 쫄깃함<br />
                    황금의 조합을 가정에서 황금쭈꾸미집의 실시 맛과!
                  </p>
                  {/* BEST 배지 */}
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold ml-4">BEST</span>
                </div>
                
                {/* 태그들 */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">볶음</span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">매콤</span>
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">채소포함</span>
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold">中 택1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}