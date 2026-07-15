# Next.js Starter Kit

웹 개발을 빠르게 시작할 수 있는 스타터킷입니다. 최신 버전의 검증된 스택으로 구성되어 있어, 반복적인 초기 설정 없이 바로 기능 개발에 착수할 수 있습니다.

## 기술 스택

| 항목 | 내용 |
| --- | --- |
| 프레임워크 | [Next.js](https://nextjs.org) (App Router, Turbopack) |
| 언어 | [TypeScript](https://www.typescriptlang.org) |
| 스타일링 | [Tailwind CSS v4](https://tailwindcss.com) |
| UI 컴포넌트 | [shadcn/ui](https://ui.shadcn.com) (Radix 기반) |
| 아이콘 | [lucide-react](https://lucide.dev) |
| 테마 | [next-themes](https://github.com/pacocoursey/next-themes) (라이트/다크/시스템) |

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경변수 설정

```bash
cp .env.example .env.local
```

### 3. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 결과를 확인할 수 있습니다.

## 주요 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 검사 |

## shadcn/ui 컴포넌트 추가

필요한 컴포넌트는 CLI로 추가할 수 있습니다.

```bash
npx shadcn@latest add [컴포넌트명]
# 예: npx shadcn@latest add dialog table tabs
```

전체 컴포넌트 목록은 [shadcn/ui 문서](https://ui.shadcn.com/docs/components)를 참고하세요.

## 폴더 구조

```
.
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        # 루트 레이아웃 (테마 프로바이더 + 헤더/푸터)
│  │  ├─ page.tsx          # 샘플 랜딩 페이지 (Hero + Feature 카드)
│  │  └─ globals.css       # Tailwind v4 + 테마 변수
│  ├─ components/
│  │  ├─ ui/               # shadcn/ui 컴포넌트
│  │  ├─ theme-provider.tsx  # 테마 컨텍스트 프로바이더
│  │  ├─ theme-toggle.tsx    # 테마 전환 버튼
│  │  ├─ mobile-nav.tsx      # 모바일 햄버거 메뉴(시트)
│  │  ├─ site-header.tsx     # 상단 네비게이션 바
│  │  └─ site-footer.tsx     # 하단 푸터
│  └─ lib/
│     └─ utils.ts          # cn 유틸리티 등 공통 헬퍼
├─ components.json         # shadcn/ui 설정
├─ .env.example            # 환경변수 샘플
└─ package.json
```

## 커스터마이징

- **테마 색상**: `src/app/globals.css` 의 CSS 변수를 수정합니다.
- **폰트**: `src/app/layout.tsx` 에서 `next/font` 설정을 변경합니다.
- **컴포넌트**: `src/components/ui/` 의 파일은 프로젝트에 직접 포함되어 있어 자유롭게 수정할 수 있습니다.
