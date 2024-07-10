import PropTypes from "prop-types";

import { useMediaQuery } from "@lib/useMediaQuery";

export const LinkArrow = ({ className }) => {
	const isMobile = useMediaQuery("(max-width:768px)");
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={isMobile ? "16" : "32"}
			height={isMobile ? "16" : "32"}
			viewBox='0 0 32 32'
			fill='none'
			className={`${className}`}>
			<g clipPath='url(#clip0_80_179)'>
				<path
					d='M25.1941 25.1926C24.7062 25.6805 23.9142 25.6805 23.4263 25.1926L8.90444 10.6707L8.76585 21.3198C8.76809 21.4867 8.73687 21.6524 8.67404 21.807C8.61121 21.9617 8.51804 22.1022 8.40002 22.2202C8.28201 22.3383 8.14154 22.4315 7.98691 22.4944C7.83228 22.5573 7.66661 22.5886 7.4997 22.5864C7.33278 22.5842 7.16799 22.5487 7.01504 22.4818C6.8621 22.4149 6.72411 22.318 6.6092 22.1969C6.4943 22.0758 6.40482 21.9329 6.34603 21.7767C6.28725 21.6205 6.26035 21.454 6.26694 21.2872L6.44371 7.67967C6.44596 7.35217 6.57705 7.03873 6.80863 6.80715C7.04021 6.57557 7.35365 6.44447 7.68115 6.44223L21.2887 6.26545C21.4555 6.25887 21.6219 6.28577 21.7782 6.34455C21.9344 6.40334 22.0773 6.49282 22.1984 6.60772C22.3195 6.72262 22.4164 6.86062 22.4832 7.01356C22.5501 7.1665 22.5857 7.33129 22.5879 7.49821C22.5901 7.66513 22.5588 7.83079 22.4959 7.98543C22.433 8.14006 22.3398 8.28052 22.2217 8.39854C22.1037 8.51656 21.9631 8.60973 21.8085 8.67256C21.6538 8.73539 21.4882 8.76661 21.3212 8.76437L10.6722 8.90296L25.1941 23.4248C25.682 23.9127 25.682 24.7047 25.1941 25.1926Z'
					fill='currentColor'
				/>
			</g>
			<defs>
				<clipPath id='clip0_80_179'>
					<rect
						width='32'
						height='32'
						fill='white'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

LinkArrow.propTypes = {
	className: PropTypes.string,
};

export const Menu = () => {
	return (
		<svg
			width='40'
			height='40'
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<rect
				y='0.5'
				width='40'
				height='40'
				rx='20'
				fill='#F8FDFF'
			/>
			<path
				d='M8 15.8333H32'
				stroke='#010001'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M8 25.1667H32'
				stroke='#010001'
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export const Close = () => {
	return (
		<svg
			width='41'
			height='41'
			viewBox='0 0 41 41'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<rect
				x='0.5'
				y='0.5'
				width='40'
				height='40'
				rx='20'
				fill='#1C1D1C'
			/>
			<path
				d='M12.0146 28.9853L28.9852 12.0147'
				stroke='#F8FDFF'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M12.0146 12.0147L28.9852 28.9853'
				stroke='#F8FDFF'
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export const HeuristLogo = ({ active }) => {
	return (
		<svg
			width='25'
			height='30'
			viewBox='0 0 25 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M6.25 3.64583L9.375 1.82292L12.5 0V3.45949V14.5833L9.375 14.5833V5.28241L3.125 8.92824V20.2384L6.25 22.0613V14.5833L9.375 14.5833V23.8843V27.3437L6.25 25.5208L3.125 23.6979L0 21.875V7.29167L3.125 5.46875L6.25 3.64583ZM15.625 14.5833L12.5 14.5833V25.7072V29.1667L15.625 27.3437L18.75 25.5208L21.875 23.6979L25 21.875V7.29167L21.875 5.46875L18.75 3.64583L15.625 1.82292V5.28241V14.5833ZM15.625 14.5833H18.75V7.10533L21.875 8.92824V14.5833V20.2384L15.625 23.8843V14.5833Z'
				fill={active ? "#010001" : "#F8FDFF"}
			/>
		</svg>
	);
};

HeuristLogo.propTypes = {
	active: PropTypes.bool,
};

export const MonaiLogo = ({ active }) => {
	return (
		<svg
			width='25'
			height='30'
			viewBox='0 0 25 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M19.5593 25.0985L16.3224 26.9722V17.4243L14.1186 18.7V28.2478L12.5705 29.1439L10.8817 28.1774L10.7405 4.89164L8.67771 6.08567V26.9159L5.44085 25.0633V7.95931L3.23686 9.23508V23.8018L0 21.9492V7.36143L12.4295 0.166672L19.5593 4.24742V25.0985ZM21.7631 9.2947V5.5088L25 7.36143V11.1683L21.7631 9.2947ZM21.7631 10.5615L25 12.4352V21.9492L21.7631 23.8228V10.5615ZM14.1186 4.89164L16.3224 6.16734V13.677L14.1186 14.9527V4.89164Z'
				fill={active ? "#010001" : "#F8FDFF"}
			/>
		</svg>
	);
};

MonaiLogo.propTypes = {
	active: PropTypes.bool,
};

export const HamburgerMenu = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			className='inline-block size-6 stroke-current'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M4 6h16M4 12h16M4 18h16'></path>
		</svg>
	);
};
