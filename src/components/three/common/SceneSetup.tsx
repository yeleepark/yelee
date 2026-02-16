"use client";

import Lights from "./Lights";

/**
 * 3D 씬의 기본 설정 컴포넌트
 * 조명 및 전역 3D 요소를 관리
 */
export default function SceneSetup() {
  return (
    <>
      <Lights />
      <color attach="background" args={["#f4e4d7"]} />
    </>
  );
}
