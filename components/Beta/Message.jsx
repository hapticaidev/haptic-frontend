import Image from "next/image";
import PropTypes from "prop-types";

import logoMark from "@icons/landing/haptic-logomark.svg";

import { MESSAGE_ROLES } from "@constants";
import copy from "@icons/copy.svg";
import { useEffect, useRef, useState } from "react";

const Avatar = ({ isUser }) => {
	return isUser ? (
		<div className='size-10 min-w-10 rounded-full bg-[#F8FDFF]' />
	) : (
		<div className='size-10 min-w-10 rounded-full bg-[#1C1D1C] px-2.5 py-[0.438rem]'>
			<div className='relative h-6 w-[1.188rem]'>
				<Image
					fill
					src={logoMark}
					alt='logo'
					className='mx-auto object-contain'
				/>
			</div>
		</div>
	);
};

const TextContent = ({ value, isUser, submitted, submittedIndex, index, handleOnSelect }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [showReadMore, setShowReadMore] = useState(false);
	const contentRef = useRef(null);

	useEffect(() => {
		const lineHeight = 20; // Adjust based on your line height
		const maxHeight = lineHeight * 15; // Max height for 15 lines
		const contentHeight = contentRef.current?.scrollHeight || 0;

		if (contentHeight > maxHeight) {
			setShowReadMore(true);
		} else {
			setShowReadMore(false);
		}
	}, [value]);

	return (
		<div
			className={`flex grow flex-col gap-3 ${isUser ? "items-end" : "flex-1 items-start"}`}>
			<div
				className={`flex w-full min-h-20 flex-col gap-4 whitespace-pre-wrap break-words ${isUser ? "items-end" : "items-start"}`}>
				<div
					className={`flex flex-col gap-[1.813rem] w-full break-words rounded-[1.063rem] px-3.5 py-[1.375rem] ${isUser ? "bg-[#1C1D1C]/[0.57] max-w-[31.625rem]" : "bg-[#1C1D1C]"} `}>
					{!value ? (
						<div className='skeleton h-8 w-full rounded-[0.675rem] bg-[#F8FDFF]/[0.05]' />
					) : (
						// eslint-disable-next-line tailwindcss/no-custom-classname
						<p
							ref={contentRef}
							className={`font-hnd text-[1rem] font-medium leading-5 text-[#F8FDFF] text-start ${!isExpanded ? 'max-h-[18.75rem] overflow-hidden text-ellipsis line-clamp-[15]' : 'line-clamp-none'} ${!isUser && showReadMore ? 'min-h-[18.75rem]' : ''}`}
						>
							{value}
						</p>
					)}
					{!isUser && showReadMore && (
						<span
							role="none"
							className="inline text-[#F8FDFF]/[0.5] underline w-fit cursor-pointer"
							onClick={() => setIsExpanded(!isExpanded)}
						>
							{isExpanded ? 'Read Less' : 'Read More'}
						</span>
					)}
					{!isUser && <div className='relative w-full flex flex-row gap-[2.625rem] items-center'>
						<button
							disabled={!value || submitted}
							className={`font-gm flex size-fit items-center justify-center rounded-full px-4 py-3 text-center text-[1.125rem] font-bold uppercase leading-[1.35rem] tracking-[-0.03em] text-[#010001] ${(submitted && submittedIndex === index) || (submittedIndex === undefined && value) ? "bg-[#F8FDFF]" : "bg-[#8A8D8D]"} hover:bg-red`}
							onClick={(e) => handleOnSelect(e, index, value)}>
							{submitted && submittedIndex === index ? "Selected" : "Select"}
						</button>
						<button
							className='relative flex size-6 items-center justify-center w-[1.287rem]'
							disabled={!value}
							onClick={() => navigator.clipboard.writeText(value)}
						>
							<Image
								fill
								src={copy}
								alt="copy icon"
							/>
						</button>
					</div>}
				</div>
			</div>
		</div>
	);
}

const Message = ({ message, submitFeedback }) => {
	const { role, content = [], submitted = false, submittedIndex = undefined } = message;

	const isUser = role === MESSAGE_ROLES.USER;

	const onClickHandler = (e, index, value) => {
		e.preventDefault();

		if (isUser || !value) return;

		submitFeedback?.(index);
	};

	return (
		<div className={`group w-full bg-[#010001]`}>
			<div className='mx-9 flex gap-4 md:mx-[7.25rem]'>
				<div
					className={`flex w-full items-end justify-start gap-4 p-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
					<Avatar isUser={isUser} />

					<div className='relative w-full flex flex-col gap-[2.025rem]'>
						{!isUser && <h4 className="font-gm pl-[0.875rem] font-medium uppercase text-[1.309rem] tracking-[-0.02em] leading-[1.701rem] text-[#F8FDFF]">Select the most appropriate response:</h4>}
						<div className='relative w-full flex flex-col md:flex-row gap-[1.563rem]'>
							{content.map((item, index) => (<TextContent key={index + role} value={item} isUser={isUser} submitted={submitted} submittedIndex={submittedIndex} index={index} handleOnSelect={onClickHandler} />))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Avatar.propTypes = {
	isUser: PropTypes.bool,
};

TextContent.propTypes = {
	isUser: PropTypes.bool,
	value: PropTypes.string,
	index: PropTypes.number,
	submitted: PropTypes.bool,
	submittedIndex: PropTypes.number,
	handleOnSelect: PropTypes.func
};

Message.propTypes = {
	message: PropTypes.objectOf({
		role: PropTypes.string,
		content: PropTypes.string,
		submitted: PropTypes.bool,
		submittedIndex: PropTypes.number,
	}),
	submitFeedback: PropTypes.func,
};

export default Message;
