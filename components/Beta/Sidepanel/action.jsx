import Image from "next/image";
import PropTypes from "prop-types";

const SidepanelAction = ({ id, icon, title, alt = "icon", handleOnClick }) => {
	return (
		<button
			id={id}
			onClick={handleOnClick}
			className=' btn flex h-fit content-center justify-start rounded-[0.625rem] border-none bg-[#010001] px-2.5 py-[0.313rem] hover:bg-[#F8FDFF]/[0.05]'>
			<div className='relative flex size-6 items-center justify-center'>
				<Image
					fill
					src={icon}
					alt={alt}
				/>
			</div>
			<span
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-gm text-[1rem] font-[600] uppercase leading-5 tracking-[-0.01em] text-[#F8FDFF]/[0.5]'>
				{title}
			</span>
		</button>
	);
};

SidepanelAction.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.any,
	handleOnClick: PropTypes.func,
	alt: PropTypes.string,
};

export default SidepanelAction;
