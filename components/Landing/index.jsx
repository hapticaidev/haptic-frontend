"use client";

import Lenis from "lenis";
import { useLenis } from "lenis/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Draggable } from "gsap/dist/Draggable";
import { Observer } from "gsap/dist/Observer";
import { CSSPlugin } from "gsap/dist/CSSRulePlugin";
import { Flip } from "gsap/dist/Flip";
import { CustomEase } from "gsap/dist/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/dist/EasePack";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { EaselPlugin } from "gsap/dist/EaselPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";
import { TextPlugin } from "gsap/dist/TextPlugin";

import { useEffect } from "react";

import Header from "@components/Landing/Header";
import Hero from "@components/Landing/Hero";
import TextFill from "@components/Landing/TextFill";
import Toolkit from "@components/Landing/Toolkit";
import Partner from "@components/Landing/Partner";
import Footer from "@components/Landing/Footer";
import Model from "@components/Landing/Model";

const EmptySection = () => {
	return (
		<div className='sticky inset-x-0 bottom-0 flex min-h-screen w-full items-center justify-center bg-[#010001] uppercase' />
	);
};

const PAGE_PANELS = [Hero, TextFill, Toolkit, Partner];

const Haptic = () => {
	const lenis = useLenis(ScrollTrigger.update);
	useEffect(() => {
		ScrollTrigger.refresh();
		// ScrollTrigger
		window.scrollTo(0, 0);

		return () => {
			ScrollTrigger.killAll();
		};
	}, [lenis]);

	gsap.registerPlugin(
		useGSAP,
		Flip,
		CSSPlugin,
		ScrollTrigger,
		Observer,
		ScrollToPlugin,
		Draggable,
		MotionPathPlugin,
		EaselPlugin,
		PixiPlugin,
		TextPlugin,
		RoughEase,
		ExpoScaleEase,
		SlowMo,
		CustomEase
	);
	gsap.defaults({ ease: "none", duration: 2 });

	useEffect(() => {
		// Initialize Lenis for smooth scrolling
		const lenis = new Lenis({
			duration: 1.2,
			lerp: 0.1,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: "vertical",
			smooth: true,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	const renderSection = (Component, index) => {
		return (
			<section
				key={index}
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='sticky inset-x-0 top-0 box-border flex h-fit min-h-screen w-full items-center justify-center bg-[#010001] '>
				<Component />
			</section>
		);
	};

	return (
		<div className='bg-[#010001]'>
			<Header>
				<main className='z-[1] w-full bg-[#010001]'>
					{PAGE_PANELS.map(renderSection)}
					<Model />
				</main>
				<EmptySection />
				<Footer />
			</Header>
		</div>
	);
};

export default Haptic;
