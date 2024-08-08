import Link from "next/link";

import { HeaderMobileData } from "@constants";
import { individualCodedText } from "@lib/individualCodedText";

import { LinkArrow } from "@components/Icons";

const SidebarContent = () => {
	return (
		<div className='menu size-full bg-[#F8FDFF] p-[4.75rem_1rem_1rem] text-base-content'>
			<div className='mb-[calc(9.688rem-15lvh)] mt-[10.438rem] flex size-full flex-col justify-between gap-4'>
				<div className='mb-auto flex w-full flex-col items-start gap-7'>
					{HeaderMobileData.links.map((item) => {
						return (
							<Link
								// eslint-disable-next-line tailwindcss/no-custom-classname
								className={`${item.class} font-ppf flex w-fit items-center justify-center text-left text-[3.414rem] font-[800] uppercase leading-[3.414rem] tracking-[-0.03em] text-[#1C1D1C]`}
								href={item.link || "#"}
								passHref
								key={item.id}
								data-text={item.label}
								onMouseEnter={() => individualCodedText(`.${item.class}`)}>
								{item.label || ""}
							</Link>
						);
					})}
				</div>
				<div className='flex w-full flex-col items-start gap-1.5'>
					<p
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className='font-gm flex w-fit items-center justify-center text-center text-[1.056rem] font-[600] uppercase leading-[1.268rem] tracking-[-0.02em] text-[#010001]'>
						{HeaderMobileData.socialTitle}
					</p>
					<div className='mb-6 mt-2.5 w-full border border-[#01000180]' />
					{HeaderMobileData.socials.map((item) => {
						return (
							<div
								key={item.id}
								// eslint-disable-next-line tailwindcss/no-custom-classname
								className='font-gm group flex w-fit items-center justify-center gap-[0.192rem] text-center text-[1.056rem] font-[600] uppercase leading-[1.268rem] tracking-[-0.02em] text-[#010001]'>
								<Link
									href={item.link || "#"}
									passHref
									// eslint-disable-next-line tailwindcss/no-custom-classname
									className='flex w-fit items-center justify-center gap-1'
									key={item.id}>
									<LinkArrow className='transition-all duration-300 group-hover:-translate-x-px group-hover:-translate-y-px group-hover:scale-100' />
									<span
										role='none'
										className={`${item.class}`}
										data-text={item.label}
										onMouseEnter={() => individualCodedText(`.${item.class}`)}>
										{item.label || ""}
									</span>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SidebarContent;
