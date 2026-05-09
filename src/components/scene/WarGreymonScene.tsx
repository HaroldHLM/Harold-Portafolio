// function Model() {
//   const group = useRef<Group>(null);

//   const { scene, animations } = useGLTF("/models/wargreymon/scene.gltf");

//   const { actions } = useAnimations(animations, group);

//   useEffect(() => {
//     // reproduce la primera animación automáticamente
//     const firstAction = Object.values(actions || {})[0];

//     firstAction?.play();
//   }, [actions]);

//   return (
//     <primitive ref={group} object={scene} scale={1.5} position={[0, -2, 0]} />
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

import type { Group } from "three";

function Model() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF("/models/wargreymon/scene.gltf");

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions?.idle?.play();
  }, [actions]);

  const handleClick = () => {
    if (!actions) return;

    // detener idle
    actions.idle?.fadeOut(0.2);

    // reproducir ataque
    actions.attack01?.reset().fadeIn(0.2).play();

    // volver a idle
    setTimeout(() => {
      actions.attack01?.fadeOut(0.2);

      actions.idle?.reset().fadeIn(0.2).play();
    }, 1800);
  };

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.8}
      position={[0, -2, 0]}
      onClick={handleClick}
    />
  );
}

export default function WarGreymonScene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
        <ambientLight intensity={1.5} />

        <directionalLight position={[5, 5, 5]} intensity={3} />

        <Model />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0} />
      </Canvas>
    </div>
  );
}
