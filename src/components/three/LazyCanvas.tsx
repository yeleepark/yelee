"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import SceneSetup from "./common/SceneSetup";

/**
 * Lazy-loaded Canvas 컴포넌트
 * SSR 비활성화를 위해 dynamic import와 함께 사용
 */
export default function LazyCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 10],
        fov: 50,
        near: 0.1,
        far: 1000,
      }}
      dpr={[1, 2]} // Device pixel ratio: 1x for low-end, 2x for high-end
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      className="!fixed !inset-0 !-z-10"
    >
      <Suspense fallback={null}>
        <SceneSetup />
      </Suspense>
    </Canvas>
  );
}
