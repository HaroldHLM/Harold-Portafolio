"use client";

import { Canvas } from "@react-three/fiber";

import ShaderPlane from "./Background";

export default function SceneCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <ShaderPlane />
    </Canvas>
  );
}
