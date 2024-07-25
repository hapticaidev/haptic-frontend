import Link from "next/link";
import Image from "next/image";

import { HeaderData } from "@constants";
import { individualCodedText } from "@lib/individualCodedText";

const NavItems = () => {
	return HeaderData.map((item, index) => {
		if (item.logo) {
			return (
				<Link
					href={item.link || "#"}
					passHref
					key={item.link}
					className='relative h-[1.982rem] w-[13.316rem]'>
					<Image
						fill
						src={item.logo}
						alt='logo_desktop'
					/>
				</Link>
			);
		} else if (item.button) {
			return (
				<Link
					// eslint-disable-next-line tailwindcss/no-custom-classname
					className='font-gm flex size-fit items-center justify-center rounded-full bg-[#F8FDFF] p-4 text-center text-[1rem] font-medium uppercase leading-[1.125rem] tracking-[-0.01em] text-[#010001]'
					href={item.link || "#"}
					passHref
					key={item.link}>
					{item.label}
				</Link>
			);
		}
		return (
			<Link
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-gm flex size-fit items-center justify-center rounded-full text-center text-[1rem] font-[600] uppercase leading-5 tracking-[-0.01em] text-[#F8FDFF]'
				href={item.link || "#"}
				passHref
				key={item.link}>
				<span
					role='none'
					className={`${item.class}`}
					data-text={item.label}
					onMouseEnter={() => individualCodedText(`.${item.class}`)}>
					{item.label || ""}
				</span>
			</Link>
		);
	});
};

export default NavItems;
