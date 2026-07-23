"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

function FloatingSphere() {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />

        <meshStandardMaterial
          color="#2563eb"
          metalness={0.7}
          roughness={0.3}
        />

      </mesh>
    </Float>
  );
}


export default function Background() {
  return (
    <div
      className="
      fixed
      inset-0
      z-10
      pointer-events-none
      "
    >

      <Canvas
        camera={{
          position: [0, 0, 5],
        }}
      >

        <ambientLight intensity={0.8} />

        <pointLight
          position={[5, 5, 5]}
          intensity={1.5}
        />


        <Stars
          radius={80}
          depth={40}
          count={1500}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />


        <FloatingSphere />


      </Canvas>

    </div>
  );
}