import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, CubeCamera } from '@react-three/drei'
import { Mesh, Texture } from 'three'

function Box({ envMap }: { envMap: Texture }) {
    const [hovered, setHover] = useState(false)
    const meshRef = useRef<Mesh>(null)

    // Rotate the mesh every frame
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
        }
    })
    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>
            <boxGeometry args={[1, 1, 2]} />
            <meshStandardMaterial envMap={envMap} color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default function Model() {
    // @ts-nocheck
    return (
        <Canvas className='canvas' camera={{ position: [2, 2, 1] }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <CubeCamera>
                {(texture) => <Box envMap={texture} />}
            </CubeCamera>
            <OrbitControls enablePan={false} />
        </Canvas>
    )
}
