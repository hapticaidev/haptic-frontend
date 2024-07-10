import PropTypes from "prop-types";

import "./globals.scss";

export const metadata = {
	title: "Haptic AI",
	description: "MAKE YOUR AI A MEAN MACHINE",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}

RootLayout.propTypes = {
	children: PropTypes.node,
};
