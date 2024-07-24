import Rabby from "@icons/rabby.svg";
import MetaMask from "@icons/metaMask.svg";

import chasm from "@icons/landing/chasm-logo.svg";
import monai from "@icons/landing/monai-logo.svg";
import heurist from "@icons/landing/heurist-logo.svg";
import logoMark from "@icons/landing/haptic-logomark.svg";
import HapticWordMark from "@icons/landing/haptic-wordmark.svg";
import HapticWordMarkBlack from "@icons/landing/haptic-wordmark-black.svg";

import plugAndPlay from "@gifs/plug_and_play.gif";
import modular from "@gifs/modular.gif";
import robust from "@gifs/robust.gif";

import disconnect from "@icons/disconnect.svg";

export const BASE_URL = "http://haptic-core-stg.ap-southeast-1.elasticbeanstalk.com";

export const BETA_APP_QUERY_PARAMS = {
	LLM_PARTNER_ID: "partner",
	LLM_MODEL_ID: "model",
	CONVERSATION_TEMPLATE: "template",
	CONNECT_WALLET: "connect",
};

export const MESSAGE_ROLES = {
	USER: "user",
	SYSTEM: "system",
};

export const COOKIE_NAME = {
	TOKEN: "token",
	PARTNERS: "partners",
	MODELS: "models",
	CHAT: "chat",
};

export const SidepanelActions = (accountAction) => [
	{
		id: "1",
		title: "Account",
		icon: disconnect,
		handleOnClick: accountAction,
	},
];

// ASK MONAI SUGGESTION CARDS
export const SuggestionCardsData = [
	"Suggest high-volume keyword clusters for [topic] to optimize search engine rankings.",
	"Suggest [number] ways to improve website traffic during [holiday season].",
	"Suggest new strategies for lead generation in web 3",
	"Create a LinkedIn post promoting a new job opening ",
];

// WALLETE DETAILS
export const WalletData = [
	{
		walletName: "MetaMask",
		walletIcon: MetaMask,
	},
	{
		walletName: "Rabby",
		walletIcon: Rabby,
	},
];

// FEEDBACK FORM ALL TAGS
export const FeedbackTagsData = ["Offensive", "Incorrect", "Tag 1", "Tag 2", "Tag 3"];

// LANDING PAGE NAVBAR DATA
export const HeaderData = [
	{
		id: 0,
		label: "docs",
		link: "https://hapticai.gitbook.io/hapticai",
		class: "docs",
	},
	{
		id: 1,
		label: "twitter",
		link: "https://x.com/Haptic_AI",
		class: "twitter",
	},
	{
		id: 2,
		logo: HapticWordMark,
		link: "/",
	},
	{
		id: 3,
		label: "telegram",
		link: "https://t.me/+PuGP8s7oG58zMjA1",
		class: "telegram",
	},
	{
		id: 4,
		label: "open beta",
		link: "/beta",
		button: true,
	},
];

export const SocialsData = [
	{
		id: 0,
		label: "email",
		link: "mailto:dev@hapticai.dev",
		class: "email",
	},
	{
		id: 1,
		label: "telegram",
		link: "https://t.me/+PuGP8s7oG58zMjA1",
		class: "telegram",
	},
	{
		id: 2,
		label: "twitter",
		link: "https://x.com/Haptic_AI",
		class: "twitter",
	},
	{
		id: 3,
		label: "Medium",
		link: "https://hapticai.gitbook.io/hapticai",
		class: "medium",
	},
];

export const HeaderMobileData = {
	id: 0,
	logo: HapticWordMark,
	menu: HapticWordMarkBlack,
	link: "/",
	links: [
		{
			id: 0,
			label: "docs",
			link: "https://hapticai.gitbook.io/hapticai",
		},
		{
			id: 2,
			label: "open beta",
			link: "/beta",
		},
	],
	socialTitle: "socials",
	socials: SocialsData,
};

// LANDING PAGE FOOTER DATA
export const FooterData = {
	title: `don’t be a`,
	secondLine: "stranger",
	subtitle:
		"Do you have a question or just want to say hi? we are here to help. Please leave your details, and we will get back to you shortly",
	natureTags: ["product feedback", "commercials", "partnership", "other"],
	links: SocialsData,
};

// HERO BANNER DATA
export const HeroBannerData = {
	id: 0,
	title: "make your <br/> ai a mean <br/> Machine",
	desc: "With our human reinforcement network, your AI becomes more than just a tool—it becomes a self-improving system, constantly refining itself based on real-world feedback.",
	button1Label: "try the beta",
	button1Link: "/beta",
	button2Label: "learn more",
	button2Link: "https://hapticai.gitbook.io/hapticai",
};

// SCROLL FILLING TEXT
export const scrollFillTextData = {
	id: 0,
	first: "your feedback is vital to",
	second: "our ecosystem. earn token",
	third: "rewards by offering",
	fourth: "insights to shape the",
	fifth: "future of AI.",
	titleCombine:
		"your feedback is vital to our ecosystem. earn token rewards by offering insights to shape the future of AI.",
};

// TOOLKIT DATA
export const toolkitData = {
	id: 0,
	title: "The Haptic Toolkit",
	cards: [
		{
			id: "1",
			title: "plug & play",
			description:
				"Infrastructure to generate task specific RLHF data to fine tune LLMs for specifics domains/tasks.",
			color: "#1A1A1A",
			textColor: "#F8FDFF",
			asset: plugAndPlay,
		},
		{
			id: "2",
			title: "robust",
			description:
				"Integrity engine to score user feedback, ensuring data quality and powering a cryptoeconomic incentive mechanism.",
			color: "#FEF6EB",
			textColor: "#010001",
			asset: robust,
		},
		{
			id: "3",
			title: "modular",
			description: "input api that allows partner models to control the inputs that matter to them.",
			color: "#BDDCF5",
			textColor: "#010001",
			asset: modular,
		},
	],
};

// PARTNERS DATA
export const partenersData = {
	id: 0,
	title: "partnered with the best",
	partners: [monai, heurist, chasm],
	ctaLogo: logoMark,
	ctaLabel: "Try the beta",
	ctaHook: "Shape the future of AI model development",
};

export const DEFAULT_OPENAI_MODEL = {
	name: "Default (GPT-3.5)",
	id: "gpt-3.5-turbo",
	available: true,
};

export const GPT4_OPENAI_MODEL = {
	name: "GPT-4",
	id: "gpt-4",
	available: false,
};

export const OPENAI_MODELS = [DEFAULT_OPENAI_MODEL, GPT4_OPENAI_MODEL];
