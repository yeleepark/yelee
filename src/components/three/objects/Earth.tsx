"use client";

import { useRef } from "react";

import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";

/**
 * 회전하는 지구 오브젝트
 */
export default function Earth() {
  const meshRef = useRef<Mesh>(null);

  // 지구 텍스처 로드
  const earthTexture = useLoader(
    TextureLoader,
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg"
  );

  // 자동 회전
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3; // Y축 회전
      meshRef.current.rotation.x = 0.3; // X축 기울기 고정
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* 구체 지오메트리 - 80% 크기 (1.6) */}
      <sphereGeometry args={[1.6, 64, 64]} />

      {/* 지구 텍스처 머티리얼 - 선명하고 밝게 */}
      <meshStandardMaterial
        map={earthTexture}
        roughness={0.8}
        metalness={0}
        emissive="#ffffff"
        emissiveIntensity={0.2}
        emissiveMap={earthTexture}
      />
    </mesh>
  );
}
