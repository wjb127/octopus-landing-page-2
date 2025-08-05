'use client'

import { useState } from 'react'
import { supabase } from '../../src/lib/supabase'

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone) {
      setSubmitMessage('이름과 연락처를 입력해주세요.')
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            source: 'consultation_section',
            created_at: new Date().toISOString()
          }
        ])

      if (error) {
        console.error('Error submitting form:', error)
        setSubmitMessage('문의 등록 중 오류가 발생했습니다.')
      } else {
        setSubmitMessage('문의가 성공적으로 등록되었습니다!')
        setFormData({ name: '', phone: '', message: '' })
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('문의 등록 중 오류가 발생했습니다.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 3000)
    }
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400">
      {/* 배경 패턴 (임시 - 나중에 배경 이미지로 교체) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-lg transform rotate-12"></div>
        <div className="absolute top-20 right-32 w-24 h-24 border-2 border-white rounded-lg transform -rotate-6"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-white rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-32 right-40 w-20 h-20 border-2 border-white rounded-lg transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              창업 문의
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              황금쭈꾸미집은 첫만남의 설렘을
            </p>
            <p className="text-lg text-gray-700">
              함께 할 분들을 언제나 환영합니다
            </p>
          </div>

          {/* 문의 폼 */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 개인정보 수집 및 이용 동의 */}
              <div className="bg-white/90 p-6 rounded-lg">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">개인정보 수집 및 이용 동의</h4>
                  <div className="text-xs text-gray-600 bg-gray-50 p-4 rounded max-h-40 overflow-y-auto leading-relaxed">
                    <p className="mb-3">
                      회사명(이하 '회사'라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 
                      원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.
                    </p>
                    
                    <p className="font-semibold mb-2">제1조 (개인정보의 처리목적)</p>
                    <p className="mb-3">
                      회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                      이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                    </p>

                    <p className="mb-2">1. 홈페이지 회원 가입 및 관리</p>
                    <p className="mb-3">
                      회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.
                    </p>

                    <p className="mb-2">2. 재화 또는 서비스 제공</p>
                    <p className="mb-3">
                      물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등을 목적으로 개인정보를 처리합니다.
                    </p>

                    <p className="mb-2">3. 고충 처리</p>
                    <p className="mb-3">
                      민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다.
                    </p>

                    <p className="font-semibold mb-2">제2조 (개인정보의 처리 및 보유기간)</p>
                    <p className="mb-2">① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.</p>
                    <p className="mb-2">② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>

                    <p className="mb-2">1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지</p>
                    <p className="mb-2">다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지</p>
                    <p className="mb-1">1) 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사, 조사 종료 시까지</p>
                    <p className="mb-3">2) 홈페이지 이용에 따른 채권 및 채무관계 잔존 시에는 해당 채권, 채무 관계 정산 시까지</p>

                    <p className="mb-2">2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산 완료 시까지</p>
                    <p className="mb-2">다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지</p>
                    <p className="mb-2">1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고, 계약내용 및 이행 등 거래에 관한 기록</p>
                    <p className="mb-1">- 표시․광고에 관한 기록 : 6월</p>
                    <p className="mb-1">- 계약 또는 청약 철회, 대금결제, 재화 등의 공급기록 : 5년</p>
                    <p className="mb-2">- 소비자 불만 또는 분쟁 처리에 관한 기록 : 3년</p>
                    <p className="mb-2">2) 「통신비밀보호법」 제41조에 따른 통신사실확인자료 보관</p>
                    <p className="mb-1">- 가입자 전기통신일시, 개시․종료 시간, 상대방 가입자 번호, 사용도수, 발신기지국 위치추적자료 : 1년</p>
                    <p className="mb-3">- 컴퓨터 통신, 인터넷 로그 기록자료, 접속지 추적자료 : 3개월</p>

                    <p className="font-semibold mb-2">제3조 (개인정보의 제3자 제공)</p>
                    <p className="mb-2">① 회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제 18조에 해당하는 경우에만 개인정보를 제3자에게 제공하고 그 외에는 정보주체의 개인정보를 제3자에게 제공하지 않습니다.</p>
                    <p className="mb-2">② 회사는 원활한 서비스 제공을 위해 다음의 경우 개인정보보호법 제17조 제1항 제1호에 따라 정보주체의 동의를 얻어 필요 최소한의 범위로만 개인정보를 제3자에게 제공할 수 있습니다.</p>
                    <p className="mb-1">- 개인정보를 제공받는 자 : (주) OOO 카드</p>
                    <p className="mb-1">- 제공받는 자의 개인정보 이용목적 : 이벤트 공동개최 등 업무제휴 및 제휴 신용카드 발급</p>
                    <p className="mb-1">- 제공하는 개인정보 항목 : 성명, 주소, 전화번호, 이메일주소, 카드결제계좌정보</p>
                    <p className="mb-3">- 제공받는 자의 보유, 이용기간 : 신용카드 발급계약에 따른 거래기간동안</p>

                    <p className="font-semibold mb-2">제4조(개인정보처리의 위탁)</p>
                    <p className="mb-2">① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
                    <p className="mb-1">- 위탁받는 자 (수탁자) : (주)아임웹</p>
                    <p className="mb-1">- 위탁하는 업무의 내용 : 쇼핑몰 호스팅 서비스의 시스템 제공, 모바일 앱 서비스, 마케팅 서비스 및 부가, 제휴서비스 제공 및 알림톡, 친구톡, 문자메시지 발송대행 서비스 등</p>
                    <p className="mb-2">② 회사는 위탁계약 체결 시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</p>
                    <p className="mb-3">③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>

                    <p className="font-semibold mb-2">제5조(정보주체 및 법정대리인의 권리와 그 행사 방법)</p>
                    <p className="mb-2">① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                    <p className="mb-1">1. 개인정보 열람 요구</p>
                    <p className="mb-1">2. 오류 등이 있을 경우 정정 요구</p>
                    <p className="mb-1">3. 삭제요구</p>
                    <p className="mb-2">4. 처리정지 요구</p>
                    <p className="mb-2">② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>

                    <p className="font-semibold mb-2">제13조(개인정보 처리방침 시행 및 변경)</p>
                    <p>이 개인정보 처리방침은 20XX. X. X. 부터 적용됩니다.</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy-agree"
                    className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    required
                  />
                  <label htmlFor="privacy-agree" className="ml-2 text-sm text-gray-700">
                    개인정보 수집 및 이용에 동의합니다.
                  </label>
                </div>
              </div>

              {/* 이름 입력 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="이름을 입력해주세요"
                  required
                />
              </div>

              {/* 연락처 입력 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  연락처
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="010"
                    maxLength={3}
                  />
                  <input
                    type="text"
                    className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="1234"
                    maxLength={4}
                  />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="5678"
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              {/* 문의 내용 */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                  placeholder="문의하실 내용을 자세히 적어주세요"
                />
              </div>

              {/* 제출 버튼 */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? '접수중...' : '접수'}
                </button>
              </div>

              {/* 제출 메시지 */}
              {submitMessage && (
                <div className={`text-center text-sm ${
                  submitMessage.includes('성공') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>

            {/* 하단 안내 */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600">
                * 사이트 하단의 입력폼으로 문의 시
              </p>
              <p className="text-sm text-gray-600">
                개인정보 수집 및 이용에 동의한 것으로 간주됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}