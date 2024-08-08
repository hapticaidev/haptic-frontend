import React from "react";
import PropTypes from "prop-types";

const Tag = ({ title, handleTagClick, checked }) => {
	return (
		<div
			role='none'
			onClick={() => handleTagClick(title)}
			className={`flex size-fit cursor-pointer items-center space-x-2 rounded-full border-[0.061rem] border-[#010001] transition-all duration-100 ease-in md:border ${
				checked ? "bg-[#010001] text-white" : "bg-transparent text-[#010001]  hover:bg-[rgba(0,0,0,0.2)]"
				} py-[0.619rem] px-[0.967rem]`}>
			<div
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-gm text-center text-[1rem] leading-5 tracking-[-0.02em] font-[600] text-[#010001]'>
				{title}
			</div>
		</div>
	);
};

Tag.propTypes = {
	checked: PropTypes.bool,
	title: PropTypes.string,
	handleTagClick: PropTypes.func,
};

export default Tag;
