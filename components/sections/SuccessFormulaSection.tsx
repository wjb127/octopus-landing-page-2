'use client'

import Image from 'next/image'

export default function SuccessFormulaSection() {
  return (
    <section className="py-20 bg-gray-50" id="success-formula">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 mb-2">성공 창업의 황금오션</p>
            <h2 className="text-[18px] sm:text-3xl md:text-5xl font-bold text-gray-800 mb-6 whitespace-nowrap md:whitespace-normal leading-tight">
              황금쭈꾸미집의 <span className="text-red-600">남다른 수익비결</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              전략적인 메뉴 하나부터 효율적인 매장 운영까지,
            </p>
            <p className="text-gray-800 font-semibold max-w-3xl mx-auto leading-relaxed">
              남들과 똑같은 쭈꾸미 전문점이라면 시작조차 하지 않았습니다.
            </p>
          </div>

          {/* 4개 카드 그리드 */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 카드 01 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64">
                <Image
                  src="/images/8cd2e52061e29.png"
                  alt="초간단 5분 레시피 연구 완성"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 카드 02 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64">
                <Image
                  src="/images/6b020c3682153.png"
                  alt="재료 비용 절감을 위한 황금쭈꾸미 물류유통시스템"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 카드 03 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64">
                <Image
                  src="/images/d3c6a7e75581f.png"
                  alt="황금쭈꾸미의 품질 확보"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 카드 04 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64">
                <Image
                  src="/images/6ac9ab1ee5226.png"
                  alt="성공창업의 핵심요소 황금쭈꾸미집 본사지원"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}