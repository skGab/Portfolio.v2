"use client"

import React, { useRef } from 'react';
import * as THREE from 'three';

function Cube() {
    const mesh = useRef<THREE.Mesh | null>(null);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={0x00ff00} />
        </mesh>
    );
}

export default function Tree3D() {
    return (
        <Canvas>
            <perspectiveCamera
                fov={75}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={1000}
                position={[0, 0, 5]}
            />
            <Cube />
        </Canvas>
    );
}
