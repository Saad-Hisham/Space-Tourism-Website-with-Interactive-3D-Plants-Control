import React, { useRef } from 'react'
import moon from "../space-tourism-website-main/starter-code/assets/destination/50062486346_0a0f5e6cd2_k-min.webp"
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(moon) });
  material.color = new THREE.Color("#ccad64");
  return (
    <group {...props} dispose={null}>
    <mesh geometry={nodes.Sphere_Material002_0.geometry} material={material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
  </group>
  )
}

useGLTF.preload('/scene-transformed.glb')