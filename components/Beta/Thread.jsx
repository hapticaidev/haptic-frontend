"use client";

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import Message from "./Message";

import EmptyChat from "./Empty";

const Thread = ({ chats,  submitFeedback }) => {
	const bottomOfChatRef = useRef(null);

	useEffect(() => {
		if (bottomOfChatRef.current) {
			bottomOfChatRef.current.scrollIntoView({ behavior: "smooth" });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chats]);

	const renderChat = () => {
		return (
			<div className='flex w-full flex-col items-center justify-end'>
				<div className='h-8 w-full shrink-0 sm:h-[4.25rem] min-[1400px]:h-[9.625rem]' />
				{chats.map((message, index) => {
					return (
						<Message
							key={index}
							message={message}
							submitFeedback={(val) => submitFeedback(val, index)}
						/>
					);
				})}
				<div className='h-[5.188rem] w-full shrink-0' />
				<div ref={bottomOfChatRef} />
			</div>
		);
	};

	return (
		<div
			// eslint-disable-next-line tailwindcss/no-custom-classname
			className='transition-width relative flex size-full flex-1 flex-col items-stretch overflow-hidden'>
			<div className='flex-1 overflow-hidden'>
				<div className='relative h-full bg-[#010001]'>
					<div className='size-full overflow-y-auto'>{chats.length ? renderChat() : <EmptyChat />}</div>
				</div>
			</div>
		</div>
	);
};

Thread.propTypes = {
	chats: PropTypes.array,
	submitFeedback: PropTypes.func,
};

export default Thread;
