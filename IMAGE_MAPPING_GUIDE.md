# 이미지 연결 가이드 문서

황금쭈꾸미집 랜딩페이지 클론 프로젝트에서 레퍼런스 HTML의 이미지를 올바른 로컬 이미지로 연결하기 위한 가이드입니다.

## 📋 이미지 연결 상태

### ✅ 완료된 이미지 연결

| 구분 | 컴포넌트 | 용도 | 레퍼런스 경로 | 연결된 로컬 이미지 | 상태 |
|------|----------|------|---------------|------------------|------|
| 로고 | Header | 메인 로고 | `./황금쭈꾸미집_files/e9c9fbfb95f43.png` | `/images/e9c9fbfb95f43.png` | ✅ 완료 |
| 전화번호 | Header, Hero, Contact, Footer | 연락처 이미지 | `./황금쭈꾸미집_files/d026e3399a332.png` | `/images/d026e3399a332.png` | ✅ 완료 |
| 배경 | HeroSection | 첫 번째 슬라이드 배경 | `./황금쭈꾸미집_files/5ee1f4de0f2bb.jpg` | `/images/5ee1f4de0f2bb.jpg` | ✅ 완료 |
| 배경 | HeroSection | 두 번째 슬라이드 배경 | `./황금쭈꾸미집_files/333a18a6bd0a2.jpg` | `/images/333a18a6bd0a2.jpg` | ✅ 완료 |
| 로고 | HeroSection | 슬라이드 내 로고 | `./황금쭈꾸미집_files/b4201f868df71.png` | `/images/b4201f868df71.png` | ✅ 완료 |

### 🔄 연결 대기 중인 이미지

| 구분 | 컴포넌트 | 용도 | 레퍼런스 경로 | 대상 로컬 이미지 | 우선순위 | 상태 |
|------|----------|------|---------------|-----------------|----------|------|
| 콘텐츠 | BrandSection | 브랜드 소개 이미지 | `./황금쭈꾸미집_files/aff99ce23d431.png` | `/images/aff99ce23d431.png` | High | ⏳ 대기 |
| 배경 | CompetitiveSection | 경쟁력 섹션 배경 | `./황금쭈꾸미집_files/5ee1f4de0f2bb.jpg` | `/images/5ee1f4de0f2bb.jpg` | High | ⏳ 대기 |
| 배경 | FranchiseSection | 창업 안내 배경 | `./황금쭈꾸미집_files/e08a8254ed5ca.png` | `/images/e08a8254ed5ca.png` | High | ⏳ 대기 |
| 메뉴 | MenuSection | 황금 쭈꾸미 볶음 | `./황금쭈꾸미집_files/368e212673c31.jpeg` | `/images/368e212673c31.jpeg` | Medium | ⏳ 대기 |
| 메뉴 | MenuSection | 삼겹살 쭈꾸미 | `./황금쭈꾸미집_files/3a31d837ea108.jpeg` | `/images/3a31d837ea108.jpeg` | Medium | ⏳ 대기 |
| 메뉴 | MenuSection | 대창 쭈꾸미 | `./황금쭈꾸미집_files/607686ec463de.jpeg` | `/images/607686ec463de.jpeg` | Medium | ⏳ 대기 |
| 메뉴 | MenuSection | 우삼겹 쭈꾸미 | `./황금쭈꾸미집_files/9b29d411a2014.jpeg` | `/images/9b29d411a2014.jpeg` | Medium | ⏳ 대기 |
| 메뉴 | MenuSection | 매운 쭈꾸미 | `./황금쭈꾸미집_files/907ef2b3cccf9.jpeg` | `/images/907ef2b3cccf9.jpeg` | Medium | ⏳ 대기 |
| 메뉴 | MenuSection | 계란찜 | `./황금쭈꾸미집_files/14117213e60f6.jpg` | `/images/14117213e60f6.jpg` | Medium | ⏳ 대기 |

## 🔧 이미지 연결 작업 방법

### 1. 이미지 경로 확인
레퍼런스 HTML에서 이미지 경로를 찾는 방법:
```bash
grep -n "src.*황금쭈꾸미집_files" 황금쭈꾸미집.html
```

### 2. 컴포넌트에서 이미지 연결
```jsx
// 기존
<Image src="/images/placeholder.jpg" />

// 연결 후
<Image src="/images/5ee1f4de0f2bb.jpg" />
```

### 3. 배경 이미지 연결
```jsx
// CSS 스타일로 배경 이미지 적용
<div 
  className="background-image"
  style={{
    backgroundImage: 'url(/images/5ee1f4de0f2bb.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

## 📝 연결 요청 템플릿

이미지 연결을 요청할 때 다음 형식을 사용해주세요:

```
[컴포넌트명] [용도] 이미지를 
레퍼런스: ./황금쭈꾸미집_files/[파일명]
로컬: /images/[파일명] 
으로 연결해줘
```

**예시:**
```
BrandSection 브랜드 소개 이미지를
레퍼런스: ./황금쭈꾸미집_files/aff99ce23d431.png
로컬: /images/aff99ce23d431.png
으로 연결해줘
```

## 🎯 우선순위별 작업 계획

### High Priority (높은 우선순위)
1. **BrandSection**: 브랜드 소개 이미지
2. **CompetitiveSection**: 배경 이미지  
3. **FranchiseSection**: 배경 이미지

### Medium Priority (중간 우선순위)
1. **MenuSection**: 모든 메뉴 이미지들 (6개)

### Low Priority (낮은 우선순위)
1. 장식용 이미지들
2. 아이콘류
3. 기타 UI 요소들

## 📊 진행 상황 추적

- **총 이미지**: 약 130개
- **완료**: 5개 (3.8%)
- **대기**: 9개 (6.9%)
- **미확인**: 116개 (89.3%)

---

**🔄 업데이트 일시**: 2024-08-01
**📝 작성자**: Claude Code Assistant