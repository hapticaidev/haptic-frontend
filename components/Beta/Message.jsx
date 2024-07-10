import Image from "next/image";
import PropTypes from "prop-types";

import logoMark from "@icons/landing/haptic-logomark.svg";

import { MESSAGE_ROLES } from "@constants";

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

const Message = ({ message, submitFeedback }) => {
	const { role, content = [], submitted = false } = message;

	const isUser = role === MESSAGE_ROLES.USER;

	const onClickHandler = (e, index, value) => {
		e.preventDefault();

		if (isUser || !value) return;

		submitFeedback?.(index);
	};

	const renderMessageWrapper = (index, value) => {
		return isUser ? (
			<div
				key={index}
				className='flex grow flex-col gap-3 items-end'>
				{renderMessage(value)}
			</div>
		) : (
			<button
				key={index}
				className='flex grow flex-col flex-1 gap-3 items-start'
				disabled={!value || submitted}
				onClick={(e) => onClickHandler(e, index, value)}>
				{renderMessage(value)}
			</button>
		);
	};

	const renderMessage = (value) => {
		return (
			<div
				className={`flex w-full min-h-20 flex-col gap-4 whitespace-pre-wrap break-words ${isUser ? "items-end" : "items-start"}`}>
				<div
					className={`w-full break-words rounded-[1.063rem] px-3.5 py-[1.375rem] ${isUser ? "bg-[#1C1D1C]/[0.57] max-w-[31.625rem]" : "bg-[#1C1D1C]"} `}>
					{!value ? (
						<div className='skeleton h-8 w-full rounded-[0.675rem] bg-[#F8FDFF]/[0.05]' />
					) : (
						// eslint-disable-next-line tailwindcss/no-custom-classname
						<p className='font-hnd text-start text-[1rem] font-medium leading-5 text-[#F8FDFF]'>{value}</p>
					)}
				</div>
			</div>
		);
	};

	return (
		<div className={`group w-full bg-[#010001]`}>
			<div className='mx-9 flex gap-4 md:mx-[7.25rem]'>
				<div
					className={`flex w-full items-end justify-start gap-4 p-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
					<Avatar isUser={isUser} />

					<div className='relative w-full flex flex-col md:flex-row gap-[1.563rem]'>
						{content.map((item, index) => renderMessageWrapper(index, item))}
					</div>
				</div>
			</div>
		</div>
	);
};

Avatar.propTypes = {
	isUser: PropTypes.bool,
};

Message.propTypes = {
	message: PropTypes.objectOf({
		role: PropTypes.string,
		content: PropTypes.string,
		submitted: PropTypes.bool,
	}),
	submitFeedback: PropTypes.func,
};

export default Message;
