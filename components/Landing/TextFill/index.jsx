import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { scrollFillTextData } from "@constants";

const TextFill = () => {
	useGSAP(() => {
		// create a timeline
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#quote",
				start: "top top", // when the top of the trigger hits the top of the viewport
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				end: "+=1000",
				toggleActions: "restart pause reverse pause",
			},
		});

		tl.to("#one", {
			width: "100%",
		});
		tl.to("#two", {
			width: "100%",
		});
		tl.to("#three", {
			width: "100%",
		});
		tl.to("#four", {
			width: "100%",
		});
		tl.to("#five", {
			width: "100%",
		});
	});

	const renderLine = (text, id) => {
		return (
			<p
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-ppf relative inline-flex w-full text-left text-[1.299rem] font-extrabold leading-[2.534rem] tracking-[-0.03em] sm:text-[2.112rem] md:text-[2.558rem] md:leading-[3.529rem] lg:text-[3.483rem] lg:leading-[5.029rem] xl:text-[4.5rem] xl:leading-[6.029rem] 2xl:text-[5.545rem] 2xl:leading-[6.654rem]'>
				<span className='overflow-hidden text-nowrap text-[#F8FDFF80]'>{text}</span>
				<span
					id={id}
					className='absolute w-0 overflow-hidden text-nowrap text-[#F8FDFF] '>
					{text}
				</span>
			</p>
		);
	};

	return (
		<div className='relative h-[300vh] w-full px-3.5 pb-[100vh] md:px-9'>
			<div
				id='quote'
				className='flex h-screen w-full flex-col justify-center uppercase'>
				{renderLine(scrollFillTextData.first, "one")}
				{renderLine(scrollFillTextData.second, "two")}
				{renderLine(scrollFillTextData.third, "three")}
				{renderLine(scrollFillTextData.fourth, "four")}
				{renderLine(scrollFillTextData.fifth, "five")}
			</div>
		</div>
	);
};

export default TextFill;
