"use client";

import CRTEffects from "./CRTEffects";
import Earth from "../objects/Earth";
import Stars from "../objects/Stars";

/**
 * 윈도우 98 레트로 스타일 메인 씬
 * CRT 효과 적용
 */
export default function RetroScene() {
  return (
    <>
      <CRTEffects />

      {/* 별 파티클 배경 */}
      <Stars />

      {/* 중앙 지구 */}
      <Earth />
    </>
  );
}
