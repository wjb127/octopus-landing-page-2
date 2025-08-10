import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message, region } = await request.json()

    // 필수 필드 검증
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      )
    }

    // 관리자에게 알림 이메일 발송
    const { data, error } = await resend.emails.send({
      from: 'noreply@resend.dev', // Resend 기본 도메인 사용
      to: process.env.NOTIFICATION_EMAIL || 'wjb127@naver.com',
      subject: `[황금쭈꾸미집] 새로운 창업 문의 - ${name}님`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #dc2626; text-align: center; margin-bottom: 30px;">
            🍻 새로운 창업 문의가 도착했습니다!
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-top: 0;">📋 문의자 정보</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 80px;">이름:</td>
                <td style="padding: 8px 0; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">연락처:</td>
                <td style="padding: 8px 0; color: #111827;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">지역:</td>
                <td style="padding: 8px 0; color: #111827;">${region || '미지정'}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #92400e; margin-top: 0;">💬 문의 내용</h3>
            <p style="color: #451a03; line-height: 1.6; margin: 0; white-space: pre-line;">${message}</p>
          </div>

          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              문의 접수 시간: ${new Date().toLocaleString('ko-KR')}
            </p>
            <p style="color: #dc2626; font-weight: bold; margin: 10px 0 0 0;">
              빠른 상담 연락을 부탁드립니다! 📞
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend 이메일 발송 에러:', error)
      return NextResponse.json(
        { error: '이메일 발송에 실패했습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: '문의가 성공적으로 접수되었습니다.',
        emailId: data?.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API 에러:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}