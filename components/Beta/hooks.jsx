"use client";

import { setCookie, deleteCookie } from "cookies-next";
import { Base64 } from "js-base64";
import { useSearchParams, useRouter } from "next/navigation";

import { BETA_APP_QUERY_PARAMS, COOKIE_NAME } from "@constants";

export const useConnect = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const partner = searchParams.get(BETA_APP_QUERY_PARAMS.LLM_PARTNER_ID) || "";

	return (data) => {
		let walletAddress = data.address;

		(async () => {
			const nonceResponse = await fetch(`/api/user/nonce/${walletAddress}`);
			const nonce = await nonceResponse.json();

			let sign = await window.ethereum.request({
				method: "personal_sign",
				params: [nonce.nonce, walletAddress],
			});

			setCookie(COOKIE_NAME.TOKEN, `${walletAddress}+${sign}`);

			// authenticate using signed message as bearer token
			await fetch(`/api/user/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ walletAddress, sign }),
			});

			const partnersResponse = await fetch(`/api/partners/active`, {
				method: "GET",
			});
			const partners = await partnersResponse.json();

			setCookie(COOKIE_NAME.PARTNERS, JSON.stringify(partners));

			const partnerIds = partners.map((item) => Base64.encodeURI(item.partnerId));

			const params = searchParams.toString().replace(`${BETA_APP_QUERY_PARAMS.CONNECT_WALLET}=true`, "");

			if (params.includes(BETA_APP_QUERY_PARAMS.LLM_PARTNER_ID)) {
				if (!partnerIds.includes(partner)) {
					router.replace(
						"?" +
							params.replace(
								`${BETA_APP_QUERY_PARAMS.LLM_PARTNER_ID}=${partner}`,
								`${BETA_APP_QUERY_PARAMS.LLM_PARTNER_ID}=${partnerIds[0]}`
							)
					);
				}
			} else {
				router.replace(
					`?${params ? params + "&" : ""}${BETA_APP_QUERY_PARAMS.LLM_PARTNER_ID}=${partnerIds[0]}`
				);
			}
		})();
	};
};

export const useDisconnect = () => {
	const router = useRouter();

	return () => {
		(async () => {
			await fetch(`/api/user/logout`, {
				method: "POST",
			});

			deleteCookie(COOKIE_NAME.TOKEN);
			deleteCookie(COOKIE_NAME.PARTNERS);
			deleteCookie(COOKIE_NAME.MODELS);
			deleteCookie(COOKIE_NAME.CHAT);

			router.replace("/beta");
		})();
	};
};
