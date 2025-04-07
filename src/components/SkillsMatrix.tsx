
"use client"

import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Text, Stars, Html } from "@react-three/drei" // Ensure this import is correct
import { Progress } from "@/components/ui/progress"
import { useIsMobile } from "@/hooks/use-mobile"
import type * as THREE from "three"

interface Skill {
  id: string
  name: string
  type: "technical" | "conceptual"
  description: string
  level: number // 1-5
  orbitRadius: number // Radius of orbit path
  orbitSpeed: number // Speed of rotation
  size: number // Size of the planet
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
  },
]

// Orbit path component
const OrbitPath = ({ radius }: { radius: number }) => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius, radius + 0.05, 64]} />
      <meshBasicMaterial 
        attach="material" 
        color="#C19A6B" 
        opacity={0.2} 
        transparent 
      />
    </mesh>
  )
}

// Skill planet component
const SkillPlanet = ({
  skill,
  setActiveSkill,
}: {
  skill: Skill
  setActiveSkill: (skill: Skill | null) => void
}) => {
  const ref = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [position, setPosition] = useState([0, 0, 0])
  const { size } = useThree()
  const isMobile = useIsMobile()

  // Rotate around the center
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

  const color = skill.type === "technical" ? "#333333" : "#C19A6B"
  const textColor = skill.type === "technical" ? "#FFFFFF" : "#000000"

  return (
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
      <meshStandardMaterial attach="material" color={color} />

      {/* Skill name label */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.5}
        color={textColor}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor={skill.type === "technical" ? "#333333" : "#C19A6B"}
      >
        {skill.name}
      </Text>

      {/* Skill details on hover */}
      {hovered && (
        <Html
          position={[0, -1.5, 0]}
          center
          distanceFactor={15}
          style={{
            width: isMobile ? "80px" : "120px",
            backgroundColor: "#000",
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
  )
}

// Sun component
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
        color="#C19A6B" 
        emissive="#C19A6B" 
        emissiveIntensity={1} 
      />
      <pointLight color="#C19A6B" intensity={1} distance={50} />
      <Text
        position={[0, 2, 0]}
        fontSize={0.5}
        color="#000"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#C19A6B"
      >
        Skills
      </Text>
    </mesh>
  )
}

// Main scene component
const Scene = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)
  const controlsRef = useRef<any>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (controlsRef.current) {
      // Set initial camera position
      controlsRef.current.target.set(0, 0, 0)
    }
  }, [])

  return (
    <>
      {/* Ambient light for overall scene illumination */}
      <ambientLight intensity={0.3} />

      {/* Directional light to create shadows */}
      <directionalLight position={[10, 10, 5]} intensity={0.5} />

      {/* Background stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Sun at the center */}
      <Sun />

      {/* Orbit paths */}
      {skills.map((skill) => (
        <OrbitPath key={`orbit-${skill.id}`} radius={skill.orbitRadius} />
      ))}

      {/* Skill planets */}
      {skills.map((skill) => (
        <SkillPlanet key={skill.id} skill={skill} setActiveSkill={setActiveSkill} />
      ))}

      {/* Camera controls */}
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
    <section id="skills" className="section py-12 md:py-24 bg-void-black dark:bg-static-white relative">
      <div className="container relative z-10">
        <div className="mb-8 md:mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-static-white/70 dark:text-quantum-gray mb-2">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-static-white dark:text-void-black mb-6">Skills</h2>
          <p className="text-lg text-static-white/80 dark:text-void-black/80 max-w-2xl">
            I have been learning programming since 2022. The main area of my expertise is Multi-Platform Development.
            <br />
            Here are the technologies I have learned.
          </p>
        </div>

        {/* 3D Solar System Container */}
        <div className="w-full h-[500px] md:h-[600px] mx-auto mb-12 overflow-hidden rounded-lg">
          <Canvas
            camera={{ position: isMobile ? [0, 15, 25] : [0, 10, 30], fov: 60 }}
            dpr={[1, 2]} // Optimize for mobile
            style={{
              background: "linear-gradient(to bottom, #000000, #111111)",
            }}
          >
            <Scene />
          </Canvas>
        </div>
      </div>

      {/* Spacer to prevent overlap with footer */}
      <div className="h-20"></div>
    </section>
  )
}

export default SkillsMatrix;
