"use client";

import dynamic from "next/dynamic";

const LazyCanvas = dynamic(() => import("./LazyCanvas"), {
  ssr: false,
  loading: () => (
    <div className="from-nature-highlight to-nature-secondary fixed inset-0 -z-10 bg-gradient-to-b" />
  ),
});

/**
 * 전역 3D 배경 컴포넌트
 * 페이지의 모든 섹션에 걸쳐 고정된 3D 배경을 제공
 */
export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <LazyCanvas />
    </div>
  );
}
