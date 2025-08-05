'use client'

import Image from 'next/image'

export default function ProfitAnalysisSection() {
  return (
    <section className="relative py-20 overflow-hidden" id="profit-analysis">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/aff99ce23d431.png" // 임시 배경 이미지 - 매장 내부 이미지로 교체 예정
          alt="황금쭈꾸미집 매장 배경"
          fill
          className="object-cover"
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              황금비율 수익설계
            </h2>
          </div>

          {/* 메인 콘텐츠 그리드 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 좌측 - 도넛 차트 영역 */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                {/* 차트 이미지 플레이스홀더 */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-red-500 to-pink-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-sm mb-2">수익률</p>
                    <p className="text-4xl font-bold">30%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 우측 - 영수증 스타일 수익 분석표 */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full receipt-style">
                {/* 영수증 헤더 */}
                <div className="text-center mb-6 border-b border-gray-300 pb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Image
                      src="/images/b4201f868df71.png"
                      alt="황금쭈꾸미집 로고"
                      width={40}
                      height={40}
                      className="mr-2"
                    />
                    <h3 className="text-2xl font-bold text-gray-800">쭈꾸미집</h3>
                  </div>
                </div>

                {/* 수익 항목들 */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">월매출</span>
                    <span className="font-semibold">35,646,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">인건비</span>
                    <span className="font-semibold">1,500,000원</span>
                    <span className="text-sm text-gray-500">4.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">임대비</span>
                    <span className="font-semibold">1,784,583원</span>
                    <span className="text-sm text-gray-500">5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">원자재</span>
                    <span className="font-semibold">1,574,260원</span>
                    <span className="text-sm text-gray-500">4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">기타비</span>
                    <span className="font-semibold">17,132,119원</span>
                    <span className="text-sm text-gray-500">48%</span>
                  </div>
                </div>

                {/* 총 수익 */}
                <div className="border-t-2 border-gray-300 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-red-600">순이익</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-red-600">13,871,087원</span>
                      <div className="flex items-center justify-end mt-1">
                        <span className="text-3xl font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">30%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 영수증 하단 */}
                <div className="text-center mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">* 평균 수익률을 바탕으로 산출된 데이터 * 점포마다 차이가 날 수 있습니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}