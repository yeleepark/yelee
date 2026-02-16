# Portfolio Website

Next.js 16 기반 포트폴리오 웹사이트 스타터 템플릿입니다.

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **State Management**: @tanstack/react-query
- **HTTP Client**: Axios

## 개발 도구

- **코드 포맷터**: Prettier (+ prettier-plugin-tailwindcss)
- **린터**: ESLint 9 (Flat Config)
- **Import 정렬**: eslint-plugin-import-x
- **패키지 매니저**: pnpm

## 시작하기

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
pnpm build
```

### 프로덕션 실행

```bash
pnpm start
```

## 사용 가능한 스크립트

```bash
# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# ESLint 검사
pnpm lint

# ESLint 자동 수정
pnpm lint:fix

# Prettier 포맷팅
pnpm format

# Prettier 검사 (CI용)
pnpm format:check
```

## 프로젝트 구조

```
yeleepark/
├── public/                  # 정적 파일
├── src/
│   └── app/
│       ├── layout.tsx       # 루트 레이아웃
│       ├── page.tsx         # 메인 페이지
│       ├── globals.css      # 글로벌 스타일 (Tailwind)
│       └── favicon.ico
├── .prettierrc              # Prettier 설정
├── .prettierignore          # Prettier 제외 파일
├── eslint.config.mjs        # ESLint 설정 (Flat Config)
├── tailwind.config.ts       # Tailwind CSS 설정
├── next.config.ts           # Next.js 설정
├── tsconfig.json            # TypeScript 설정
└── package.json
```

## ESLint 설정

다음 규칙이 적용되어 있습니다:

- TypeScript 타입 체크
- React Hooks 규칙
- Import 자동 정렬 (React/Next.js 우선)
- 사용하지 않는 변수 감지
- console.log 경고 (warn, error는 허용)

## Prettier 설정

- 세미콜론 사용
- 더블 쿼트 사용
- 탭 너비: 2칸
- 최대 라인 길이: 80자
- Tailwind CSS 클래스 자동 정렬

## 배포

### Vercel (권장)

1. GitHub에 코드를 푸시합니다.
2. [Vercel](https://vercel.com)에 로그인합니다.
3. "New Project"를 클릭하고 GitHub 저장소를 선택합니다.
4. 자동으로 배포가 시작됩니다.

### 기타 플랫폼

- **Netlify**: `pnpm build` 후 `.next` 폴더 배포
- **AWS Amplify**: Next.js 프리셋 선택

## 라이선스

MIT License
