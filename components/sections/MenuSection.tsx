'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Star, Clock, Users } from 'lucide-react'

export default function MenuSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [selectedCategory, setSelectedCategory] = useState('signature')

  const menuCategories = [
    { id: 'signature', name: '시그니처 메뉴' },
    { id: 'popular', name: '인기 메뉴' },
    { id: 'side', name: '사이드 메뉴' }
  ]

  const menuItems = {
    signature: [
      {
        id: 1,
        name: '황금 쭈꾸미 볶음',
        description: '특제 양념으로 볶아낸 쭈꾸미의 깊은 맛',
        image: '/images/368e212673c31.jpeg',
        price: '15,000원',
        rating: 4.9,
        cookTime: '15분',
        servings: '2-3인분'
      },
      {
        id: 2,
        name: '삼겹살 쭈꾸미',
        description: '부드러운 삼겹살과 쭈꾸미의 환상적인 조합',
        image: '/images/3a31d837ea108.jpeg',
        price: '18,000원',
        rating: 4.8,
        cookTime: '20분',
        servings: '2-3인분'
      },
      {
        id: 3,
        name: '대창 쭈꾸미',
        description: '쫄깃한 대창과 쭈꾸미의 특별한 만남',
        image: '/images/607686ec463de.jpeg',
        price: '19,000원',
        rating: 4.7,
        cookTime: '25분',
        servings: '2-3인분'
      }
    ],
    popular: [
      {
        id: 4,
        name: '우삼겹 쭈꾸미',
        description: '프리미엄 우삼겹과 쭈꾸미의 고급스러운 맛',
        image: '/images/9b29d411a2014.jpeg',
        price: '22,000원',
        rating: 4.9,
        cookTime: '18분',
        servings: '2-3인분'
      },
      {
        id: 5,
        name: '매운 쭈꾸미',
        description: '매콤한 양념이 일품인 정통 쭈꾸미 볶음',
        image: '/images/907ef2b3cccf9.jpeg',
        price: '16,000원',
        rating: 4.6,
        cookTime: '15분',
        servings: '2-3인분'
      }
    ],
    side: [
      {
        id: 6,
        name: '계란찜',
        description: '부드럽고 촉촉한 계란찜',
        image: '/images/14117213e60f6.jpg',
        price: '5,000원',
        rating: 4.5,
        cookTime: '10분',
        servings: '1-2인분'
      }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="py-20 bg-gray-50"
      id="menu"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              메뉴 안내
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              신선한 재료로 만든 황금쭈꾸미집만의 특별한 메뉴를 만나보세요
            </p>
            <motion.div
              className="w-24 h-1 bg-red-600 mx-auto mt-8"
              variants={itemVariants}
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            key={selectedCategory}
          >
            {menuItems[selectedCategory as keyof typeof menuItems].map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {/* Menu Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Menu Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Menu Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.cookTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{item.servings}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-red-600">
                      {item.price}
                    </span>
                    <motion.button
                      className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      주문하기
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Special Offer */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              런치 스페셜 할인
            </h3>
            <p className="text-xl mb-8 opacity-90">
              평일 오후 2시까지 모든 메뉴 10% 할인!
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              지금 주문하기
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}