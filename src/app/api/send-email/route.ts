import { NextRequest, NextResponse } from 'next/server'
import { sendLeadNotificationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message, region, loanType, creditStatus, submittedAt } = await request.json()

    // 필수 필드 검증
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      )
    }

    // 통합 이메일 유틸 호출 (필드 매핑 포함)
    const emailResult = await sendLeadNotificationEmail({
      name,
      contact: phone,
      loanType: loanType || region || '미지정',
      creditStatus: creditStatus || '미입력',
      submittedAt: submittedAt || new Date().toLocaleString('ko-KR')
    })

    if (!emailResult.success) {
      return NextResponse.json(
        { error: '이메일 발송에 실패했습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: '문의가 성공적으로 접수되었습니다.' },
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