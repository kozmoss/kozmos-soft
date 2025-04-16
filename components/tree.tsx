// components/DashboardCosmos.jsx
'use client'

import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

// Güneş componenti
function Sun() {
  const sunRef = useRef()
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.5
    sunRef.current.scale.set(
      1 + Math.sin(t) * 0.02,
      1 + Math.sin(t) * 0.02, 
      1 + Math.sin(t) * 0.02
    )
  })
  
  return (
    <group>
      {/* Ana güneş */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial color="#ffdd66" />
      </mesh>
      
      {/* Güneş parıltısı */}
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial 
          color="#ffdd66" 
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Güneş ışığı */}
      <pointLight 
        color="#ffffff" 
        intensity={1.5} 
        distance={100} 
        castShadow
      />
      <ambientLight intensity={0.2} />
    </group>
  )
}

// Gezegen componenti
function Planet({ radius, distance, speed, color, rotationSpeed = 0.01, hasRings = false }) {
  const planetRef = useRef()
  const orbitRef = useRef()
  
  // Başlangıç açısı
  const initialAngle = Math.random() * Math.PI * 2
  
  useFrame(({ clock }) => {
    // Gezegen kendi ekseni etrafında dönüyor
    planetRef.current.rotation.y += rotationSpeed
    
    // Güneş etrafında dönüş
    const t = clock.getElapsedTime() * speed + initialAngle
    planetRef.current.position.x = Math.cos(t) * distance
    planetRef.current.position.z = Math.sin(t) * distance
  })
  
  return (
    <group ref={orbitRef}>
      <mesh ref={planetRef} position={[distance, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.7} 
          metalness={0.3} 
        />
        
        {/* Gezegen halkası */}
        {hasRings && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius * 1.5, radius * 2.2, 32]} />
            <meshBasicMaterial 
              color="#f5deb3" 
              side={THREE.DoubleSide} 
              transparent 
              opacity={0.6} 
            />
          </mesh>
        )}
      </mesh>
    </group>
  )
}

// Nebula (Bulutsu) componenti
function Nebula({ position, color, size }) {
  const nebRef = useRef()
  
  useFrame(({ clock }) => {
    // Yavaş dönüş animasyonu
    nebRef.current.rotation.y += 0.0001
    nebRef.current.rotation.x += 0.00005
  })
  
  const particles = []
  const particleCount = 200
  
  // Bulutsu parçacıkları oluştur
  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * size
    const y = (Math.random() - 0.5) * size
    const z = (Math.random() - 0.5) * size
    
    particles.push(
      <point key={i} position={[x, y, z]}>
        <pointsMaterial 
          color={color} 
          size={0.5} 
          transparent 
          opacity={0.3} 
          blending={THREE.AdditiveBlending} 
          depthWrite={false} 
        />
      </point>
    )
  }
  
  return (
    <group ref={nebRef} position={position}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={new Float32Array(particleCount * 3)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color={color}
          size={0.5}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

// Kamera kontrol componenti
function CameraController({ domEl }) {
  const { camera } = useThree()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    // Mouse events 
    const handleMouseMove = (e) => {
      if (!domEl.current) return
      
      const rect = domEl.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      
      setMousePos({ x, y })
    }
    
    const element = domEl.current
    element?.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      element?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [domEl])
  
  useFrame(() => {
    // Kamera yavaşça mouse'un konumuna doğru hareket eder
    camera.position.x += (mousePos.x * 3 - camera.position.x) * 0.03
    camera.position.y += (mousePos.y * 3 - camera.position.y) * 0.03
    camera.lookAt(0, 0, 0)
  })
  
  return null
}

// Ana scene componenti
function KozmosScene() {
  return (
    <>
      {/* Işıklar */}
      <ambientLight intensity={0.2} />
      
      {/* Güneş */}
      <Sun />
      
      {/* Gezegeler */}
      <Planet radius={0.8} distance={7} speed={0.1} color="#3498db" rotationSpeed={0.01} />
      <Planet radius={1.2} distance={12} speed={0.07} color="#16a085" rotationSpeed={0.008} />
      <Planet radius={1.0} distance={17} speed={0.05} color="#e74c3c" rotationSpeed={0.012} />
      <Planet radius={2.0} distance={24} speed={0.03} color="#f39c12" rotationSpeed={0.005} hasRings={true} />
      
      {/* Bulutsu */}
      <Nebula position={[15, 5, -10]} color="#8e44ad" size={8} />
      <Nebula position={[-18, -7, 5]} color="#2ecc71" size={10} />
      <Nebula position={[5, -15, -12]} color="#3498db" size={6} />
      
      {/* Yıldızlar (drei'den) */}
      <Stars radius={50} depth={50} count={5000} factor={4} saturation={0.5} fade speed={1} />
    </>
  )
}

export default function DashboardCosmos({ width = '100%', height = '400px' }) {
  const containerRef = useRef(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Component mount olduktan sonra yükleniyor durumunu kaldır
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div 
      ref={containerRef}
      style={{ 
        width: width, 
        height: height, 
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#050816',
          color: '#ffffff',
          zIndex: 10
        }}>
          Kozmos yükleniyor...
        </div>
      )}
      
      <Canvas
        shadows
        camera={{ position: [0, 0, 30], fov: 60 }}
        style={{ background: '#050816' }}
      >
        <Suspense fallback={null}>
          <CameraController domEl={containerRef} />
          <KozmosScene />
        </Suspense>
      </Canvas>
    </div>
  )
}