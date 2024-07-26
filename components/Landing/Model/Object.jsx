import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

import { useFBX, useGLTF } from "@react-three/drei"

// DracoLoader configuration
useGLTF.preload('/models/HAPTIC_100_Logo_006.glb', (loader) => {
    const dracoLoader = new DRACOLoader();
    draco.setDecoderConfig({ type: 'js' });
    draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    loader.setDRACOLoader(dracoLoader);
});

export const ModelObject = () => {
    // const fbx = useFBX("/models/HAPTIC_100_Logo_007.fbx")

    // const object = useLoader(OBJLoader, "/models/logo-object.obj")

    // return <primitive object={object} />

    const { scene } = useGLTF('/models/HAPTIC_100_Logo_006.glb');
    return <primitive object={scene} />;
}