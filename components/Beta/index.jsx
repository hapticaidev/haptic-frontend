"use client";

import { getCookie } from "cookies-next";
import { Base64 } from "js-base64";
import { useCallback, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAccount, useAccountEffect } from "wagmi";

import { BETA_APP_QUERY_PARAMS, COOKIE_NAME } from "@constants";

import SplashScreen from "./Splash";
import Container from "./Container";
import { useConnect, useDisconnect } from "./hooks";

const BetaApp = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const { address, status, isConnected } = useAccount();

	const onConnect = useConnect();
	const onDisconnect = useDisconnect();

	useAccountEffect({
		onConnect,
		onDisconnect,
	});

	const loading = status === "connecting" || status === "reconnecting";

	const walletDisconnected = status !== "connected" || address === undefined;

	const params = searchParams.toString();

	const redirectTo = useCallback(
		(name, value) => {
			const sanitize = params.length ? `?${params}&${name}=${value}` : `?${name}=${value}`;

			const val = params.includes(name)
				? "?" + params.replace(`${name}=${searchParams.get(name)}`, `${name}=${value}`)
				: sanitize;

			router.replace(val);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	useEffect(() => {
		if (status !== "connecting" && status !== "reconnecting" && !isConnected) {
			if (walletDisconnected) {
        router.replace(`?${BETA_APP_QUERY_PARAMS.CONNECT_WALLET}=true`);
			}

			const partnerData = getCookie(COOKIE_NAME.PARTNERS) || "";

			if (partnerData) {
				const partner = JSON.parse(partnerData)?.partner?.[0]?.partnerId || "";
				const partnerId = Base64.encodeURI(partner);

				if (!partner) {
					redirectTo(BETA_APP_QUERY_PARAMS.LLM_PARTNER_ID, partnerId);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

  useEffect(() => {
		document.documentElement.style.overflow = "hidden";
		document.body.style.overflow = "hidden";

		return () => {
			document.documentElement.style.overflow = "";
			document.body.style.overflow = "";
		};
  }, []);


	return loading ? <SplashScreen /> : <Container disconnected={walletDisconnected} />;
};

export default BetaApp;
