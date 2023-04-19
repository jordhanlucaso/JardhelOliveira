import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Dragon = ({ isMobile }) => {
  const dragon = useGLTF('./dragon/dragon.gltf')

  return (
    <mesh>
      <directionalLight />
      <spotLight
        position={[60, -10, -10]}
        angle={140}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={dragon.scene}
        scale={isMobile ? 0.8 : 1}
        rotation={[0, 1.5, 0.1]}
        position={[0, -25, 0]}
      />
    </mesh>
  )
}

const DragonCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [100, 0, 0], fov: 90}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate={true} />
        <Dragon isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default DragonCanvas