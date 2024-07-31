"use client";

import { Base64 } from "js-base64";
import PropTypes from "prop-types";
import { getCookie, deleteCookie } from "cookies-next";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { BETA_APP_QUERY_PARAMS, COOKIE_NAME, SidepanelActions } from "@constants";
import { MonaiLogo, HeuristLogo } from "@components/Icons";

import SidepanelHeader from "./header.jsx";
import SidepanelButton from "./button.jsx";
import SidepanelAction from "./action.jsx";

const Sidepanel = ({ disconnected }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const partnerId = searchParams.get(BETA_APP_QUERY_PARAMS.LLM_PARTNER_ID) ?? "";

	const { open } = useWeb3Modal();

	const getIcon = (title) => {
		if (title === "heurist") {
			return HeuristLogo;
		} else {
			return MonaiLogo;
		}
	};

	const partnersData = () => {
		const data = getCookie(COOKIE_NAME.PARTNERS);

		if (!data) {
			return [];
		}

		const partners = JSON.parse(data);

		return partners.map((item) => ({ id: item.partnerId, title: item.name, icon: getIcon(item.name) }));
	};

	const accountAction = () => {
		if (disconnected) {
			const params = searchParams.toString();

			router.replace(`?${params ? params + "&" : ""}${BETA_APP_QUERY_PARAMS.CONNECT_WALLET}=true`);
		} else {
			open();
		}
	};

	const onParnterSelect = (id) => {
		const el = document.querySelector("#modal_dropdown");
		el?.removeAttribute("open");

		if (id === Base64.decode(partnerId)) return;

		router.replace(`${pathname}?${BETA_APP_QUERY_PARAMS.LLM_PARTNER_ID}=${Base64.encodeURI(id)}`);

		deleteCookie(COOKIE_NAME.CHAT);
	};

	const onActionClicked = (e, item) => {
		e.preventDefault();
		item.handleOnClick(e);

		const el = document.querySelector("#modal_dropdown");
		el?.removeAttribute("open");
	};

	const data = partnersData()

	return (
		// eslint-disable-next-line tailwindcss/no-custom-classname
		<div className='scrollbar-trigger flex size-full flex-1 items-start border-r border-[#F8FDFF]/[0.15] bg-[#010001] p-0 uppercase'>
			<nav className='flex h-full flex-1 flex-col justify-between space-y-1'>
				<div className='flex flex-col gap-[4.484rem] overflow-hidden border-b border-[#F8FDFF]/[0.15] pb-[0.393rem] pt-[2.375rem]'>
					<SidepanelHeader />
					<div className='flex flex-col gap-1 overflow-y-auto px-3.5'>
						{data?.length > 0 && <div className="pb-5">
							<h4 className="font-gm text-[1rem] uppercase leading-5 tracking-[-0.01em] text-[#F8FDFF]/[0.5]">
								Model Providers
							</h4>
						</div>}
						{data.map((item) => {
							return (
								<SidepanelButton
									key={item.id}
									{...item}
									handleOnClick={(e) => onParnterSelect(item.id)}
									active={Base64.decode(partnerId)}
								/>
							);
						})}
					</div>
				</div>
				<div className='flex flex-col gap-1 overflow-y-auto border-t border-[#F8FDFF]/[0.15] px-3.5 pb-6 pt-[1.563rem]'>
					{SidepanelActions(accountAction).map((item) => {
						return (
							<SidepanelAction
								key={item.id}
								{...item}
								handleOnClick={(e) => onActionClicked(e, item)}
							/>
						);
					})}
				</div>
			</nav>
		</div>
	);
};

Sidepanel.propTypes = {
	disconnected: PropTypes.bool,
};

export { default as MobileSidepanel } from "./Mobile.jsx";
export default Sidepanel;
