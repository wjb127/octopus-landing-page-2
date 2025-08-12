'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function FloatingPhoneButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isBottomFormVisible, setIsBottomFormVisible] = useState(false)

  useEffect(() => {
    // 스크롤 감지로 버튼 표시/숨김
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // 페이지 최상단에서는 숨기고, 조금 스크롤하면 표시
      setIsVisible(scrollY > windowHeight * 0.3)
    }

    // 하단 입력폼 감지
    const checkBottomFormVisibility = () => {
      const bottomForm = document.querySelector('[id*="FixedBottom"], .fixed-bottom-form')
      if (bottomForm) {
        const rect = bottomForm.getBoundingClientRect()
        const isFormVisible = rect.top < window.innerHeight && rect.bottom >= 0
        setIsBottomFormVisible(isFormVisible)
      }
    }

    const handleScrollAndCheck = () => {
      handleScroll()
      checkBottomFormVisibility()
    }

    window.addEventListener('scroll', handleScrollAndCheck, { passive: true })
    window.addEventListener('resize', checkBottomFormVisibility, { passive: true })
    
    // 초기 체크
    handleScrollAndCheck()

    return () => {
      window.removeEventListener('scroll', handleScrollAndCheck)
      window.removeEventListener('resize', checkBottomFormVisibility)
    }
  }, [])

  const handlePhoneCall = () => {
    window.location.href = 'tel:1577-6615'
  }

  return (
    <>
      {/* 모바일에서만 표시 */}
      <div className="block lg:hidden">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className={`fixed z-50 ${
                isBottomFormVisible 
                  ? 'bottom-48 right-4' // 하단 폼이 보일 때 더 위로 올림
                  : 'bottom-16 right-4'  // 기본 위치도 더 상향
              }`}
              style={{
                // 하단 입력폼과 겹치지 않도록 추가 마진
                marginBottom: isBottomFormVisible ? '120px' : '0px'
              }}
            >
              <motion.button
                onClick={handlePhoneCall}
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="전화걸기 1577-6615"
              >
                <Phone className="w-6 h-6" />
              </motion.button>

              {/* 툴팁 */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none"
              >
                창업 문의
                <br />
                <span className="font-bold">1577-6615</span>
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}