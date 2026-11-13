"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/utils";

function CompassMesh() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * 1.6, Math.sin(a) * 1.6, 0));
    }
    return pts;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.z = Math.sin(t * 0.35) * 0.15;
      group.current.rotation.x = 0.4 + Math.sin(t * 0.2) * 0.05;
    }
    if (ring.current) {
      ring.current.rotation.z = -t * 0.25;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={group}>
        <mesh ref={ring}>
          <torusGeometry args={[1.65, 0.02, 12, 80]} />
          <meshBasicMaterial color="#3B2DD8" transparent opacity={0.85} />
        </mesh>
        <Line points={points} color="#22D3EE" lineWidth={1} transparent opacity={0.35} />
        <mesh position={[0, 0.55, 0]}>
          <coneGeometry args={[0.12, 0.9, 3]} />
          <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0, -0.45, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.1, 0.7, 3]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.25} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </mesh>
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 2, 3]} intensity={1.2} color="#3B2DD8" />
        <pointLight position={[-2, -1, 2]} intensity={0.8} color="#22D3EE" />
      </group>
    </Float>
  );
}

function FallbackCompass() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full text-cyan-brand/80" aria-hidden>
      <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(59,45,216,0.7)" strokeWidth="2" />
      <circle cx="100" cy="100" r="56" fill="none" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
      <polygon points="100,40 110,100 100,92 90,100" fill="#22D3EE" />
      <polygon points="100,160 110,100 100,108 90,100" fill="#8B5CF6" />
      <circle cx="100" cy="100" r="5" fill="#fff" />
    </svg>
  );
}

export function HeroCompass() {
  const [mode, setMode] = useState<"loading" | "3d" | "fallback">("loading");

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    setMode(reduced || mobile ? "fallback" : "3d");
  }, []);

  if (mode !== "3d") {
    return (
      <div className="relative h-full w-full">
        <FallbackCompass />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} dpr={[1, 1.5]}>
        <CompassMesh />
      </Canvas>
    </div>
  );
}
