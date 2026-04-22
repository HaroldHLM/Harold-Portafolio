"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function ShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

    materialRef.current.uniforms.uMouse.value = [
      (mouse.x + 1) / 2,
      (mouse.y + 1) / 2,
    ];
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height, 30, 30]} />

      <shaderMaterial
        ref={materialRef}
        wireframe
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: [0.5, 0.5] },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

const vertexShader = `
uniform float uTime;
uniform vec2 uMouse;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec3 pos = position;

  // 🔥 distancia al mouse
  float dist = distance(uv, uMouse);

  // 🔥 onda tipo ripple
  float wave = sin(dist * 20.0 - uTime * 3.0);

  // 🔥 caída de intensidad
  float strength = exp(-dist * 10.0);

  // 🔥 elevación en Z
  pos.z += wave * strength * 0.5;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;

void main() {
  // fondo blanco
  vec3 color = vec3(1.0);

  gl_FragColor = vec4(color, 1.0);
}
`;
