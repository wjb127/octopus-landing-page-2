'use client'

import Image from 'next/image'

export default function GallerySection() {
  // 8개의 이미지 플레이스홀더
  const images = [
    {
      id: 1,
      src: '/images/90ff49cbdfe39.png',
      alt: '황금쭈꾸미집 창업절차 1단계'
    },
    {
      id: 2,
      src: '/images/d18105bdae9fa.png',
      alt: '상권조사 및 점포선정'
    },
    {
      id: 3,
      src: '/images/d4307fedb6fb2.png',
      alt: '황금쭈꾸미집 창업절차 3단계'
    },
    {
      id: 4,
      src: '/images/6b1994048b9f8.png',
      alt: '황금쭈꾸미집 창업절차 4단계'
    },
    {
      id: 5,
      src: '/images/947692456520a.png',
      alt: '인테리어 공사'
    },
    {
      id: 6,
      src: '/images/8d9b18215af6b.png',
      alt: '황금쭈꾸미집 창업절차 6단계'
    },
    {
      id: 7,
      src: '/images/4e9ce08cfc6dc.png',
      alt: '황금쭈꾸미집 창업절차 7단계'
    },
    {
      id: 8,
      src: '/images/a08747eddb6cc.png',
      alt: '황금쭈꾸미집 창업절차 8단계'
    }
  ]

  return (
    <section className="py-16 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            창업 절차
          </h2>
          <p className="text-lg text-gray-600">
            빠르고 체계적인 오픈을 위한 황금쭈꾸미집 창업절차
          </p>
        </div>

        {/* 이미지 그리드 - 반응형 레이아웃 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}