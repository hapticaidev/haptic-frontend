import Link from "next/link";
import HTMLReactParser from "html-react-parser";

import { HeroBannerData } from "@constants";

const HeroBanner = () => {
	return (
		// eslint-disable-next-line tailwindcss/no-custom-classname
		<div className='h-all-screen flex w-full flex-col items-center justify-center px-3.5 uppercase md:px-9'>
			<div
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-ppf mb-auto mt-[10.214rem] w-full min-w-[21.188rem] select-none text-left text-[3.499rem] font-extrabold leading-[3.499rem] tracking-[-0.03em] text-[#F8FDFF] md:mt-[11.813rem] md:text-[6.785rem] md:leading-[6.785rem] lg:min-w-[60.75rem] lg:text-[10.031rem] lg:leading-[9.529rem] 2xl:mb-auto 2xl:mt-[10.214rem]'>
				{HTMLReactParser(HeroBannerData.title)}
			</div>
			<div className='mb-[3.813rem] ml-auto flex w-full flex-col items-end 2xl:mb-[3.813rem]'>
				<div
					// eslint-disable-next-line tailwindcss/no-custom-classname
					className='font-gm w-full select-none text-justify text-[0.875rem] font-[600] leading-[1.094rem] tracking-[-0.02em] md:w-[22.688rem] lg:w-[29.313rem] lg:text-[1rem] lg:leading-5 text-[#F8FDFF]/[0.5]'>
					{HTMLReactParser(HeroBannerData.desc)}
				</div>
				<div className='mt-[2.188rem] flex gap-[1.563rem]'>
					<Link
						id='hero_cta_button_one'
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className='font-gm flex select-none items-center justify-center rounded-full bg-[#F8FDFF] p-4 text-center text-[0.813rem] font-medium uppercase leading-[0.975rem] tracking-[-0.02em] text-[#010001] md:text-[0.938rem] md:leading-[1.125rem] md:tracking-[-0.01em]'
						href={HeroBannerData.button1Link}
						passHref>
						{HeroBannerData.button1Label}
					</Link>
					<Link
						id='hero_cta_button_two'
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className='font-gm flex select-none items-center justify-center rounded-full border border-[#F8FDFF] bg-transparent p-4 text-center text-[0.813rem] font-medium uppercase leading-[0.975rem] tracking-[-0.02em] text-[#F8FDFF] md:text-[0.938rem] md:leading-[1.125rem] md:tracking-[-0.01em]'
						href={HeroBannerData.button2Link}
						passHref>
						{HeroBannerData.button2Label}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
