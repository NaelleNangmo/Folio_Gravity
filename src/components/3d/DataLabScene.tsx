"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export interface DataLabStage {
  id: string;
  name: string;
  tag: string;
  desc: string;
  position: [number, number, number];
  color: string;
}

const STAGES: DataLabStage[] = [
  {
    id: "collect",
    name: "1. Collecte",
    tag: "Sources & APIs",
    desc: "Ingestion de flux REST, logs et données brutes",
    position: [-4.2, 0.4, 0],
    color: "#72E6FF",
  },
  {
    id: "transform",
    name: "2. Transformation",
    tag: "ETL / ELT",
    desc: "Validation, nettoyage, normalisation (Python & SQL)",
    position: [-2.1, -0.6, 0.6],
    color: "#38BDF8",
  },
  {
    id: "storage",
    name: "3. Stockage Hybride",
    tag: "SQL & NoSQL",
    desc: "Persistance relationnelle (MySQL/PostgreSQL) & MongoDB",
    position: [0, 0.8, -0.4],
    color: "#A78BFA",
  },
  {
    id: "analysis",
    name: "4. Analyse",
    tag: "Agrégations & KPI",
    desc: "Calculs analytiques, métriques et modélisation de données",
    position: [2.1, -0.5, 0.5],
    color: "#C084FC",
  },
  {
    id: "visualize",
    name: "5. Visualisation",
    tag: "Power BI & Dashboards",
    desc: "Tableaux de bord interactifs et restitution applicative",
    position: [4.2, 0.5, 0],
    color: "#F472B6",
  },
];

function ConnectionPipeline({
  start,
  end,
  active,
}: {
  start: [number, number, number];
  end: [number, number, number];
  active: boolean;
}) {
  const curve = useMemo(() => {
    const vStart = new THREE.Vector3(...start);
    const vEnd = new THREE.Vector3(...end);
    const mid = new THREE.Vector3().addVectors(vStart, vEnd).multiplyScalar(0.5);
    mid.y += 0.35; // gentle upward arc
    return new THREE.QuadraticBezierCurve3(vStart, mid, vEnd);
  }, [start, end]);

  const tubeGeometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 32, 0.022, 8, false);
  }, [curve]);

  // Pulsing energy particle traveling along curve
  const pulseRef = useRef<THREE.Mesh>(null);
  const progressRef = useRef(Math.random());

  useFrame((_, delta) => {
    if (pulseRef.current) {
      progressRef.current = (progressRef.current + delta * 0.45) % 1;
      const point = curve.getPoint(progressRef.current);
      pulseRef.current.position.copy(point);
    }
  });

  return (
    <group>
      {/* Pipe conduit */}
      <mesh geometry={tubeGeometry}>
        <meshBasicMaterial
          color={active ? "#72E6FF" : "#1E293B"}
          transparent
          opacity={active ? 0.75 : 0.35}
          wireframe
        />
      </mesh>

      {/* Pulsing energy sphere traveling through pipe */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.075, 12, 12]} />
        <meshBasicMaterial
          color="#72E6FF"
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function PipelineNode({
  stage,
  isSelected,
  onSelect,
}: {
  stage: DataLabStage;
  isSelected: boolean;
  onSelect: (stage: DataLabStage) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (hovered || isSelected ? 0.9 : 0.3);
      groupRef.current.rotation.x += delta * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.6;
    }
  });

  return (
    <group position={stage.position}>
      <group
        ref={groupRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(stage);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        scale={isSelected ? 1.25 : hovered ? 1.15 : 1}
      >
        {/* Outer Wireframe Cage */}
        <mesh>
          <octahedronGeometry args={[0.42, 0]} />
          <meshBasicMaterial
            color={stage.color}
            wireframe
            transparent
            opacity={isSelected || hovered ? 0.9 : 0.45}
          />
        </mesh>

        {/* Solid Inner Glow Sphere */}
        <mesh ref={innerRef}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color={stage.color}
            emissive={stage.color}
            emissiveIntensity={isSelected || hovered ? 2.2 : 0.9}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Halo Glow */}
        {(isSelected || hovered) && (
          <mesh>
            <sphereGeometry args={[0.55, 16, 16]} />
            <meshBasicMaterial
              color={stage.color}
              transparent
              opacity={0.15}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        )}
      </group>

      {/* 2D HTML Label Attached to Node */}
      <Html
        position={[0, -0.65, 0]}
        center
        distanceFactor={9}
        style={{ pointerEvents: "none", userSelect: "none" }}
      >
        <div
          className={`flex flex-col items-center transition-all duration-300 ${
            isSelected || hovered ? "scale-105 opacity-100" : "opacity-80"
          }`}
        >
          <span
            className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-wide border whitespace-nowrap backdrop-blur-md"
            style={{
              backgroundColor: isSelected ? "rgba(16, 23, 42, 0.9)" : "rgba(11, 14, 30, 0.75)",
              color: stage.color,
              borderColor: isSelected ? stage.color : "rgba(114, 230, 255, 0.25)",
              boxShadow: isSelected ? `0 0 15px ${stage.color}44` : "none",
            }}
          >
            {stage.name}
          </span>
          <span className="text-[9px] text-cold-dim mt-0.5 tracking-wider uppercase font-mono">
            {stage.tag}
          </span>
        </div>
      </Html>
    </group>
  );
}

interface DataLabSceneProps {
  onSelectStage?: (stageId: string) => void;
  activeStageId?: string;
}

export default function DataLabScene({ onSelectStage, activeStageId = "collect" }: DataLabSceneProps) {
  const [selectedId, setSelectedId] = useState(activeStageId);

  const handleSelect = (stage: DataLabStage) => {
    setSelectedId(stage.id);
    if (onSelectStage) {
      onSelectStage(stage.id);
    }
  };

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-space-border bg-night-deep/50 backdrop-blur-md">
      <div className="absolute top-3 left-4 z-10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
        <span className="text-[11px] font-mono text-cyan-glow uppercase tracking-wider">
          3D Flow Simulator · ETL Pipeline
        </span>
      </div>

      <Canvas
        camera={{ position: [0, 0.2, 7.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[0, 4, 3]} intensity={1.8} color="#72E6FF" />
        <pointLight position={[0, -4, -2]} intensity={1.4} color="#A78BFA" />

        {/* Render animated pipelines between nodes */}
        {STAGES.slice(0, -1).map((stage, idx) => (
          <ConnectionPipeline
            key={`pipe-${idx}`}
            start={stage.position}
            end={STAGES[idx + 1].position}
            active={stage.id === selectedId || STAGES[idx + 1].id === selectedId}
          />
        ))}

        {/* Render 5 pipeline nodes */}
        {STAGES.map((stage) => (
          <PipelineNode
            key={stage.id}
            stage={stage}
            isSelected={stage.id === selectedId}
            onSelect={handleSelect}
          />
        ))}
      </Canvas>

      <div className="absolute bottom-2.5 inset-x-0 text-center text-[10px] font-mono text-cold-dim/75 pointer-events-none">
        Cliquez ou survolez un nœud pour observer les couches d&apos;ingestion et de transformation
      </div>
    </div>
  );
}
