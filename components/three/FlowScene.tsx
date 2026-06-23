"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/** 3D 심박(ECG) 튜브 + 그 위를 흐르는 발광 펄스 + 깊이감 있는 웨이브 */
function PulseLine() {
  const group = useRef<THREE.Group>(null);
  const dot = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.PointLight>(null);

  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const N = 260;
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const x = (t - 0.5) * 17;
      const phase = (t * 3.0) % 1; // 3번의 심박 반복
      const d = phase - 0.5;
      // 기준선의 잔잔한 물결 + 날카로운 심박 스파이크(QRS 느낌)
      let y = Math.sin(t * Math.PI * 7) * 0.1;
      y += Math.exp(-Math.pow(d * 24, 2)) * 2.3; // R peak
      y -= Math.exp(-Math.pow((d - 0.035) * 34, 2)) * 1.0; // S dip
      y -= Math.exp(-Math.pow((d + 0.035) * 40, 2)) * 0.5; // Q dip
      const z = Math.sin(t * Math.PI * 4) * 1.25; // 깊이감
      pts.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.CatmullRomCurve3(pts);
  }, []);

  const tube = useMemo(
    () => new THREE.TubeGeometry(curve, 700, 0.05, 16, false),
    [curve]
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      // 마우스 패럴랙스 + 잔잔한 자동 회전 (스크롤은 가로채지 않음)
      const tx = state.pointer.x * 0.5 + Math.sin(t * 0.1) * 0.12;
      const ty = -state.pointer.y * 0.3 + Math.cos(t * 0.12) * 0.06;
      group.current.rotation.y += (tx - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (ty - group.current.rotation.x) * 0.05;
    }
    const p = (t * 0.16) % 1;
    const pos = curve.getPointAt(p);
    if (dot.current) dot.current.position.copy(pos);
    if (glow.current) glow.current.position.copy(pos);
  });

  return (
    <group ref={group}>
      <mesh geometry={tube}>
        <meshStandardMaterial
          color="#0a0a0a"
          emissive="#2f6bff"
          emissiveIntensity={1.5}
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>
      {/* 흐르는 발광 펄스 */}
      <mesh ref={dot}>
        <sphereGeometry args={[0.17, 24, 24]} />
        <meshStandardMaterial
          color="#b7ff2e"
          emissive="#b7ff2e"
          emissiveIntensity={4}
          toneMapped={false}
        />
      </mesh>
      <pointLight ref={glow} intensity={3} distance={6} color="#b7ff2e" />
    </group>
  );
}

/** 떠다니는 미세 파티클 — 공간감 */
function Dust() {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const n = 700;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 24;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 13;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 13;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, []);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.025;
  });
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.045}
        color="#f6f5f1"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function FlowScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 11], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[6, 5, 8]} intensity={1.3} color="#2f6bff" />
      <pointLight position={[-7, -3, 5]} intensity={0.7} color="#b7ff2e" />
      <PulseLine />
      <Dust />
      <EffectComposer>
        <Bloom
          intensity={1.15}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.4}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
