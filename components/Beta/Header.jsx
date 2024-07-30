"use client";

import { Base64 } from "js-base64";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { BETA_APP_QUERY_PARAMS, COOKIE_NAME } from "@constants";

import { HamburgerMenu } from "@components/Icons";

import arrow from "@icons/arrowUp.svg";

const Menu = ({ toggleComponentVisibility }) => {
	return (
		<div className='flex items-center bg-[#010001] py-3.5 min-[1081px]:hidden'>
			<button
				type='button'
				className='inline-flex size-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white'
				onClick={toggleComponentVisibility}>
				<span className='sr-only'>Open sidebar</span>
				<HamburgerMenu />
			</button>
		</div>
	);
};

const Header = ({ toggleComponentVisibility }) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const partnerId = searchParams.get(BETA_APP_QUERY_PARAMS.LLM_PARTNER_ID) || "";
	const modelId = searchParams.get(BETA_APP_QUERY_PARAMS.LLM_MODEL_ID) || "";

	const [title, setTitle] = useState("default");

	const modelData = getCookie(COOKIE_NAME.MODELS) || "";

	const modelsData = () => {
		if (!modelData) {
			return [];
		}

		const models = JSON.parse(modelData);

		return models.map((item) => ({ id: item.modelId, title: item.name }));
	};

	const dataLength = modelsData().length;

	useEffect(() => {
		if (!modelId) {
			setTitle("default");
		}
	}, [modelId]);

	useEffect(() => {
		const fetchData = async () => {
			if (!partnerId) return;

			try {
				const modelsResponse = await fetch(`/api/models/partner/${Base64.decode(partnerId)}`, {
					method: "GET",
				});
				const data = await modelsResponse.json();

				if (data?.error) {
					throw new Error(data.error);
				}

				setCookie(COOKIE_NAME.MODELS, JSON.stringify(data));

				const params = searchParams.toString();
				const id = Base64.encodeURI(data[0].modelId);
				setTitle(data[0].name);
				if (params.includes(BETA_APP_QUERY_PARAMS.LLM_MODEL_ID)) {
					const query = params.replace(modelId, id);
					router.push(`${pathname}?${query}`);
				} else {
					router.push(`${pathname}?${params ? params + "&" : ""}${BETA_APP_QUERY_PARAMS.LLM_MODEL_ID}=${id}`);
				}
			} catch (error) {
				console.log(error.message);
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [partnerId]);

	const onClickHandler = (e, item) => {
		e.preventDefault();

		const el = document.querySelector("#modal_dropdown");
		el?.removeAttribute("open");

		if(item.id === Base64.decode(modelId)) return;

		setTitle(item.title);

		const params = searchParams.toString();

		if (params.includes(BETA_APP_QUERY_PARAMS.LLM_MODEL_ID)) {
			const query = params.replace(modelId, Base64.encodeURI(item.id));
			router.push(`${pathname}?${query}`);
		} else {
			router.push(
				`${pathname}?${params ? params + "&" : ""}${BETA_APP_QUERY_PARAMS.LLM_MODEL_ID}=${Base64.encodeURI(item.id)}`
			);
		}

		deleteCookie(COOKIE_NAME.CHAT);
	};

	const renderDropdown = () => {
		return dataLength ? (
			<ul className='menu dropdown-content z-[1] w-max rounded-lg bg-[#131313] p-2.5 shadow'>
				{modelsData().map((item) => (
					<button
						key={item.id}
						onClick={(e) => onClickHandler(e, item)}
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className={`font-gm w-full text-left rounded-md p-[0.813rem] text-[1.125rem] font-[700] uppercase leading-[1.35rem] tracking-[-0.03em] ${modelId === Base64.encodeURI(item.id) ? "bg-[#F8FDFF] text-[#010001] hover:bg-[#F8FDFF]/[0.88]" : "text-[#F8FDFF]/[0.5]  hover:bg-[#F8FDFF]/[0.12]"}`}>
						{item.title}
					</button>
				))}
			</ul>
		) : null;
	};

	const renderTitle = () => {
		return (
			<summary
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-gm btn mb-2 flex h-max min-w-[16.063rem] gap-4 justify-between bg-[#131313] px-2.5 py-[1.125rem] text-[1.125rem] font-[700] uppercase leading-[1.35rem] tracking-[-0.03em] text-[#F8FDFF] hover:bg-[#131313]/[0.05]'>
				<div>{title}</div>
				<div className='relative w-3.5'>
					<Image
						src={arrow}
						alt='arrow'
						className='rotate-180'
					/>
				</div>
			</summary>
		);
	};

	return (
		<div
			className={`sticky inset-x-0 top-0 z-10  flex items-center bg-[#010001] p-3.5 ${dataLength > 1 ? "border-b border-[#F8FDFF]/[0.15]" : "min-[1081px]:hidden border-b border-[#F8FDFF]/[0.15]"}`}>
			<Menu toggleComponentVisibility={toggleComponentVisibility} />
			{dataLength > 1 ? (
				<details
					id='modal_dropdown'
					className='dropdown m-3.5'>
					{renderTitle()}
					{renderDropdown()}
				</details>
			) : null}
		</div>
	);
};

Header.propTypes = {
	toggleComponentVisibility: PropTypes.func,
};

Menu.propTypes = {
	toggleComponentVisibility: PropTypes.func,
};

export default Header;
