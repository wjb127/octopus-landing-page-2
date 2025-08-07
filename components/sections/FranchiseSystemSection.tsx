'use client'

import Image from 'next/image'

export default function FranchiseSystemSection() {
  return (
    <section className="py-20 bg-gray-50" id="franchise-system">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 mb-2">성공 창업의 황금비율</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              황금쭈꾸미집의 <span className="text-red-600">프랜차이즈 시스템</span>
            </h2>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* 왼쪽 - 제목 */}
            <div className="lg:col-span-3">
              <div className="border-l-4 border-red-600 pl-6">
                <p className="text-gray-700 text-lg mb-2">프랜차이즈 시스템</p>
                <h3 className="text-2xl font-bold text-red-600">FRANCHISE SYSTEM</h3>
              </div>
            </div>

            {/* 오른쪽 - 품질관리 섹션 */}
            <div className="lg:col-span-9">
              {/* 01 품질관리 헤더 */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-red-600 mr-4">01</span>
                  <h4 className="text-2xl font-bold text-gray-800">품질관리</h4>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-sm">동종 업계 중 최고의 원재료만을 공급하여,</p>
                  <p className="text-gray-600 text-sm">매뉴얼화된 품질관리 시스템으로 언제나 동일한 맛을 유지합니다.</p>
                </div>
              </div>

              {/* 3개 원형 이미지 */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* 첫 번째 원형 이미지 */}
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                      <Image
                        src="/images/franchise-system-1.jpg"
                        alt="최고 품질의 원재료 관리 및 공급"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                    최고 품질의<br />
                    원재료 관리 및<br />
                    공급
                  </p>
                </div>

                {/* 두 번째 원형 이미지 */}
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                      <Image
                        src="/images/franchise-system-2.jpg"
                        alt="지속적인 레시피 개발 및 점포"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                    지속적인<br />
                    레시피 개발<br />
                    및 점포
                  </p>
                </div>

                {/* 세 번째 원형 이미지 */}
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden">
                      <Image
                        src="/images/franchise-system-3.jpg"
                        alt="품질관리 시스템으로 향상 동일한 맛을 유지"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-white text-sm font-semibold bg-gray-800 bg-opacity-80 p-2 rounded">
                    품질관리<br />
                    시스템으로<br />
                    향상 동일한<br />
                    맛을 유지
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}