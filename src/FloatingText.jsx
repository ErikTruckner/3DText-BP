import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center, Text3D } from '@react-three/drei'

const FloatingText = () => {
  return (
    <>
      {/* ... */}
      <Center>
        <Text3D font='\fonts\Merriweather_Regular.json'>
          HELLO R3F
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  )
}

export default FloatingText
