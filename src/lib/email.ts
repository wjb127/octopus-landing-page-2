import { Resend } from 'resend'

// Resend 인스턴스 생성
const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailNotificationData {
  name: string
  contact: string
  message?: string   // 문의 내용
  region?: string    // 폼 구분 (상단/하단)
  submittedAt: string
}

// 공용 이메일 발송 유틸
export async function sendLeadNotificationEmail(data: EmailNotificationData) {
  console.log('📧 이메일 전송 시작:', {
    수신자: getRecipients(),
    신청자: data.name,
    연락처: data.contact
  })

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ Resend API 키가 설정되지 않음')
    return { success: false, error: 'Resend API key not configured' }
  }

  try {
    console.log('📮 Resend API로 이메일 전송 시도')
    console.log('- API 키 설정됨:', !!process.env.RESEND_API_KEY)

    const { data: emailData, error } = await resend.emails.send({
      from: 'Applicforge <noreply@mail.applicforge.com>',
      to: getRecipients(),
      subject: `🍻 [황금쭈꾸미집] 새로운 창업 문의 - ${data.name}님`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fff;">
          <!-- 헤더 -->
          <div style="background: linear-gradient(135deg, #dc2626, #f97316); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🍻 황금쭈꾸미집</h1>
            <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">새로운 창업 문의가 도착했습니다!</p>
          </div>
          
          <!-- 메인 콘텐츠 -->
          <div style="padding: 30px; background-color: #fef7e7; border-left: 6px solid #f97316;">
            <h2 style="color: #dc2626; font-size: 22px; margin: 0 0 25px 0; display: flex; align-items: center;">
              <span style="margin-right: 10px;">📋</span> 창업 문의 정보
            </h2>
            
            <div style="background-color: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <div style="margin-bottom: 20px; padding: 15px; background: linear-gradient(to right, #fef7e7, #fff7ed); border-left: 4px solid #f97316; border-radius: 6px;">
                <strong style="color: #7c2d12; font-size: 16px;">👤 신청자명:</strong>
                <span style="color: #1f2937; font-size: 18px; font-weight: bold; margin-left: 15px;">${data.name}</span>
              </div>
              
              <div style="margin-bottom: 20px; padding: 15px; background: linear-gradient(to right, #fef7e7, #fff7ed); border-left: 4px solid #f97316; border-radius: 6px;">
                <strong style="color: #7c2d12; font-size: 16px;">📞 연락처:</strong>
                <span style="color: #1f2937; font-size: 18px; font-weight: bold; margin-left: 15px;">${data.contact}</span>
              </div>
              
              ${data.message ? `
              <div style="margin-bottom: 20px; padding: 15px; background: linear-gradient(to right, #fef7e7, #fff7ed); border-left: 4px solid #f97316; border-radius: 6px;">
                <strong style="color: #7c2d12; font-size: 16px;">💬 문의 내용:</strong>
                <div style="margin-top: 10px; padding: 10px; background-color: white; border-radius: 4px; line-height: 1.6; color: #374151;">
                  ${data.message}
                </div>
              </div>
              ` : ''}
              
              ${data.region ? `
              <div style="margin-bottom: 20px; padding: 15px; background: linear-gradient(to right, #fef7e7, #fff7ed); border-left: 4px solid #f97316; border-radius: 6px;">
                <strong style="color: #7c2d12; font-size: 16px;">📝 문의 경로:</strong>
                <span style="color: #1f2937; font-size: 16px; margin-left: 15px;">${data.region}</span>
              </div>
              ` : ''}
              
              <div style="padding: 15px; background: linear-gradient(to right, #fef7e7, #fff7ed); border-left: 4px solid #f97316; border-radius: 6px;">
                <strong style="color: #7c2d12; font-size: 16px;">⏰ 접수 시간:</strong>
                <span style="color: #1f2937; font-size: 16px; margin-left: 15px;">${data.submittedAt}</span>
              </div>
            </div>
          </div>
          
          <!-- CTA -->
          <div style="padding: 25px; background: linear-gradient(135deg, #dc2626, #f97316); text-align: center;">
            <p style="color: white; font-size: 18px; font-weight: bold; margin: 0;">
              🔥 빠른 상담 연락을 부탁드립니다! 🔥
            </p>
            <p style="color: #fed7aa; font-size: 14px; margin: 8px 0 0 0;">
              황금쭈꾸미집과 함께하는 성공적인 창업의 첫걸음
            </p>
          </div>
          
          <!-- 푸터 -->
          <div style="padding: 20px; background-color: #78716c; text-align: center; color: white; font-size: 12px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0 0 5px 0;">이 이메일은 자동으로 발송되었습니다.</p>
            <p style="margin: 0; font-weight: bold; color: #fbbf24;">🍻 황금쭈꾸미집 - 성공 창업의 파트너</p>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('❌ Resend 에러:', error)
      return { success: false, error }
    }

    console.log('✅ 이메일 발송 성공:', emailData)
    return { success: true, data: emailData }
  } catch (error) {
    console.error('💥 이메일 발송 실패:', error)
    return { success: false, error }
  }
}

function getRecipients(): string[] {
  // 환경변수 NOTIFICATION_EMAILS에 콤마로 여러 수신자 지정 가능
  const envList = process.env.NOTIFICATION_EMAILS
  if (envList) {
    return envList.split(',').map((e) => e.trim()).filter(Boolean)
  }
  // 기본값: 복수 수신자
  return ['wjb127@naver.com', 'evenros01@naver.com']
}


