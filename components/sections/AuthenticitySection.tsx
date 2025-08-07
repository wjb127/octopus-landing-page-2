'use client'

import Image from 'next/image'

export default function AuthenticitySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="authenticity">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/2870484c62648.png"
          alt="배경"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽 - 매장 이미지 */}
            <div className="relative">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/66844411a97fd.png"
                  alt="매장 대기줄"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 오른쪽 - 텍스트 영역 */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                <span className="text-yellow-400">진정성 있는 맛</span>으로<br />
                고객들을 사로잡았습니다.
              </h2>
              
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p className="text-lg">
                  황금쭈꾸미집은 진정성 있는 맛과 서비스로 확실한 고객확보가 가능하고,
                </p>
                
                <p className="text-lg">
                  점심과 저녁 2번의 웨이팅으로 높은 매출이 발생합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}