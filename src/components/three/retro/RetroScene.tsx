"use client";

import CRTEffects from "./CRTEffects";
import Earth from "../objects/Earth";

/**
 * 윈도우 98 레트로 스타일 메인 씬
 * CRT 효과 적용
 */
export default function RetroScene() {
  return (
    <>
      <CRTEffects />
      <Earth />
    </>
  );
}
