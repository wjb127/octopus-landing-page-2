import { createClient } from '@supabase/supabase-js'

// Supabase 환경 변수 설정
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Supabase 클라이언트 생성
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 테이블 타입 정의
export interface KmongInquiry {
  id?: number
  name: string
  contact: string
  location: string
  created_at?: string
}