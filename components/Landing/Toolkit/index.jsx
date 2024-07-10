import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

import { toolkitData } from "@constants";

const Toolkit = () => {
	useGSAP(() => {
		// create a timeline
		let tl = gsap.timeline();

		const cards = gsap.utils.toArray(".card");

		cards.reverse().forEach((card, index) => {
			const plugAndPlay = cards[2].getBoundingClientRect();
			const { x, y } = card.getBoundingClientRect();

			gsap.from(card, {
				duration: 5,
				ease: "power4.in",
				x: () => plugAndPlay.x - x,
				y: () => {
					const yAxis = plugAndPlay.y - y;

					return index + 1 !== cards.length ? yAxis + plugAndPlay.height / (6 * (index + 1)) : 0;
				},
				scrollTrigger: {
					trigger: card,
					scrub: true,
				},
			});
		});
	});

	const renderVideo = (index) => {
		return (
			<div className='relative flex w-full items-center justify-center'>
				<div className='relative size-[13.361rem] 2xl:size-[17.948rem]'>
					<Image
						fill
						unoptimized={true}
						alt={toolkitData.cards[index].title}
						src={toolkitData.cards[index].asset}
						sizes='(max-width: 1536px) 17.948rem, 13.361rem'
					/>
				</div>
			</div>
		);
	};

	return (
		<div className='relative h-[150rem] w-full px-3.5 md:px-9'>
			<div
				id='toolkit'
				className='flex h-screen w-full flex-col justify-center gap-[3.25rem] pb-[3.938rem] pt-[5.563rem] uppercase md:gap-[4.563rem] md:pb-[5.563rem] md:pt-[11.188rem]'>
				<div
					id='toolkit_title'
					// eslint-disable-next-line tailwindcss/no-custom-classname
					className='font-ppf max-w-[22.688rem] text-left text-[1.75rem] font-extrabold leading-[2.1rem] tracking-[-0.03em] lg:max-w-[87.5rem] lg:text-[4.891rem] lg:leading-[4.06rem]'>
					{toolkitData.title}
				</div>
				<div className='relative h-fit min-h-full'>
					<ul
						id='toolkit_cards'
						className='flex flex-wrap justify-center gap-[1.375rem] lg:gap-[2.188rem]'>
						<li
							id='card_one'
							// eslint-disable-next-line tailwindcss/no-custom-classname
							className='card relative z-10 mx-auto flex h-[22.938rem] w-[22.625rem] min-w-[22.625rem] flex-col rounded-[0.743rem] bg-[#1C1D1C] p-[1.25rem_0.625rem] text-[#F8FDFF] 2xl:h-[41.875rem] 2xl:w-[28.542rem] 2xl:rounded-[2.25rem] 2xl:p-[2.313rem_1.688rem]'>
							<h2
								// eslint-disable-next-line tailwindcss/no-custom-classname
								className='font-ppf w-auto self-start text-left text-[1.75rem] font-extrabold leading-[2.1rem] tracking-[-0.03em] text-[#F8FDFF] 2xl:w-[15.938rem] 2xl:text-[4.236rem] 2xl:leading-[4.236rem]'>
								{toolkitData.cards[0].title}
							</h2>
							<p
								// eslint-disable-next-line tailwindcss/no-custom-classname
								className='font-gm mb-auto mt-[1.538rem] text-left text-[0.813rem] font-medium leading-[0.975rem] tracking-[-0.02em] text-[#F8FDFF] 2xl:mt-9 2xl:text-[1.309rem] 2xl:leading-[1.571rem] 2xl:tracking-[-0.01em]'>
								{toolkitData.cards[0].description}
							</p>
							{renderVideo(0)}
						</li>
						<li
							id='card_two'
							// eslint-disable-next-line tailwindcss/no-custom-classname
							className='card relative z-[11] mx-auto flex h-[22.938rem] w-[22.625rem] min-w-[22.625rem] flex-col rounded-[0.743rem] bg-[#FFF2DF] p-[1.25rem_0.625rem] text-[#010001] 2xl:h-[41.875rem] 2xl:w-[28.542rem] 2xl:rounded-[2.25rem] 2xl:p-[2.313rem_1.688rem]'>
							<h2
								// eslint-disable-next-line tailwindcss/no-custom-classname
								className='font-ppf self-start text-left text-[1.75rem] font-extrabold leading-[2.1rem] tracking-[-0.03em] text-[#010001] 2xl:text-[4.236rem] 2xl:leading-[4.236rem]'>
								{toolkitData.cards[1].title}
							</h2>
							<p
								// eslint-disable-next-line tailwindcss/no-custom-classname
								className='font-gm mb-auto mt-[1.538rem] text-left text-[0.813rem] font-medium leading-[0.975rem] tracking-[-0.02em] text-[#010001] 2xl:mt-9 2xl:text-[1.309rem] 2xl:leading-[1.571rem] 2xl:tracking-[-0.01em]'>
								{toolkitData.cards[1].description}
							</p>
							{renderVideo(1)}
						</li>
						<li
							id='card_three'
							// eslint-disable-next-line tailwindcss/no-custom-classname
							className='card relative z-[12] mx-auto flex h-[22.938rem] w-[22.625rem] min-w-[22.625rem] flex-col rounded-[0.743rem] bg-[#BADCF5] p-[1.25rem_0.625rem] text-[#010001] 2xl:h-[41.875rem] 2xl:w-[28.542rem] 2xl:rounded-[2.25rem] 2xl:p-[2.313rem_1.688rem]'>
							<h2
								// eslint-disable-next-line tailwindcss/no-custom-classname
								className='font-ppf self-start text-left text-[1.75rem] font-extrabold leading-[2.1rem] tracking-[-0.03em] text-[#010001] 2xl:text-[4.236rem] 2xl:leading-[4.236rem]'>
								{toolkitData.cards[2].title}
							</h2>
							<p
								// eslint-disable-next-line tailwindcss/no-custom-classname
								className='font-gm mb-auto mt-[2.038rem] text-left text-[0.813rem] font-medium leading-[0.975rem] tracking-[-0.02em] text-[#010001] 2xl:mt-9 2xl:text-[1.309rem] 2xl:leading-[1.571rem] 2xl:tracking-[-0.01em]'>
								{toolkitData.cards[2].description}
							</p>
							{renderVideo(2)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Toolkit;
