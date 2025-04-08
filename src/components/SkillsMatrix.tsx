"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Text, Stars, Html, Billboard } from "@react-three/drei"
import { Progress } from "@/components/ui/progress"
import { useIsMobile } from "@/hooks/use-mobile"
import * as THREE from "three" // Changed from 'import type' to a proper import

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
    color: "#6495ED", // Cornflower Blue - like Mercury
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
    color: "#FFA500", // Orange - like Venus
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
    color: "#0099CC", // Blue - like Earth
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
    color: "#FF6347", // Tomato - like Mars
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
    color: "#DAA520", // Goldenrod - like Jupiter
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
    color: "#F4A460", // Sandy Brown - like Saturn
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
    color: "#00CED1", // Dark Turquoise - like Uranus
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
    color: "#1E90FF", // Dodger Blue - like Neptune
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
    color: "#800080", // Purple - like Pluto
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
    color: "#8B4513", // Saddle Brown - like an exoplanet
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
    color: "#556B2F", // Dark Olive Green - like an exoplanet
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
    color: "#4682B4", // Steel Blue - like an exoplanet
  },
]

const OrbitPath = ({ radius }: { radius: number }) => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius, radius + 0.05, 128]} />
      <meshBasicMaterial attach="material" color="#C19A6B" opacity={0.4} transparent side={THREE.DoubleSide} />
    </mesh>
  )
}

const PlanetLabel = ({ position, name }: { position: [number, number, number]; name: string }) => {
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
        font={undefined}// Use default font
        fontWeight="thin" // Add font weight
        letterSpacing={-0.05} // Add letter spacing
        textAlign="center" // Center text
        lineHeight={1} // Set line height
        material-toneMapped={false} // Better text rendering
      >
        {name}
      </Text>
    </Billboard>
  )
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
      }
    } else {
      return {
        roughness: 0.4,
        metalness: 0.6,
        color: skill.color,
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
        <meshStandardMaterial attach="material" {...textureProps} />

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
            <div className="font-extrabold mb-1">{skill.name}</div>
            <Progress value={Number.parseInt(skill.description)} className="w-full h-2" />
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
      <meshStandardMaterial attach="material" color="#FDB813" emissive="#FDB813" emissiveIntensity={1} />
      <pointLight color="#FDB813" intensity={1} distance={50} />
      <Billboard position={[0, 2, 0]} follow={true}>
        <Text
          fontSize={0.5}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
          font={undefined} // Use default font
          fontWeight="bold" // Add font weight
          letterSpacing={-0.02} // Add letter spacing
          textAlign="center" // Center text
          lineHeight={1} // Set line height
          material-toneMapped={false} // Better text rendering
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
        height: "100vh",
      }}
    >
      {/* Optional header that overlays the canvas */}
      <div className="absolute top-0 left-0 z-10 w-full pt-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-wider text-white/70 mb-2">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white mb-4">Skills</h2>
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
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, #000000, #111111)",
        }}
      >
        <Scene />
      </Canvas>
    </section>
  )
}

export default SkillsMatrix
