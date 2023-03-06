import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import Box from './Box'
// import Castle from './Castle'
// import SimpleSolarSystem from './SimpleSolarSystem'
// import ComplexSolarSystem from './ComplexSolarSystem'
// import { Stars } from '@react-three/drei'
import FloatingText from './FloatingText'
import Cube from './Cube'

export default function App() {
  console.log(Canvas)

  return (
    <Canvas onKeyDown={(e) => onKeyDown(e)} onKeyUp={(e) => onKeyUp(e)}>
      <FloatingText />
      <Cube position={[0, 0, 0]} />
      {/* <OrbitControls /> */}
    </Canvas>
  )
}
