'use client'

import Image from 'next/image'

export default function EducationSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="education">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/education-background.jpg"
          alt="교육 배경"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* 상단 제목 */}
          <div className="text-center text-white mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              오직 '본점 메뉴만' 6000개 이상.
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-red-500">
              살인적 수익률 100% 확인함!
            </h1>
          </div>
          
          {/* 4개 카드 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 카드 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/review-card-1.jpg"
                  alt="리뷰 카드 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  카드 내용 텍스트가 들어갑니다.
                </p>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/review-card-2.jpg"
                  alt="리뷰 카드 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  카드 내용 텍스트가 들어갑니다.
                </p>
              </div>
            </div>

            {/* 카드 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/review-card-3.jpg"
                  alt="리뷰 카드 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  카드 내용 텍스트가 들어갑니다.
                </p>
              </div>
            </div>

            {/* 카드 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/review-card-4.jpg"
                  alt="리뷰 카드 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  카드 내용 텍스트가 들어갑니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}