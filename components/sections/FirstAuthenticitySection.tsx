'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FirstAuthenticitySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-white relative" id="first-authenticity">
      {/* 배경 이미지 오버레이 */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/images/bd82b6bf78af4.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* 왼쪽 - 텍스트 콘텐츠 */}
            <motion.div variants={itemVariants}>
              {/* 진정성 배지 */}
              <div className="mb-8">
                <Image
                  src="/images/d5be9985e354b.png"
                  alt="첫 번째 진정성"
                  width={160}
                  height={40}
                  className="mb-4"
                />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                황금색 고리의<br />
                최상급 쭈꾸미
              </h2>
              
              <div className="w-20 h-0.5 bg-yellow-400 mb-6"></div>
              
              <div className="space-y-2 text-gray-600">
                <p>쭈꾸미의 황금색 고리는 최상급의 신선도를 의미합니다.</p>
                <p>맛있는 쭈꾸미는 먹지 않고 보는 것만으로도 구별할 수</p>
                <p>있습니다. 황금쭈꾸미집은 <strong className="text-red-600">황금색 고리가 없는 쭈꾸미는</strong></p>
                <p><strong className="text-red-600">사용하지 않습니다.</strong></p>
              </div>
            </motion.div>

            {/* 오른쪽 - 이미지 */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <Image
                src="/images/05a959de74097.png"
                alt="황금색 고리의 최상급 쭈꾸미"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
