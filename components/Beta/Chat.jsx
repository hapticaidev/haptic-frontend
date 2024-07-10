"use client";

import { getCookie, setCookie } from "cookies-next";
import { Base64 } from "js-base64";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { BETA_APP_QUERY_PARAMS, MESSAGE_ROLES, COOKIE_NAME } from "@constants";

import Header from "./Header";

import Thread from "./Thread";
import TextInput from "./Input";

const Chat = ({ toggleComponentVisibility, disconnected }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [message, setMessage] = useState("");
	const [toast, setToast] = useState({ show: false, type: undefined });

	const router = useRouter();
	const searchParams = useSearchParams();
	const partnerId = searchParams.get(BETA_APP_QUERY_PARAMS.LLM_PARTNER_ID) || "";
	const modelId = searchParams.get(BETA_APP_QUERY_PARAMS.LLM_MODEL_ID) || "";
	const template = searchParams.get(BETA_APP_QUERY_PARAMS.CONVERSATION_TEMPLATE) || "";
	const params = searchParams.toString();

	const [chats, setChats] = useState([]);

	const chatData = getCookie(COOKIE_NAME.CHAT) || "";

	useEffect(() => {
		if (chatData) {
			setChats(JSON.parse(chatData));
		} else {
			setChats([]);
		}
	}, [chatData]);

	const sendMessage = async (e) => {
		e.preventDefault();

		if (params.includes(BETA_APP_QUERY_PARAMS.CONVERSATION_TEMPLATE)) {
			const query = params.replace(`${BETA_APP_QUERY_PARAMS.CONVERSATION_TEMPLATE}=${template}`, "");
			router.push(`?${query}`);
		}

		const _message = message.trim();

		// Don't send empty messages
		if (disconnected) {
			setErrorMessage("Please connect your wallet.");
			return;
		} else if (_message.length < 1) {
			setErrorMessage("Please enter a message.");
			return;
		} else if (!modelId) {
			setErrorMessage("Please select a model.");
			return;
		} else if (!partnerId) {
			setErrorMessage("Please select an active partner.");
			return;
		} else {
			setErrorMessage("");
		}

		setIsLoading(true);

		const loadingVal = [
			...chats,
			{ content: [_message], role: MESSAGE_ROLES.USER },
			{ content: [null, null], role: MESSAGE_ROLES.SYSTEM },
		];

		setChats(loadingVal);
		// Add the message to the conversation
		setCookie(COOKIE_NAME.CHAT, JSON.stringify(loadingVal));

		// Clear the message & remove empty chat
		setMessage("");

		try {
			const promptResponse = await fetch("/api/message/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					partnerId: Base64.decode(partnerId),
					modelId: Base64.decode(modelId),
					message,
				}),
			});

			const data = await promptResponse.json();

			if (data?.error) {
				throw new Error(data.error);
			}

			const val = [...chats, { content: [_message], role: "user" }, { content: data, role: "system" }];

			setChats(val);

			// Add the response to the conversation
			setCookie(COOKIE_NAME.CHAT, JSON.stringify(val));

			setIsLoading(false);
		} catch (error) {
			setErrorMessage(error.message);
			setIsLoading(false);
		}
	};

	const onSubmitHandler = (val, index) => {
		const clone = [...chats];
		clone[index] = { ...chats[index], submitted: true };
		const prompt = clone[index - 1].content[0] || "";
		(async () => {
			try {
				const feedbackResponse = await fetch("/api/feedback", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						partnerId: Base64.decode(partnerId),
						modelId: Base64.decode(modelId),
						prompt,
						content: clone[index].content,
						selected: val,
					}),
				});

				const data = await feedbackResponse.json();

				if (data?.error) {
					throw new Error(data.error);
				}

				setChats(clone);
				setCookie(COOKIE_NAME.CHAT, JSON.stringify(clone));
				setToast({ show: true, type: "success" });
			} catch (error) {
				setToast({ show: true, type: "error" });
			} finally {
				setTimeout(() => {
					setToast({ show: false, type: undefined });
				}, 3000);
			}
		})();
	};

	return (
		<div className='flex max-w-full flex-1 flex-col'>
			<Header toggleComponentVisibility={toggleComponentVisibility} />
			<Thread
				chats={chats}
				submitFeedback={onSubmitHandler}
			/>
			<TextInput
				loading={isLoading}
				message={message}
				setMessage={setMessage}
				sendMessage={sendMessage}
				errorMessage={errorMessage}
			/>
			{toast.show && (
				<div className='toast toast-start'>
					{toast.type === "success" && (
						<div className='alert alert-success'>
							<span>Feedback submitted successfully.</span>
						</div>
					)}
					{toast.type === "error" && (
						<div className='alert alert-error'>
							<span>Error submitting feedback.</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

Chat.propTypes = {
	toggleComponentVisibility: PropTypes.func,
	disconnected: PropTypes.bool,
};


export default Chat;
