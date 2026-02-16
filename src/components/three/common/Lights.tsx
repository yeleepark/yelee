"use client";

/**
 * 3D 씬의 조명 설정 컴포넌트
 * 자연스럽고 부드러운 조명 환경 제공
 */
export default function Lights() {
  return (
    <>
      {/* 주변광 - 전체적인 기본 밝기 */}
      <ambientLight intensity={0.6} color="#f4e4d7" />

      {/* 주광원 - 위쪽에서 비추는 따뜻한 빛 */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={0.8}
        color="#fff5e1"
        castShadow
      />

      {/* 보조광 - 뒤쪽에서 비추는 은은한 빛 (rim light) */}
      <directionalLight
        position={[-5, -5, -10]}
        intensity={0.3}
        color="#c69c6d"
      />

      {/* 포인트 라이트 - 중앙에서 발산하는 부드러운 빛 */}
      <pointLight position={[0, 0, 0]} intensity={0.4} color="#7c9885" />
    </>
  );
}
