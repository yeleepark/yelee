const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 타입은 영문 소문자로
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "test",
        "chore",
        "perf",
        "ci",
        "revert",
      ],
    ],
    // 제목은 한글 허용 (subject-case 비활성화)
    "subject-case": [0],
    // 제목에 마침표 금지
    "subject-full-stop": [2, "never", "."],
    // 제목 최대 길이
    "subject-max-length": [2, "always", 50],
    // 본문 최대 줄 길이
    "body-max-line-length": [2, "always", 72],
    // 타입은 항상 소문자
    "type-case": [2, "always", "lower-case"],
    // 빈 제목 금지
    "subject-empty": [2, "never"],
    // 타입은 필수
    "type-empty": [2, "never"],
  },
};

export default config;
