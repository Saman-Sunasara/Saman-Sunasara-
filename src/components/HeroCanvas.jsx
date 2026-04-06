import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function Orb() {
  const groupRef = useRef(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.25
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2
  })

  return (
    <group ref={groupRef}>
      <Float speed={2.4} rotationIntensity={1.4} floatIntensity={2.2}>
        <Sphere args={[1.2, 128, 128]} scale={1.8}>
          <MeshDistortMaterial
            color="#7c5cff"
            emissive={new THREE.Color('#69f0ff')}
            emissiveIntensity={1.2}
            distort={0.4}
            speed={1.8}
            roughness={0.05}
            metalness={0.65}
          />
        </Sphere>
      </Float>
    </group>
  )
}

export function HeroCanvas() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-neon backdrop-blur-2xl sm:h-[480px]">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[3, 3, 4]} intensity={1.8} />
        <pointLight position={[-3, -2, 2]} intensity={2.5} color="#ff5cb8" />
        <Stars radius={70} depth={20} count={3000} factor={4} saturation={0} fade speed={0.8} />
        <Orb />
      </Canvas>
    </div>
  )
}
