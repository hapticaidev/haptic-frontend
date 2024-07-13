import PropTypes from "prop-types";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.scss";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Haptic AI - Make Your AI A Mean Machine",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={pjs.className}>{children}</body>
		</html>
	);
}

RootLayout.propTypes = {
	children: PropTypes.node,
};
