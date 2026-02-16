"use client";

import Lights from "./Lights";
import RetroScene from "../retro/RetroScene";

/**
 * 3D 씬의 기본 설정 컴포넌트
 * 윈도우 98 레트로 스타일 씬 구성
 */
export default function SceneSetup() {
  return (
    <>
      <Lights />
      <color attach="background" args={["#0a0a0a"]} />
      <RetroScene />
    </>
  );
}
