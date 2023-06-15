import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Box() {
    const { scene } = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb');
    return <primitive object={scene} />
}

export default function Model() {
    return (
        <Canvas className='canvas' camera={{ position: [1, 2.5, 2] }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense>
                <Box />
            </Suspense>
            <OrbitControls enableDamping={false} enablePan={false} target={[0 , 1, 0]} autoRotate />
        </Canvas>
    )
}
