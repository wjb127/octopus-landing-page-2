const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://bzzjkcrbwwrqlumxigag.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6emprY3Jid3dycWx1bXhpZ2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MTM0OTUsImV4cCI6MjA0NDM4OTQ5NX0.yuQ9Ofc-s2sSHcRSU2_p9ZtcIL0yracXfVa48ZlmUNY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  console.log('🔍 kmong_7_inquiries 테이블 테스트...\n')
  
  try {
    // 테이블 조회
    const { data, error, count } = await supabase
      .from('kmong_7_inquiries')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('❌ 테이블 조회 실패:', error)
      console.error('에러 메시지:', error.message)
      console.error('에러 코드:', error.code)
      console.error('에러 상세:', error.details)
      return
    }

    console.log('✅ 테이블 조회 성공!')
    console.log('📊 전체 데이터 수:', count || data?.length || 0)
    
    if (data && data.length > 0) {
      console.log('\n📋 데이터 목록:')
      data.forEach((item, index) => {
        console.log(`${index + 1}. ID: ${item.id}, 이름: ${item.name}, 연락처: ${item.contact}`)
      })
    } else {
      console.log('⚠️ 테이블은 존재하지만 데이터가 없습니다.')
    }
  } catch (err) {
    console.error('💥 예외 발생:', err)
  }
}

testConnection()