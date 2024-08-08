import Link from "next/link";

import { FooterData } from "@constants";
import { individualCodedText } from "@lib/individualCodedText";

import { LinkArrow } from "@components/Icons";

const FooterInfo = () => {
	const desktopInfo = () => {
		return (
			<aside className='hidden flex-none md:block'>
				<div className='flex w-full flex-col gap-9'>
					<h4
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className='font-ppf text-left text-[3.499rem] font-extrabold leading-[3.499rem] tracking-[-0.03em] text-[#010001] lg:text-[5.545rem] lg:leading-[6.654rem] lg:tracking-[-0.03em]'>
						{FooterData.title}
						<br />
						{FooterData.secondLine}
					</h4>
					<p
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className='font-gm max-w-[22.625rem] text-justify text-[0.875rem] font-[600] leading-[1.094rem] tracking-[-0.01em] text-[#010001] lg:max-w-[32.375rem] lg:text-[1rem] lg:leading-5'>
						{FooterData.subtitle}
					</p>
					<ul className='mt-[0.313rem] flex flex-col gap-1.5 lg:mt-[1.563rem] lg:gap-1'>
						{FooterData.links.map((item) => {
							return (
								<li
									key={item.id}
									// eslint-disable-next-line tailwindcss/no-custom-classname
									className=' font-gm group w-fit text-left text-[1.063rem] font-medium leading-5 tracking-[-0.01em] text-[#010001] lg:text-[1.309rem] lg:leading-[1.571rem]'>
									<Link
										href={item.link || "#"}
										passHref
										// eslint-disable-next-line tailwindcss/no-custom-classname
										className='flex w-fit items-center justify-center gap-1'>
										<LinkArrow
											className={`transition-all duration-300 group-hover:-translate-x-px group-hover:-translate-y-px group-hover:scale-100 lg:group-hover:translate-x-[-4px]  lg:group-hover:translate-y-[-4px] lg:group-hover:scale-110`}
										/>
										<span
											role='none'
											className={`${item.class}`}
											data-text={item.label}
											onMouseEnter={() => individualCodedText(`.${item.class}`)}>
											{item.label || ""}
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</aside>
		);
	};

	const mobileInfo = () => {
		return (
			<aside className='w-full flex-none md:hidden'>
				<div className='flex w-full flex-col gap-4 sm:gap-[1.688rem]'>
					<h4
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className='font-ppf text-left text-[2.5rem] font-extrabold leading-[3.499rem] tracking-[-0.03em] text-[#010001] sm:text-[3.499rem]'>
						{FooterData.title}
						<br />
						{FooterData.secondLine}
					</h4>
					<p
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className='font-gm sm:text-[0.875rem] w-full text-justify text-[0.75rem] font-[600] leading-[1.094rem] tracking-[-0.01em] text-[#010001] '>
						{FooterData.subtitle}
					</p>
					<ul className='mt-0 flex flex-row justify-between gap-1.5 sm:mt-[0.313rem] sm:flex-col'>
						{FooterData.links.map((item) => {
							return (
								<li
									key={item.id}
									// eslint-disable-next-line tailwindcss/no-custom-classname
									className='font-gm group w-fit text-left text-[1.063rem] font-medium leading-5 tracking-[-0.01em] text-[#010001] lg:text-[1.309rem] lg:leading-[1.571rem]'>
									<Link
										passHref
										href={item.link || "#"}
										className='leading:[1.268rem] flex w-fit items-center justify-center gap-1 text-[0.875rem] font-[500] tracking-[-0.02em] sm:text-[1.056rem]'>
										<LinkArrow className='transition-all duration-300 group-hover:-translate-x-px group-hover:-translate-y-px group-hover:scale-100 lg:group-hover:-translate-x-1  lg:group-hover:-translate-y-1 lg:group-hover:scale-110' />
										<span
											role='none'
											className={`${item.class}`}
											data-text={item.label}
											onMouseEnter={() => individualCodedText(`.${item.class}`)}>
											{item.label}
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</aside>
		);
	};

	return (
		<>
			{desktopInfo()}
			{mobileInfo()}
		</>
	);
};

export default FooterInfo;
