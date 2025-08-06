'use client'

import Image from 'next/image'

export default function FranchiseSection() {
  // 창업 비용 항목들
  const costItems = [
    { item: '가맹비', cost: '500만원' },
    { item: '보증금', cost: '300만원' },
    { item: '교육비', cost: '100만원' },
    { item: '인테리어', cost: '2,000만원' },
    { item: '장비비', cost: '800만원' },
    { item: '기타', cost: '300만원' }
  ]

  return (
    <section className="py-20 bg-white" id="franchise">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              창업 비용
            </h2>
            <p className="text-xl text-gray-600">
              가맹점주의 부담을 확 줄인 합리적인 비용 책정
            </p>
          </div>

          {/* 메인 콘텐츠 레이아웃 */}
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            {/* 왼쪽 - 매장 이미지 */}
            <div className="relative h-full">
              <div className="relative h-96 md:h-[650px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/2318f8630e1f0.jpg"
                  alt="황금쭈꾸미집 매장"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 오른쪽 - 쭈꾸미 요리 이미지 (2배 너비) */}
            <div className="relative lg:col-span-2">
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/c86a37de188ad.png"
                  alt="황금쭈꾸미집 대표 메뉴"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* 안내 문구 */}
              <div className="mt-4 text-xs text-gray-500 leading-relaxed">
                <p>*인테리어는 직접시공이 가능합니다 (감리비 별도)</p>
                <p>*인테리어 비용중 철거 및 외부공사,냉난방공사,닥트,가스,소방시설등 별도 비용이 발생합니다.</p>
                <p>*전체 창업비용은 매장상황에 따라 달라집니다.</p>
                <p>*창업비용은 지사별(지역)로 달라질 수 있습니다.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}