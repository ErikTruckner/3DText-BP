import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center, Text3D } from '@react-three/drei'

const FloatingText = () => {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(t) * 0.2
    meshRef.current.position.x = Math.sin(t) * 0.5
    meshRef.current.position.z = Math.sin(t) * 0.5
  })

  return (
    <>
      {/* ... */}
      <Center>
        <Text3D ref={meshRef} font='\fonts\Merriweather_Regular.json'>
          HELLO R3F
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  )
}

export default FloatingText
