"use client";

/**
 * 입체감을 강조하는 조명 설정
 * 명암 대비를 통한 드라마틱한 조명
 */
export default function Lights() {
  return (
    <>
      {/* 주변광 - 매우 낮게 설정하여 입체감 강조 */}
      <ambientLight intensity={0.15} color="#ffffff" />

      {/* 주광원 - 강한 방향광으로 하이라이트 생성 */}
      <directionalLight
        position={[10, 8, 5]}
        intensity={1.5}
        color="#ffffff"
        castShadow
      />

      {/* 측면 포인트 라이트 - 윤곽 강조 */}
      <pointLight position={[-8, 2, 3]} intensity={1.2} color="#4fc3f7" />

      {/* 후면 보조광 - 외곽 라인 생성 */}
      <directionalLight
        position={[-3, -5, -8]}
        intensity={0.4}
        color="#8888ff"
      />

      {/* 하단 약한 빛 - 그림자 완화 */}
      <pointLight position={[0, -5, 0]} intensity={0.3} color="#ffffff" />
    </>
  );
}
