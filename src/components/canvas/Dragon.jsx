import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Dragon = () => {
  const dragon = useGLTF("dragon/FinalDragon.gltf");
  return (
    <mesh>
      <hemisphereLight intesity={0.15} groundColor="black" />
      <pointLight intesity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={dragon.scene} />
    </mesh>
  );
};

const DragonCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camara={{ position: [20, 5, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Dragon />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DragonCanvas;
