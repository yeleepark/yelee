"use client";

import {
  EffectComposer,
  ChromaticAberration,
  Vignette,
  Noise,
  Bloom,
  Scanline,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

/**
 * CRT 모니터 효과 포스트프로세싱
 * 윈도우 98 시대의 CRT 디스플레이 느낌을 재현
 */
export default function CRTEffects() {
  return (
    <EffectComposer>
      {/* 스캔라인 효과 - CRT의 가로줄 */}
      <Scanline
        density={1.5}
        opacity={0.15}
        blendFunction={BlendFunction.OVERLAY}
      />

      {/* 색수차 - RGB 채널 분리 */}
      <ChromaticAberration
        offset={[0.002, 0.002]}
        blendFunction={BlendFunction.NORMAL}
      />

      {/* 비네팅 - 화면 가장자리 어둡게 */}
      <Vignette
        offset={0.3}
        darkness={0.5}
        blendFunction={BlendFunction.NORMAL}
      />

      {/* 글로우 효과 - 밝은 영역 발광 */}
      <Bloom
        intensity={0.5}
        luminanceThreshold={0.6}
        luminanceSmoothing={0.9}
      />

      {/* 노이즈 - 화면 잡음 */}
      <Noise opacity={1} blendFunction={BlendFunction.OVERLAY} />
    </EffectComposer>
  );
}
