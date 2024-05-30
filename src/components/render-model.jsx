"use client"

import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import clsx from "clsx";
import {Environment} from "@react-three/drei";


const RenderModel = ({children, className}) => {
    return (
        <Canvas className={clsx("w-full h-full -z-10  relative", className)}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset={'sunset'}/>
        </Canvas>
    )
}

export default RenderModel;