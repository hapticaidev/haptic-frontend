import Image from "next/image";
import { useRouter } from "next/navigation";

import { partenersData } from "@constants";

const Partner = () => {
	const router = useRouter();

	const renderPartnerLogo = (item, index) => {
		return (
			<li
				key={index}
				className='flex items-center justify-center lg:max-w-[155px] '>
				<div className='relative h-[2.063rem] w-[6.25rem] md:h-[4.063rem] md:w-[12.5rem]'>
					<Image
						fill
						src={item}
						alt='logo_partners_desk'
						className='mx-auto object-contain'
					/>
				</div>
			</li>
		);
	};

	return (
		<div className='flex w-full flex-col items-center justify-center px-3.5 pt-[4.313rem] uppercase md:px-9 lg:pt-[11.188rem]'>
			<div
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-ppf text-[#F8FDFF] w-full max-w-[22.688rem] self-start text-left text-[1.75rem] font-extrabold leading-[2.063] tracking-[-0.03em] md:max-w-[87.5rem] lg:text-[2.618rem] lg:leading-[3.142rem]'>
				{partenersData.title}
			</div>
			<ul className='mt-5 flex flex-wrap justify-center gap-[3.043rem] lg:mt-[4.313rem] lg:gap-24'>
				{partenersData.partners.map(renderPartnerLogo)}
			</ul>
			<div className='mx-auto mb-[13.958rem] mt-[13.664rem] flex flex-col items-center lg:mb-[13.146rem] lg:mt-[11.104rem]'>
				<div className='relative h-[2.903rem] w-[2.366rem] md:h-[5.823rem] md:w-[4.746rem]'>
					<Image
						fill
						src={partenersData.ctaLogo}
						alt='logo_mark'
						className='mx-auto object-contain'
					/>
				</div>
				<p
					// eslint-disable-next-line tailwindcss/no-custom-classname
					className='font-ppf text-[#F8FDFF] mx-auto mb-[2.119rem] mt-[0.779rem] max-w-[22.688rem] text-center text-[1.75rem] font-extrabold leading-[2.063rem] tracking-[-0.03em] lg:mb-[4.25rem] lg:mt-[1.563rem] lg:max-w-[43.75rem] lg:text-[2.618rem] lg:leading-[3.142rem]'>
					{partenersData.ctaHook}
				</p>
				<button
					// eslint-disable-next-line tailwindcss/no-custom-classname
					className='font-gm mx-auto flex h-[2.688rem] w-fit items-center justify-center rounded-full bg-[#F8FDFF] px-4 text-center text-[0.938rem] font-medium uppercase leading-[1.125rem] tracking-[-0.01em] text-[#010001]'
					onClick={() => router.push("/beta")}>
					{partenersData.ctaLabel}
				</button>
			</div>
		</div>
	);
};

export default Partner;
