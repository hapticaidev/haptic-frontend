/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	fontFamily: {
		PJS: ["Plus Jakarta Sans", "sans-serif"],
		PPF: ["PP Formula Extrabold"],
		GM: ["Geist Mono Semibold"],
		HND: ["Helvetica Now Display"],
	},
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				ssm: "500px",
			},
			fontSize: {
				"fs-sm": "clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)",
				"fs-base": "clamp(1rem, 0.34vi + 0.91rem, 1.19rem)",
				"fs-md": "clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)",
				"fs-lg": "clamp(1.56rem, 1vi + 1.31rem, 2.11rem)",
				"fs-xl": "clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem)",
				"fs-xxl": "clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem)",
				"fs-xxxl": "clamp(3.05rem, 3.54vi + 2.17rem, 5rem)",
			},
		},
	},
	plugins: [require("daisyui")],
};
