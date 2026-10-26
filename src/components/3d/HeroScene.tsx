"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import { ParticleField } from "./ParticleField";

function OrbitalRing({
  radius,
  rotation,
  speed,
  color,
  tubeRadius = 0.015,
  satelliteLabel,
  satelliteColor,
}: {
  radius: number;
  rotation: [number, number, number];
  speed: number;
  color: string;
  tubeRadius?: number;
  satelliteLabel?: string;
  satelliteColor?: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const satelliteRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * speed;
    }
  });

  return (
    <group rotation={rotation}>
      <group ref={groupRef}>
        {/* Ring Torus */}
        <mesh>
          <torusGeometry args={[radius, tubeRadius, 16, 80]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.45}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Orbiting Satellite Node */}
        <mesh ref={satelliteRef} position={[radius, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial
            color={satelliteColor || color}
            emissive={satelliteColor || color}
            emissiveIntensity={1.8}
            roughness={0.2}
            metalness={0.8}
          />
          {satelliteLabel && (
            <Html
              position={[0.15, 0.15, 0]}
              distanceFactor={8}
              center
              style={{
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              <div className="px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider text-cyan-glow bg-night-blue/80 border border-cyan-glow/40 shadow-cyan-glow whitespace-nowrap backdrop-blur-sm">
                {satelliteLabel}
              </div>
            </Html>
          )}
        </mesh>
      </group>
    </group>
  );
}

function CentralPolyhedron({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);

  // Smooth lerp targets
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Base rotation
    const baseSpeed = hovered ? 0.45 : 0.25;
    meshRef.current.rotation.y += delta * baseSpeed;
    meshRef.current.rotation.x += delta * (baseSpeed * 0.4);

    // Mouse influence with lerp
    targetRotation.current.x = mouse.current[1] * 0.5;
    targetRotation.current.y = mouse.current[0] * 0.6;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      meshRef.current.rotation.x + targetRotation.current.x * 0.05,
      0.08
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      -targetRotation.current.y * 0.1,
      0.08
    );

    // Inner core counter-rotation
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.5;
      coreRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.08 : 1}
    >
      {/* Outer crystalline icosahedron (translucent glassy face) */}
      <mesh>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial
          color="#10172A"
          roughness={0.15}
          metalness={0.8}
          transmission={0.65}
          thickness={0.8}
          transparent
          opacity={0.7}
          reflectivity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Wireframe lattice glow overlay */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.515, 0]} />
        <meshBasicMaterial
          color="#72E6FF"
          wireframe
          transparent
          opacity={hovered ? 0.85 : 0.55}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner Octahedron core (violet energy) */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshStandardMaterial
          color="#A78BFA"
          emissive="#72E6FF"
          emissiveIntensity={hovered ? 1.4 : 0.8}
          roughness={0.3}
          metalness={0.7}
          wireframe
        />
      </mesh>

      {/* Pulsing micro-core at center */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshBasicMaterial color="#72E6FF" />
      </mesh>
    </group>
  );
}

function SceneContent({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  return (
    <>
      {/* Lighting setup matching cosmic color tokens */}
      <ambientLight intensity={0.5} />
      
      {/* Cyan glow point light */}
      <pointLight
        position={[4, 3, 4]}
        intensity={2.8}
        color="#72E6FF"
        distance={20}
        decay={2}
      />
      
      {/* Violet back-light for depth */}
      <pointLight
        position={[-4, -3, -3]}
        intensity={2.5}
        color="#A78BFA"
        distance={20}
        decay={2}
      />

      {/* Subtle cold-white directional rim */}
      <directionalLight position={[0, 5, 2]} intensity={0.8} color="#F3F5FF" />

      {/* Gentle Floating Effect */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <CentralPolyhedron mouse={mouse} />

        {/* 3 Orbital Rings representing Full Stack, Data, and DevOps */}
        <OrbitalRing
          radius={2.3}
          rotation={[Math.PI / 4, Math.PI / 6, 0]}
          speed={0.35}
          color="#72E6FF"
          tubeRadius={0.012}
          satelliteLabel="Full Stack"
          satelliteColor="#72E6FF"
        />

        <OrbitalRing
          radius={2.85}
          rotation={[-Math.PI / 3, Math.PI / 4, Math.PI / 8]}
          speed={-0.28}
          color="#A78BFA"
          tubeRadius={0.012}
          satelliteLabel="Data Eng"
          satelliteColor="#A78BFA"
        />

        <OrbitalRing
          radius={3.4}
          rotation={[Math.PI / 8, -Math.PI / 3, Math.PI / 6]}
          speed={0.2}
          color="#38BDF8"
          tubeRadius={0.01}
          satelliteLabel="DevOps"
          satelliteColor="#38BDF8"
        />
      </Float>

      {/* Surrounding starry dust */}
      <ParticleField count={280} />
    </>
  );
}

export default function HeroScene() {
  const mouse = useRef<[number, number]>([0, 0]);
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Test WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current = [x, y];
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-cyan-glow/30 animate-pulse-slow flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-violet-glow/40 animate-spin-slow" />
        </div>
      </div>
    );
  }

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-64 h-64 rounded-full border border-cyan-glow/40 flex items-center justify-center animate-spin-slow">
          <div className="w-48 h-48 rounded-full border border-violet-glow/40 animate-pulse-slow flex items-center justify-center">
            <span className="text-cyan-glow font-mono text-sm tracking-wider">NAELLE // 3D</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[620px] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <SceneContent mouse={mouse} />
      </Canvas>
      <div className="absolute bottom-2 right-4 text-[10px] font-mono text-cold-dim/70 pointer-events-none select-none tracking-widest uppercase">
        Interactive 3D Universe · R3F
      </div>
    </div>
  );
}
