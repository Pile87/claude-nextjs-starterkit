# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16(App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui 기반의 웹 개발 스타터킷. 기능 코드는 거의 없고, 새 프로젝트가 바로 기능 개발에 착수할 수 있도록 테마·레이아웃·UI 컴포넌트 기반만 갖춰져 있다.

## 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 (http://localhost:3000) |
| `npm run build` | 프로덕션 빌드 (타입 검사 포함) |
| `npm run start` | 프로덕션 서버 |
| `npm run lint` | ESLint 검사 |
| `npx tsc --noEmit` | 타입 검사만 단독 수행 |

- **테스트 프레임워크가 설정되어 있지 않다.** 테스트 러너, 테스트 파일, 관련 의존성이 모두 없으므로 "단일 테스트 실행" 명령도 존재하지 않는다. 검증은 `npm run lint` + `npx tsc --noEmit` + `npm run build`로 한다. 테스트가 필요해지면 러너부터 도입해야 한다.
- 최초 셋업 시 `cp .env.example .env.local` 후 값을 채운다.

## 아키텍처

### 테마 시스템 (여러 파일에 걸쳐 연결됨)

라이트/다크/시스템 테마는 세 곳이 맞물려 동작한다. 하나만 고치면 깨진다.

1. `src/app/layout.tsx` — `<html>`에 `suppressHydrationWarning`을 걸고 `ThemeProvider`를 `attribute="class"`, `defaultTheme="system"`으로 구성한다. next-themes가 `<html>`에 `.dark` 클래스를 토글한다.
2. `src/app/globals.css` — `@custom-variant dark (&:is(.dark *))`로 그 클래스를 Tailwind의 `dark:` 변형에 연결한다.
3. `src/components/theme-provider.tsx` / `theme-toggle.tsx` — 클라이언트 컴포넌트 래퍼.

### Tailwind CSS v4 (설정 파일 없음)

`tailwind.config.js`가 **없다** (`components.json`의 `tailwind.config`도 빈 문자열). 모든 테마 설정은 `src/app/globals.css`의 CSS-first 방식으로 존재한다.

- `@import "tailwindcss"`, `"tw-animate-css"`, `"shadcn/tailwind.css"`
- `@theme inline { ... }` 블록이 CSS 변수(`--background`, `--primary`, `--chart-*`, `--sidebar-*` 등)를 Tailwind 유틸리티 토큰에 매핑한다.
- 색상·폰트 토큰을 추가/변경하려면 JS 설정이 아니라 `globals.css`의 CSS 변수를 편집한다.

### shadcn/ui

- 설정은 `components.json`: style `radix-nova`, baseColor `neutral`, `rsc: true`, `cssVariables: true`, 아이콘 라이브러리 `lucide`.
- `src/components/ui/`의 파일은 벤더 코드가 아니라 **프로젝트 소유 코드**다. 직접 수정해도 되며, 수정 시 해당 컴포넌트 재추가(`add`)로 덮어써지지 않도록 주의한다.
- 새 컴포넌트 추가: `npx shadcn@latest add <컴포넌트명>` (예: `npx shadcn@latest add dialog table tabs`). 직접 손으로 작성하지 말고 CLI를 사용한다.
- 현재 포함: button, card, dropdown-menu, input, label, sonner.

### 레이아웃 및 규칙

- `src/app/layout.tsx`가 전역 셸을 정의한다: `ThemeProvider > SiteHeader + main + SiteFooter + Toaster(sonner)`. 페이지는 `main` 내부만 채우므로 헤더/푸터를 페이지에서 다시 렌더링하지 않는다.
- App Router 기본값은 서버 컴포넌트다. 훅·이벤트 핸들러가 필요할 때만 `"use client"`를 붙인다 (현재 `theme-provider`, `theme-toggle`이 해당).
- 경로 별칭: `@/*` → `./src/*` (예: `@/components/ui/button`, `@/lib/utils`).
- 클래스명 결합은 항상 `src/lib/utils.ts`의 `cn()` (clsx + tailwind-merge)을 사용한다.
- 토스트는 sonner를 쓴다. `Toaster`는 루트 레이아웃에 이미 마운트되어 있으므로 `toast()` 호출만 하면 된다.
- 폰트는 `layout.tsx`의 `next/font` (Geist Sans/Mono) → CSS 변수 `--font-geist-sans`, `--font-geist-mono`로 노출된다.

## 주의사항

- `.env*` 파일은 권한 설정상 읽기가 차단되어 있다 (`~/.claude/settings.json`의 deny 규칙). 환경변수 내용이 필요하면 사용자에게 요청한다.
