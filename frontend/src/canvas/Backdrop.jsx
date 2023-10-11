import React,{ useRef} from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import state from '../store'


const Backdrop = () => {
  const shadows = useRef()
  const snap = useSnapshot(state)

  return (
    <AccumulativeShadows
    color={snap.color}
    ref={shadows}
    // temporal //smooth out the edge of shadows overtime
    frames={60} 
    alphaTest={0.85} 
    scale={10} 
    rotation={[Math.PI / 2, 0, 0 ]}
    position={[0,0,-0.14]} 
    >
      <RandomizedLight 
        amount={4} 
        radius={9} 
        intensity={1.85} 
        ambient={0.25} 
        position={[5,5,-10]} 
      />
      <RandomizedLight 
        amount={4} 
        radius={5} 
        intensity={0.95} 
        ambient={0.55} 
        position={[-5,5,-10]} 
      />
    </AccumulativeShadows>
  )
}

export default Backdrop
