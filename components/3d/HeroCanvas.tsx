'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

interface NodeData {
  pos: [number, number, number];
  label: string;
  subtext: string;
  color: string;
}

const DEFAULT_NODES: NodeData[] = [
  { pos: [-3.2, 0.8, 0], label: 'CRM / Trigger', subtext: 'Webhook Ingest', color: '#64748B' },
  { pos: [-1.2, -0.6, 0.8], label: 'AI Agent', subtext: 'LangGraph Reasoning', color: '#F05323' },
  { pos: [0.8, 1.2, -0.4], label: 'Automation', subtext: 'n8n Orchestrator', color: '#38BDF8' },
  { pos: [2.8, -0.6, 0.4], label: 'Vector Store', subtext: 'State Persistence', color: '#8B5CF6' },
  { pos: [4.4, 0.6, -0.8], label: 'Output', subtext: 'Client Telemetry', color: '#10B981' },
];

function ConnectedLines({ nodeRefs }: { nodeRefs: React.RefObject<(THREE.Group | null)[]> }) {
  const lineGeometryRef = useRef<THREE.BufferGeometry>(null);

  useFrame(() => {
    if (!nodeRefs.current || !lineGeometryRef.current) return;

    const positions: number[] = [];
    nodeRefs.current.forEach((ref) => {
      if (ref) {
        const worldPos = new THREE.Vector3();
        ref.getWorldPosition(worldPos);
        positions.push(worldPos.x, worldPos.y, worldPos.z);
      }
    });

    lineGeometryRef.current.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );
    lineGeometryRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <line>
      <bufferGeometry ref={lineGeometryRef} />
      <lineBasicMaterial color="#F05323" transparent opacity={0.4} linewidth={1.5} />
    </line>
  );
}

function NeuralNodes({ nodes = DEFAULT_NODES }: { nodes?: NodeData[] }) {
  const groupRef = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Group | null)[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.1;
      groupRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <ConnectedLines nodeRefs={nodeRefs} />

      {nodes.map((node, idx) => (
        <Float key={idx} speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <group
            position={node.pos}
            ref={(el) => {
              nodeRefs.current[idx] = el;
            }}
          >
            {/* Core Mesh Node */}
            <Sphere args={[0.22, 32, 32]}>
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={0.8}
                roughness={0.1}
              />
            </Sphere>

            {/* Wireframe Outer Halo */}
            <Sphere args={[0.34, 12, 12]}>
              <meshBasicMaterial color={node.color} wireframe transparent opacity={0.18} />
            </Sphere>

            {/* Always-On-Top HTML Dialog Badge */}
            <Html
              position={[0, 0.48, 0]}
              center
              distanceFactor={8}
              occlude={false}
              style={{ pointerEvents: 'none' }}
              className="z-50 select-none"
            >
              <div className="flex flex-col items-center bg-slate-900/95 border border-slate-700/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-2xl text-center min-w-[110px] transform -translate-y-2">
                <span className="text-[11px] font-bold tracking-wide text-slate-100 whitespace-nowrap">
                  {node.label}
                </span>
                <span className="text-[9px] font-mono text-slate-400 whitespace-nowrap">
                  {node.subtext}
                </span>
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </group>
  );
}

export default function HeroCanvas({ pipelineNodes }: { pipelineNodes?: NodeData[] }) {
  return (
    <div className="w-full min-h-[420px] h-[50vh] max-h-[600px] relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/80 backdrop-blur-sm shadow-2xl">
      {/* Top Left Status Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-slate-900/90 rounded-full border border-slate-700/60 text-[11px] font-mono text-slate-300 pointer-events-none shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        SYSTEM TELEMETRY: ACTIVE PIPELINE OVERVIEW
      </div>

      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} color="#F05323" intensity={2} />
        <Suspense fallback={null}>
          <NeuralNodes nodes={pipelineNodes} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* Bottom Right Control Hint */}
      <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono text-slate-500 bg-slate-900/90 px-3 py-1 rounded border border-slate-800 pointer-events-none">
        DRAG TO ROTATE 3D ARCHITECTURE
      </div>
    </div>
  );
}