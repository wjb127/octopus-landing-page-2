-- kmong_7_inquiries 테이블 생성
CREATE TABLE IF NOT EXISTS kmong_7_inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  contact VARCHAR(100) NOT NULL,
  location TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) 활성화
ALTER TABLE kmong_7_inquiries ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 INSERT할 수 있도록 정책 생성
CREATE POLICY "Enable insert for all users" ON kmong_7_inquiries
FOR INSERT TO public
WITH CHECK (true);

-- 모든 사용자가 SELECT할 수 있도록 정책 생성 (대시보드용)
CREATE POLICY "Enable select for all users" ON kmong_7_inquiries
FOR SELECT TO public
USING (true);

-- 모든 사용자가 DELETE할 수 있도록 정책 생성 (대시보드용)
CREATE POLICY "Enable delete for all users" ON kmong_7_inquiries
FOR DELETE TO public
USING (true);

-- 인덱스 생성 (검색 성능 향상)
CREATE INDEX idx_kmong_7_inquiries_created_at ON kmong_7_inquiries(created_at DESC);