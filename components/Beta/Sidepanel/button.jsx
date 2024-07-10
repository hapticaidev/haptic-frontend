import PropTypes from "prop-types";

const SidepanelButton = ({ id, title, icon, handleOnClick, active }) => {
	const Icon = icon;

	return (
		<button
			id={id}
			className={`btn flex h-fit content-center justify-start rounded-[0.625rem] border-none px-2.5 py-3.5 ${active === id ? "bg-[#F8FDFF] text-[#010001] hover:bg-[#F8FDFF]/[0.85]" : "bg-[#010001] text-[#F8FDFF] hover:bg-[#F8FDFF]/[0.05]"}`}
			onClick={() => handleOnClick(id)}>
			<div className='relative flex h-[1.813rem] w-[1.563rem] items-center justify-center'>
				<Icon active={active === id} />
			</div>
			<span
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-gm text-[1rem] font-[600] uppercase leading-5 tracking-[-0.01em]'>
				{title}
			</span>
		</button>
	);
};

SidepanelButton.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.any,
	handleOnClick: PropTypes.func,
	active: PropTypes.string,
};

export default SidepanelButton;
