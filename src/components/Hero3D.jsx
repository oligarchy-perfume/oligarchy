// src/components/Hero3D.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

function PerfumeBottle(props) {
  const mesh = useRef();
  // Şişenin kendi etrafında yavaşça dönmesi
  useFrame((state) => (mesh.current.rotation.y += 0.005));

  return (
    <mesh {...props} ref={mesh}>
      {/* Bu silindir bir parfüm şişesini temsil eder */}
      <cylinderGeometry args={[1, 1, 3, 32]} />
      <meshPhysicalMaterial 
        color="#D4AF37" 
        metalness={0.8} 
        roughness={0.2} 
        clearcoat={1} 
        transparent 
        opacity={0.9} 
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Stage environment="city" intensity={0.6}>
        <PerfumeBottle />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  );
}