"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import PropTypes from "prop-types";

import { SuggestionCardsData, BETA_APP_QUERY_PARAMS } from "@constants";
import useAutoResizeTextArea from "@lib/useAutoResizeTextArea";

import send from "@icons/send.svg";

const TextInput = ({ message, setMessage, sendMessage, loading, errorMessage }) => {
	const ref = useAutoResizeTextArea();

	const searchParams = useSearchParams();
	const template = searchParams.get(BETA_APP_QUERY_PARAMS.CONVERSATION_TEMPLATE) || "";

	useEffect(() => {
		if (ref.current) {
			ref.current.style.height = "24px";
			ref.current.style.height = `${ref.current.scrollHeight}px`;
		}
	}, [message, ref]);

	useEffect(() => {
		if (template) {
			setMessage(SuggestionCardsData[template]);
		} else {
			setMessage("");
		}
	}, [template]);

	const handleKeypress = (e) => {
		// It's triggers by pressing the enter key
		if (e.keyCode == 13 && !e.shiftKey) {
			sendMessage(e);
			e.preventDefault();
		}
	};

	return (
		<div className='sticky inset-x-0 bottom-0 w-full border-t border-[#F8FDFF]/[0.15] bg-[#010001] px-3 py-6 lg:px-[9.25rem]'>
			<form className='mx-2 flex flex-row gap-3 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl'>
				<div className='relative flex h-full flex-1 flex-col items-stretch md:flex-col'>
					<div className='relative flex w-full grow items-center gap-2 rounded-[2.188rem] border border-[#F8FDFF]/[0.15] bg-[#F8FDFF]/[0.05] p-[1.438rem] text-justify text-[1rem] font-medium leading-5 xl:max-w-[53.75rem]'>
						<textarea
							ref={ref}
							value={message}
							tabIndex={0}
							data-id='root'
							placeholder='Type your response here...'
							// eslint-disable-next-line tailwindcss/no-custom-classname
							className='font-hnd m-0 h-6 max-h-[12.5rem] w-full resize-none overflow-y-auto border-0 bg-transparent p-0 pl-2 pr-7 text-[1rem] font-medium leading-5 placeholder:text-[#F8FDFF]/[0.3] focus:ring-0 focus-visible:ring-0 md:pl-0'
							onChange={(e) => setMessage(e.target.value)}
							onKeyDown={handleKeypress}
						/>
						<button
							disabled={loading}
							onClick={sendMessage}
							className='relative size-6'>
							<Image
								fill
								src={send}
								alt='send_icon'
							/>
						</button>
					</div>
					{errorMessage && (
						<div className='mt-4'>
							<div className='ml-1 flex h-full justify-center gap-0 md:m-auto md:mb-2 md:w-full md:gap-2'>
								<span className='text-sm text-red-500'>{errorMessage}</span>
							</div>
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

TextInput.propTypes = {
	message: PropTypes.string,
	setMessage: PropTypes.func,
	sendMessage: PropTypes.func,
	loading: PropTypes.bool,
	errorMessage: PropTypes.string,
};

export default TextInput;
