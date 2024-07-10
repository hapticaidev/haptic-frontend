import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";

import { HeaderMobileData } from "@constants";

import { Menu, Close } from "@components/Icons";

import NavItems from "./Nav";
import SidebarContent from "./Sidebar";

const Header = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const desktop = () => {
		return (
			<div className='hidden w-full flex-none md:block'>
				<div className='flex w-full items-center justify-between '>
					<NavItems />
				</div>
			</div>
		);
	};

	const mobile = () => {
		return (
			<div className='w-full flex-none md:hidden'>
				<div className='flex w-full items-center justify-between'>
					<Link
						href={HeaderMobileData.link || "#"}
						className='relative h-[1.312rem] w-[8.813rem] duration-200 hover:scale-110'
						passHref>
						<Image
							fill
							alt='logo_mobile'
							src={(isMenuOpen ? HeaderMobileData.menu : HeaderMobileData.logo) || ""}
						/>
					</Link>
					<label
						htmlFor='my-drawer-3'
						aria-label='open sidebar'
						className='btn btn-square btn-ghost size-10 min-h-10 rounded-full border-0 bg-transparent'>
						{isMenuOpen ? <Close /> : <Menu />}
					</label>
				</div>
			</div>
		);
	};

	const sidebar = () => {
		return (
			<div className='drawer-side z-10 md:hidden'>
				<label
					htmlFor='my-drawer-3'
					aria-label='close sidebar'
					className='drawer-overlay'></label>
				<SidebarContent />
			</div>
		);
	};

	return (
		<div className='drawer drawer-end'>
			<input
				id='my-drawer-3'
				type='checkbox'
				className='drawer-toggle'
				onChange={(e) => {
					setIsMenuOpen(e.target.checked);
				}}
			/>
			<div className='drawer-content flex flex-col'>
				{/* Navbar */}
				<header
					className={`navbar fixed inset-x-0 top-0 z-[99999] h-fit w-full px-3.5 py-[1.125rem] md:px-9 md:py-8 ${isMenuOpen ? "" : "bg-gradient-to-b from-[#010001ad] to-[#01000100]"}`}>
					{desktop()}
					{mobile()}
				</header>
				{children}
			</div>
			{sidebar()}
		</div>
	);
};

Header.propTypes = {
	children: PropTypes.any,
};

export default Header;
