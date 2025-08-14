import { NextRequest, NextResponse } from 'next/server'
import { sendLeadNotificationEmail } from '@/lib/email'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message, region, location } = await request.json()

    // 필수 필드 검증
    if (!name || !phone) {
      return NextResponse.json(
        { error: '이름과 연락처는 필수입니다.' },
        { status: 400 }
      )
    }

    // 데이터베이스에 저장
    const { data: dbData, error: dbError } = await supabase
      .from('kmong_7_inquiries')
      .insert([
        {
          name,
          contact: phone,
          location: message || location || '문의 내용 없음'
        }
      ])
      .select()

    if (dbError) {
      console.error('DB 저장 실패:', dbError)
    } else {
      console.log('✅ DB 저장 성공:', dbData)
    }

    // 쭈꾸미집 창업 문의 이메일 발송
    const emailResult = await sendLeadNotificationEmail({
      name,
      contact: phone,
      message: message || location || '문의 내용 없음',
      region: region || '웹사이트 문의',
      submittedAt: new Date().toLocaleString('ko-KR')
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