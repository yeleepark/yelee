"use client";

import { useRef, useMemo } from "react";

import { useFrame } from "@react-three/fiber";
import { Points, BufferAttribute, BufferGeometry } from "three";

// 별 위치 생성 함수 (컴포넌트 외부)
function generateStarPositions() {
  const count = 2000; // 별 개수
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    // 구형으로 분포
    const radius = 50 + Math.random() * 50;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
  }

  return positions;
}

// 별 위치 미리 생성 (한 번만)
const starPositions = generateStarPositions();

/**
 * 별 파티클 배경
 */
export default function Stars() {
  const pointsRef = useRef<Points>(null);

  // BufferGeometry 생성
  const geometry = useMemo(() => {
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(starPositions, 3));
    return geometry;
  }, []);

  // 느린 회전 애니메이션
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.15}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}
