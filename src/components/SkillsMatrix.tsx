
"use client"

import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Text, Stars, Html, Billboard, useTexture } from "@react-three/drei"
import { Progress } from "@/components/ui/progress"
import { useIsMobile } from "@/hooks/use-mobile"
import * as THREE from "three"

interface Skill {
  id: string
  name: string
  type: "technical" | "conceptual"
  description: string
  level: number
  orbitRadius: number
  orbitSpeed: number
  size: number
  color: string
}

const skills: Skill[] = [
  // Technical skills
  {
    id: "flutter",
    name: "Flutter",
    type: "technical",
    description: "80%",
    level: 4,
    orbitRadius: 4,
    orbitSpeed: 0.15,
    size: 0.6,
    color: "#3B82F6", // Bright Blue
  },
  {
    id: "dart",
    name: "Dart",
    type: "technical",
    description: "75%",
    level: 4,
    orbitRadius: 5.5,
    orbitSpeed: 0.2,
    size: 0.6,
    color: "#F97316", // Bright Orange
  },
  {
    id: "mongodb",
    name: "MongoDB",
    type: "technical",
    description: "70%",
    level: 3,
    orbitRadius: 7,
    orbitSpeed: 0.18,
    size: 0.6,
    color: "#16A34A", // Green
  },
  {
    id: "mysql",
    name: "MySQL",
    type: "technical",
    description: "75%",
    level: 4,
    orbitRadius: 8.5,
    orbitSpeed: 0.16,
    size: 0.7,
    color: "#DC2626", // Red
  },
  {
    id: "expressjs",
    name: "ExpressJS",
    type: "technical",
    description: "80%",
    level: 4,
    orbitRadius: 10,
    orbitSpeed: 0.14,
    size: 0.7,
    color: "#FCD34D", // Gold/Yellow
  },
  {
    id: "html",
    name: "HTML",
    type: "technical",
    description: "75%",
    level: 4,
    orbitRadius: 11.5,
    orbitSpeed: 0.12,
    size: 0.8,
    color: "#EC4899", // Pink
  },
  {
    id: "css",
    name: "CSS",
    type: "technical",
    description: "65%",
    level: 3,
    orbitRadius: 13,
    orbitSpeed: 0.1,
    size: 0.8,
    color: "#0EA5E9", // Sky Blue
  },
  {
    id: "javascript",
    name: "JavaScript",
    type: "conceptual",
    description: "70%",
    level: 3,
    orbitRadius: 14.5,
    orbitSpeed: 0.08,
    size: 0.8,
    color: "#8B5CF6", // Purple
  },
  {
    id: "laravel",
    name: "Laravel",
    type: "conceptual",
    description: "70%",
    level: 3,
    orbitRadius: 16,
    orbitSpeed: 0.06,
    size: 0.75,
    color: "#D946EF", // Fuchsia
  },
  {
    id: "nodejs",
    name: "NodeJS",
    type: "conceptual",
    description: "55%",
    level: 3,
    orbitRadius: 17.5,
    orbitSpeed: 0.04,
    size: 0.75,
    color: "#78716C", // Stone Gray
  },
  {
    id: "php",
    name: "PHP",
    type: "conceptual",
    description: "60%",
    level: 3,
    orbitRadius: 19,
    orbitSpeed: 0.02,
    size: 0.75,
    color: "#10B981", // Emerald
  },
  {
    id: "python",
    name: "Python",
    type: "conceptual",
    description: "70%",
    level: 3,
    orbitRadius: 20.5,
    orbitSpeed: 0.018,
    size: 0.6,
    color: "#3B82F6", // Blue
  },
]

// Create a galaxy effect in the corner
const Galaxy = () => {
  const points = useRef<THREE.Points>(null)
  const particlesCount = 5000
  const positions = new Float32Array(particlesCount * 3)
  const colors = new Float32Array(particlesCount * 3)
  
  // Create galaxy positions and colors
  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3
    const radius = Math.random() * 10
    const spinAngle = radius * 5
    const branchAngle = (i % 3) * Math.PI * 2 / 3
    
    const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8
    const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8
    const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8
    
    positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX
    positions[i3 + 1] = randomY + (Math.random() - 0.5) * 0.5
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ
    
    // Colors - create gold/blue/purple galaxy
    const mixedColor = i % 3 === 0 
      ? new THREE.Color('#FCD34D') // Gold
      : i % 3 === 1 
        ? new THREE.Color('#A78BFA') // Purple
        : new THREE.Color('#3B82F6') // Blue
    
    colors[i3] = mixedColor.r
    colors[i3 + 1] = mixedColor.g
    colors[i3 + 2] = mixedColor.b
  }
  
  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })
  
  return (
    <points ref={points} position={[30, 15, -20]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          itemSize={3}
          array={positions}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          itemSize={3}
          array={colors}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        vertexColors
        transparent
        alphaMap={useTexture("/placeholder.svg")}
        alphaTest={0.001}
      />
    </points>
  )
}

const OrbitPath = ({ radius }: { radius: number }) => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius, radius + 0.05, 128]} />
      <meshBasicMaterial 
        attach="material" 
        color="#C19A6B" 
        opacity={0.4} 
        transparent 
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

const PlanetLabel = ({ position, name }: { position: [number, number, number], name: string }) => {
  return (
    <Billboard
      position={[position[0], position[1] + 1.2, position[2]]}
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false}
    >
      <Text
        fontSize={0.4}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#000000"
        fillOpacity={1}
      >
        {name}
      </Text>
    </Billboard>
  )
}

