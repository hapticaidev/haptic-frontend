/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three";
import React, { useRef, useState } from 'react'
import { useGLTF, } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';

export function Model({ scrolling = false, ...props }) {
    const { nodes, materials } = useGLTF('/models/logo.glb')
    const ref = useRef();


    const { camera, pointer, size,  } = useThree()

    const vec = new THREE.Vector3()
    useFrame((state, delta) => {

        if (scrolling) {
            ref.current.rotation.y += delta / 1.2;

            if (size.width >= 1360) {
                camera.position.lerp(vec.set(2, 0, 2), 0.02)
            } else if (size.width >= 1024) {
                camera.position.lerp(vec.set(1, 0, 2), 0.02)
            } else if (size.width >= 768) {
                camera.position.lerp(vec.set(1, 0, 2), 0.02)
            } else {
                camera.position.lerp(vec.set(1, 0, 3), 0.02)
            }
        } else {
            if (size.width >= 1240) {
                camera.position.lerp(vec.set(pointer.x * -8, pointer.y * 2, camera.position.z), 0.02)
            } else if (size.width >= 1024) {
                camera.position.lerp(vec.set(pointer.x * -1, pointer.y * 1, camera.position.z), 0.02)
            } else if (size.width >= 768) {
                camera.position.lerp(vec.set(pointer.x * -1, pointer.y * 1, camera.position.z), 0.02)
            } else {
                camera.position.lerp(vec.set(pointer.x * 2, pointer.y * 3, camera.position.z), 0.02)
            }
        }
    })

    const [onClick, handleOnClick] = useState(false);

    const materialProps = {
        thickness: 1.6,
        roughness: 0,
        clearcoat: 0,
        clearcoatRoughness: 1,
        transmission: 0.98,
        ior: 6,
        envMapIntensity: 1,
        color: "#ffffff",
        attenuationTint: "#c10000",
        attenuationDistance: 1.2,
    };

    const getSize = () => {
        if (size.width >= 1360) {
            return 5.065;
        } else if (size.width >= 1024) {
            return 4.065;
        }
        else if (size.width >= 768) {
            return 3.065;
        } else {
            return 2.065;
        }
    }


    return (
        <group {...props} dispose={null} onClick={(event) => handleOnClick(!onClick)}
        >
            <mesh
                ref={ref}
                castShadow
                receiveShadow
                geometry={nodes.Mesh_0001.geometry}
                material={materials.Plastic}
                position={[0, 0, -1.766]}
                rotation={[0, 0, -Math.PI]}
                scale={getSize()}
            >
                <meshPhysicalMaterial {...materialProps} />
            </mesh>

        </group>
    )
}

useGLTF.preload('/models/logo.glb')
