'use client'

import Image from 'next/image'

export default function MenuSection() {
  return (
    <section className="py-20 bg-white" id="menu">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 2개 메뉴 섹션 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 왼쪽 - 플러스 메뉴 */}
            <div className="bg-white">
              {/* 헤더 */}
              <div className="text-center mb-6">
                <p className="text-red-600 text-sm font-bold mb-2">PLUS MENU</p>
                <h2 className="text-3xl font-bold text-gray-800">플러스 메뉴</h2>
              </div>
              
              {/* 메뉴 이미지 */}
              <div className="relative mb-6">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/6551088c6190c.jpg"
                    alt="토핑치즈쌈"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* 하단 라벨 */}
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-3">
                  <h3 className="text-xl font-bold">토핑치즈쌈</h3>
                </div>
              </div>
              
              {/* 설명 */}
              <div className="text-center">
                <p className="text-gray-600 text-sm">매콤한 쭈꾸미와 고소한 치즈의 환상 조합!</p>
                <p className="text-gray-800 font-semibold text-sm">황금쭈꾸미만의 시그니처 메뉴</p>
                <div className="mt-2">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold">SIGNATURE</span>
                </div>
              </div>
            </div>

            {/* 오른쪽 - 사이드 메뉴 */}
            <div className="bg-white">
              {/* 헤더 */}
              <div className="text-center mb-6">
                <p className="text-red-600 text-sm font-bold mb-2">SIDE MENU</p>
                <h2 className="text-3xl font-bold text-gray-800">사이드 메뉴</h2>
              </div>
              
              {/* 메뉴 이미지 */}
              <div className="relative mb-6">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/368e212673c31.jpeg"
                    alt="왕새우튀김/등심돈까스/치즈돈까스"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* 하단 라벨 */}
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-3">
                  <h3 className="text-xl font-bold">왕새우튀김 / 등심돈까스 / 치즈돈까스</h3>
                </div>
              </div>
              
              {/* 설명 */}
              <div className="text-center">
                <p className="text-gray-600 text-sm">*사이드 메뉴는 매장별, 계절별 다소 차이가 날 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}