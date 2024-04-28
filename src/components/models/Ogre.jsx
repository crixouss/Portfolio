/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Snackwacko (https://sketchfab.com/snackwacko)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ogre-character-676c3e1fb1154768b4f99410c38ea00f
Title: Ogre Character
*/
"use client"

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export default function Ogre(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/scene-transformed.glb')
    const { actions } = useAnimations(animations, group)

    const modelRef = useRef()

    useFrame((state,delta,xrFrama ) => {
        modelRef.current.position.y = -2.3 + Math.sin(state.clock.elapsedTime)*0.15
    })

    return (
        <group  {...props} ref={modelRef} dispose={null} position={[0,-2.3,0]} scale={[2.1,2.1,2.1]} rotation={[0,-0.3,0]}>
            <group name="Sketchfab_Scene">
                <primitive object={nodes._rootJoint} />
                <skinnedMesh
                    name="Object_38"
                    geometry={nodes.Object_38.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_38.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_40"
                    geometry={nodes.Object_40.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_40.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_42"
                    geometry={nodes.Object_42.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_42.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_44"
                    geometry={nodes.Object_44.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_44.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_46"
                    geometry={nodes.Object_46.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_46.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_48"
                    geometry={nodes.Object_48.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_48.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_50"
                    geometry={nodes.Object_50.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_50.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_52"
                    geometry={nodes.Object_52.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_52.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_54"
                    geometry={nodes.Object_54.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_54.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_56"
                    geometry={nodes.Object_56.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_56.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_58"
                    geometry={nodes.Object_58.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_58.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_60"
                    geometry={nodes.Object_60.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_60.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_62"
                    geometry={nodes.Object_62.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_62.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_64"
                    geometry={nodes.Object_64.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_64.skeleton}
                    scale={1.403}
                />
                <skinnedMesh
                    name="Object_66"
                    geometry={nodes.Object_66.geometry}
                    material={materials.Orc_LowPoly}
                    skeleton={nodes.Object_66.skeleton}
                    scale={1.403}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/scene-transformed.glb')
