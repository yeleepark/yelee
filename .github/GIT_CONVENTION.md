# Git 커밋 컨벤션

이 프로젝트는 일관된 커밋 히스토리를 위해 다음과 같은 커밋 컨벤션을 따릅니다.

## 커밋 메시지 구조

```
<타입>: <제목>

<본문> (선택사항)

<꼬리말> (선택사항)
```

### 1. 타입 (Type)

커밋의 종류를 나타냅니다. 다음 중 하나를 선택합니다:

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정 (README, 주석 등)
- `style`: 코드 포맷팅, 세미콜론 누락 등 (기능 변경 없음)
- `refactor`: 코드 리팩토링 (기능 변경 없음)
- `test`: 테스트 코드 추가 또는 수정
- `chore`: 빌드 업무, 패키지 매니저 설정 등
- `perf`: 성능 개선
- `ci`: CI/CD 설정 변경
- `revert`: 이전 커밋 되돌리기

### 2. 제목 (Subject)

- **한글로 작성**합니다
- 50자 이내로 작성합니다
- 마침표를 붙이지 않습니다
- 명령형으로 작성합니다 (예: "추가함" ❌ → "추가" ⭕)

### 3. 본문 (Body)

- 선택사항입니다
- 제목과 본문 사이에 빈 줄을 넣습니다
- 무엇을, 왜 변경했는지 작성합니다 (어떻게는 코드로 설명)
- 72자마다 줄바꿈합니다

### 4. 꼬리말 (Footer)

- 선택사항입니다
- 이슈 번호를 참조하거나 Breaking Changes를 명시합니다
- 형식: `Refs: #이슈번호`, `Closes: #이슈번호`, `BREAKING CHANGE: 설명`

## 커밋 메시지 예시

### 기본 예시

```
feat: 사용자 로그인 기능 추가
```

### 본문이 있는 예시

```
fix: 로그인 시 세션 만료 오류 수정

사용자가 로그인 후 30분이 지나면 세션이 만료되어야 하는데,
만료 시간이 제대로 설정되지 않아 즉시 만료되는 문제를 수정했습니다.

Closes: #123
```

### Breaking Change 예시

```
refactor: API 응답 형식 변경

기존 응답 형식을 REST API 표준에 맞게 변경했습니다.

BREAKING CHANGE: API 응답의 data 필드가 result로 변경되었습니다.
```

### 여러 파일 수정 예시

```
chore: ESLint 및 Prettier 설정 추가

- ESLint 9 Flat Config 적용
- Prettier 포맷터 설정
- import/order 자동 정렬 규칙 추가
```

## 타입별 예시

```bash
# 새 기능
feat: 다크모드 토글 기능 추가
feat: 프로필 이미지 업로드 구현

# 버그 수정
fix: 모바일 네비게이션 메뉴 버그 수정
fix: 이미지 로딩 실패 시 fallback 처리

# 문서
docs: README에 설치 가이드 추가
docs: API 문서 업데이트

# 스타일
style: 코드 포맷팅 적용
style: 변수명 컨벤션 통일

# 리팩토링
refactor: 사용자 인증 로직 분리
refactor: 중복 코드 제거 및 함수 추출

# 테스트
test: 로그인 컴포넌트 단위 테스트 추가
test: API 통합 테스트 작성

# 기타 변경
chore: 의존성 패키지 업데이트
chore: 빌드 스크립트 수정

# 성능
perf: 이미지 레이지 로딩 적용
perf: 번들 사이즈 최적화

# CI/CD
ci: GitHub Actions 워크플로우 추가
ci: 배포 스크립트 수정
```

## 규칙 검증

이 프로젝트는 `commitlint`를 사용하여 커밋 메시지를 자동으로 검증합니다.
규칙에 맞지 않는 커밋 메시지는 거부됩니다.

## Co-authored-by

페어 프로그래밍이나 AI 협업 시 공동 작성자를 명시합니다:

```
feat: 결제 시스템 구현

Co-Authored-By: Name <email@example.com>
Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```
