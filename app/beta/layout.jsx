import { headers } from "next/headers";
import PropTypes from "prop-types";
import { cookieToInitialState } from "wagmi";

import { config } from "@config";
import Web3ModalProvider from "@context";

export default function BetaLayout({ children }) {
	const initialState = cookieToInitialState(config, headers().get("cookie"));

	return (
		<Web3ModalProvider initialState={initialState}>
			{children}
		</Web3ModalProvider>
	);
}

BetaLayout.propTypes = {
	children: PropTypes.node,
};
