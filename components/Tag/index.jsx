import React from "react";
import PropTypes from "prop-types";

const Tag = ({ title, handleTagClick, checked, small }) => {
	return (
		<div
			role='none'
			onClick={() => handleTagClick(title)}
			className={`flex size-fit cursor-pointer items-center space-x-2 rounded-full border-[0.061rem] border-[#010001] transition-all duration-100 ease-in md:border ${
				checked ? "bg-[#010001] text-white" : "bg-transparent text-[#010001]  hover:bg-[rgba(0,0,0,0.2)]"
			} ${small ? "px-[0.619rem] py-2 sm:py-[0.813rem]" : "p-[0.813rem]"}`}>
			<div
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className={`font-pjs text-center  ${small ? "text-[0.75rem] font-[550] leading-[0.975rem] tracking-[-0.02em] sm:text-[0.813rem]" : "text-[0.938rem] font-medium leading-[1.125rem] tracking-[-0.01em]"}`}>
				{title}
			</div>
		</div>
	);
};

Tag.propTypes = {
	small: PropTypes.bool,
	checked: PropTypes.bool,
	title: PropTypes.string,
	handleTagClick: PropTypes.func,
};

export default Tag;
