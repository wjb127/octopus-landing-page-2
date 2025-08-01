# 황금쭈꾸미집 랜딩페이지 클론

Next.js 15로 구현한 황금쭈꾸미집 브랜드 랜딩페이지입니다.

## 🚀 데모

- **개발 서버**: http://localhost:3007
- **GitHub**: https://github.com/wjb127/octopus-landing-page

## ✨ 주요 기능

### 📱 반응형 디자인
- 모바일부터 데스크톱까지 완벽한 반응형 지원
- 모바일 전용 네비게이션 메뉴
- 터치 친화적인 인터페이스

### 🎨 인터랙티브 요소
- **원페이지 스크롤 네비게이션**: 부드러운 스크롤과 섹션별 활성화
- **자동 슬라이더**: 5초 간격 자동 전환, 수동 조작 가능
- **애니메이션**: Framer Motion을 활용한 섹션별 등장 효과
- **호버 효과**: 인터랙티브한 UI 요소들

### 🏢 비즈니스 섹션
1. **히어로 섹션**: 브랜드 메시지와 자동 슬라이더
2. **브랜드 소개**: 회사 가치와 스토리
3. **경쟁력**: 프랜차이즈 강점과 통계
4. **메뉴 갤러리**: 카테고리별 메뉴 필터링
5. **창업 안내**: 프랜차이즈 프로세스와 혜택
6. **창업 문의**: 연락처 정보와 상담 신청 폼

## 🛠 기술 스택

### 프론트엔드
- **Next.js 15**: React 프레임워크
- **TypeScript**: 타입 안전성
- **Tailwind CSS**: 유틸리티 퍼스트 CSS
- **Framer Motion**: 애니메이션 라이브러리
- **Lucide React**: 아이콘 라이브러리

### 개발 도구
- **ESLint**: 코드 품질 관리
- **PostCSS**: CSS 후처리
- **Git**: 버전 관리

## 📦 설치 및 실행

### 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone https://github.com/wjb127/octopus-landing-page.git
cd octopus-landing-page

# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

### 빌드
```bash
# 프로덕션 빌드
npm run build

# 빌드된 애플리케이션 실행
npm start
```

## 📁 프로젝트 구조

```
octopus-landing-clone/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # 헤더 및 네비게이션
│   │   └── Footer.tsx          # 푸터
│   ├── sections/
│   │   ├── HeroSection.tsx     # 메인 슬라이더
│   │   ├── BrandSection.tsx    # 브랜드 소개
│   │   ├── CompetitiveSection.tsx # 경쟁력
│   │   ├── MenuSection.tsx     # 메뉴 갤러리
│   │   ├── FranchiseSection.tsx # 창업 안내
│   │   └── ContactSection.tsx  # 창업 문의
│   └── ui/
│       └── ClientOnly.tsx      # 클라이언트 전용 렌더링
├── public/
│   └── images/                 # 이미지 에셋
├── src/
│   └── app/
│       ├── layout.tsx          # 루트 레이아웃
│       ├── page.tsx            # 메인 페이지
│       └── globals.css         # 글로벌 스타일
└── README.md
```

## 🎯 주요 컴포넌트

### Header.tsx
- 반응형 네비게이션 바
- 스크롤 위치 기반 스타일 변경
- 모바일 햄버거 메뉴
- 원페이지 네비게이션

### HeroSection.tsx
- 자동 이미지 슬라이더
- 브랜드 메시지 표시
- 인디케이터와 화살표 네비게이션
- Framer Motion 애니메이션

### MenuSection.tsx
- 카테고리별 메뉴 필터링
- 이미지 갤러리
- 메뉴 정보 (가격, 조리시간, 인분)
- 호버 효과

## 🔧 커스터마이징

### 색상 테마 변경
`tailwind.config.js`에서 색상 팔레트 수정:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#dc2626', // 빨간색 테마
        secondary: '#fbbf24', // 노란색 액센트
      }
    }
  }
}
```

### 애니메이션 수정
각 섹션의 `variants` 객체를 수정하여 애니메이션 조정:

```typescript
const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
```

## 🚀 배포

### Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

### Netlify
```bash
# 빌드
npm run build

# dist 폴더를 Netlify에 업로드
```

---

🤖 **Generated with Claude Code**

Co-Authored-By: Claude <noreply@anthropic.com>