// Texture for planets to create porous surface effect
const PlanetTexture = ({ skill }: { skill: Skill }) => {
  const normalTexture = useRef<THREE.DataTexture>()
  
  useEffect(() => {
    // Create a procedural normal map for planet surface
    const size = 512
    const data = new Uint8Array(size * size * 4)
    
    for (let i = 0; i < size * size * 4; i += 4) {
      // Create noise for bumpy surface
      const noise = Math.random() * 0.5 + 0.25
      
      // Normal map RGB values - midpoint is 127,127,255
      data[i] = 127 + (Math.random() - 0.5) * 127 * noise
      data[i + 1] = 127 + (Math.random() - 0.5) * 127 * noise
      data[i + 2] = 255 * noise
      data[i + 3] = 255 // Alpha
    }
    
    const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat)
    texture.needsUpdate = true
    normalTexture.current = texture
  }, [])
  
  return normalTexture.current
}

const SkillPlanet = ({
  skill,
  setActiveSkill,
}: {
  skill: Skill
  setActiveSkill: (skill: Skill | null) => void
}) => {
  const ref = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0])
  const { size } = useThree()
  const isMobile = useIsMobile()
  const normalMap = PlanetTexture({ skill })

  useFrame(({ clock }) => {
    if (ref.current) {
      const angle = clock.getElapsedTime() * skill.orbitSpeed
      const x = Math.cos(angle) * skill.orbitRadius
      const z = Math.sin(angle) * skill.orbitRadius
      ref.current.position.x = x
      ref.current.position.z = z
      setPosition([x, 0, z])
    }
  })

  // Create texture for the planet surface
  const getTextureProps = () => {
    // Different materials based on planet type
    if (skill.type === "technical") {
      return {
        roughness: 0.7,
        metalness: 0.3,
        color: skill.color,
        normalMap: normalMap,
        normalScale: new THREE.Vector2(0.15, 0.15),
        emissive: skill.color,
        emissiveIntensity: 0.1,
      }
    } else {
      return {
        roughness: 0.4,
        metalness: 0.6,
        color: skill.color,
        normalMap: normalMap,
        normalScale: new THREE.Vector2(0.2, 0.2),
        emissive: skill.color,
        emissiveIntensity: 0.15,
      }
    }
  }

  const textureProps = getTextureProps()

  return (
    <group>
      <mesh
        ref={ref}
        onPointerOver={() => {
          setHovered(true)
          setActiveSkill(skill)
        }}
        onPointerOut={() => {
          setHovered(false)
          setActiveSkill(null)
        }}
        scale={hovered ? skill.size * 1.2 : skill.size}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          attach="material"
          {...textureProps}
        />
        
        {hovered && (
          <Html
            position={[0, -1.5, 0]}
            center
            distanceFactor={15}
            style={{
              width: isMobile ? "80px" : "120px",
              backgroundColor: "rgba(0,0,0,0.8)",
              color: "#fff",
              padding: "8px",
              borderRadius: "4px",
              textAlign: "center",
              fontSize: isMobile ? "10px" : "12px",
              pointerEvents: "none",
            }}
          >
            <div className="font-bold mb-1">{skill.name}</div>
            <Progress value={parseInt(skill.description)} className="w-full h-2" />
            <div className="mt-1">{skill.description}</div>
          </Html>
        )}
      </mesh>
      
      {/* Add a permanent label that follows the planet */}
      <PlanetLabel position={position} name={skill.name} />
    </group>
  )
}

const Sun = () => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial 
        attach="material"
        color="#FDB813" 
        emissive="#FDB813" 
        emissiveIntensity={1} 
      />
      <pointLight color="#FDB813" intensity={1} distance={50} />
      <Billboard
        position={[0, 2, 0]}
        follow={true}
      >
        <Text
          fontSize={0.5}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
        >
          Skills
        </Text>
      </Billboard>
    </mesh>
  )
}

const Scene = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)
  const controlsRef = useRef<any>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0)
    }
  }, [])

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sun />
      {skills.map((skill) => (
        <OrbitPath key={`orbit-${skill.id}`} radius={skill.orbitRadius} />
      ))}
      {skills.map((skill) => (
        <SkillPlanet key={skill.id} skill={skill} setActiveSkill={setActiveSkill} />
      ))}
      <Galaxy />
      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={40}
        autoRotate={!activeSkill}
        autoRotateSpeed={0.5}
        target={[0, 0, 0]}
      />
    </>
  )
}

const SkillsMatrix: React.FC = () => {
  const isMobile = useIsMobile()

  return (
    <section 
      id="skills" 
      className="relative w-full"
      style={{
        margin: 0,
        padding: 0,
        height: '100vh'
      }}
    >
      {/* Optional header that overlays the canvas */}
      <div className="absolute top-0 left-0 z-10 w-full pt-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-wider text-white/70 mb-2">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
          <p className="text-lg text-white/80 max-w-2xl">
            I have been learning programming since 2022. The main area of my expertise is Multi-Platform Development.
          </p>
        </div>
      </div>

      {/* Full-screen Canvas */}
      <Canvas
        camera={{ position: isMobile ? [0, 15, 25] : [0, 10, 30], fov: 60 }}
        dpr={[1, 2]}
        style={{
          width: '100%',
          height: '100%',
          background: "linear-gradient(to bottom, #000000, #111111)",
        }}
      >
        <Scene />
      </Canvas>
    </section>
  )
}

export default SkillsMatrix
