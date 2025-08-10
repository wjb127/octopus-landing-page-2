'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function FixedBottomForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.contact || !formData.location) {
      alert('모든 항목을 입력해주세요.')
      return
    }

    setIsSubmitting(true)

    try {
      // Supabase에 데이터 저장
      const { error } = await supabase
        .from('kmong_6_inquiries')
        .insert([
          {
            name: formData.name,
            contact: formData.contact,
            location: formData.location,
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      // 성공 처리
      setShowSuccess(true)
      setFormData({ name: '', contact: '', location: '' })
      
      // 3초 후 성공 메시지 숨기기
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)

    } catch (error) {
      console.error('Error submitting form:', error)
      alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-700 py-4 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* 전화번호 - 데스크톱에서만 표시 */}
          <div className="hidden md:flex items-center text-white">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-2xl font-bold">1577 - 6615</span>
          </div>

          {/* 문의 폼 */}
          <form onSubmit={handleSubmit} className="flex gap-2 flex-1 max-w-4xl">
            <input
              type="text"
              placeholder="이름"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-20 px-2 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              disabled={isSubmitting}
            />
            <input
              type="text"
              placeholder="연락처"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-24 px-2 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              disabled={isSubmitting}
            />
            <input
              type="text"
              placeholder="문의내용"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-32 px-2 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap"
            >
              {isSubmitting ? '전송중...' : '작성'}
            </button>
          </form>

          {/* 성공 메시지 */}
          {showSuccess && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
              문의가 성공적으로 접수되었습니다!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}