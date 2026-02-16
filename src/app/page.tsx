import ThreeBackground from "@/components/three/ThreeBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ThreeBackground />

      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Three.js Ready
        </h1>
      </div>
    </main>
  );
}
