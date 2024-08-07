"use client";
import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, Html, useProgress, } from "@react-three/drei";

import { Model } from "./Logo";

extend(THREE);

const Loader = () => {
	const { progress } = useProgress();
	return (
		<Html
			// eslint-disable-next-line tailwindcss/no-custom-classname
			className='font-gm text-[#F8FDFF]/[0.5]'
			center>
			{progress} % loaded
		</Html>
	);
};

const Models = () => {
	const triggerCTAClicks = ({ pageX, pageY }) => {
		const tryApp = document.querySelector("#hero_cta_button_one");
		const tryAppProps = tryApp?.getBoundingClientRect();
		const learnMore = document.querySelector("#hero_cta_button_two");
		const learnMoreProps = learnMore?.getBoundingClientRect();

		if (
			tryAppProps?.left <= pageX &&
			pageX <= tryAppProps?.right &&
			tryAppProps?.top <= pageY &&
			pageY <= tryAppProps?.bottom
		) {
			tryApp.click();
		} else if (
			learnMoreProps?.left <= pageX &&
			pageX <= learnMoreProps?.right &&
			learnMoreProps?.top <= pageY &&
			pageY <= learnMoreProps?.bottom
		) {
			learnMore.click();
		}
	};

	return (
		<div className='w-full h-screen'>
			<Canvas
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='canvas'
				dpr={[1, 2]}
				eventSource={typeof document !== "undefined" && document.getElementById("_next")}
				onClick={triggerCTAClicks}
				camera={{ position: [0, 0, 15], near: 5, far: 40 }}>
				<Suspense fallback={<Loader />}>
					<PerspectiveCamera
						makeDefault
						fov={40}
						position={[0, 0, 1]}
					/>
					<Model scrolling={false} />
					<Environment
						files='adams_place_bridge_1k.hdr'
						background={false}
					/>
					<OrbitControls enableZoom={false} autoRotate={false} enableRotate={false} enablePan={false} />
				</Suspense>
			</Canvas>
		</div>
	);
};

export const ModelBeta = () => {
	return (
		<div className='size-full'>
			<Canvas
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='canvas'
				dpr={[1, 2]}
				eventSource={typeof document !== "undefined" && document.getElementById("_next")}
				camera={{ position: [0, 0, 2.5] }}>
				<Suspense fallback={<Loader />}>
					<PerspectiveCamera
						makeDefault
						fov={40}
						position={[0, 0, 2]}
					/>
					<Model />
					<Environment
						files='adams_place_bridge_1k.hdr'
						// files='environment.hdr'
						background={false}
					/>
					<OrbitControls />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default Models;
