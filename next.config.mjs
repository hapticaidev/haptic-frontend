/** @type {import('next').NextConfig} */
import withPlugins from "next-compose-plugins";

import withTM from "next-transpile-modules";

import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ["three"],
	devIndicators: {
		buildActivityPosition: "bottom-right",
	},
	compiler: {
		removeConsole: process.env.NODE_ENV !== "development",
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
		if (!isServer) {
			// We're in the browser build, so we can safely exclude the sharp module
			config.externals.push("sharp");
		}

		// video support
		config.module.rules.push({
			test: /\.(mp4|mov|avi)$/, // Add other file extensions if needed
			exclude: /node_modules/,
			use: [
				{
					loader: "file-loader",
					options: {
						publicPath: `/_next/static/videos/`,
						outputPath: "static/videos/",
						name: "[name].[hash].[ext]",
					},
				},
			],
		});

		// // audio support
		config.module.rules.push({
			test: /\.(ogg|mp3|wav|mpe?g)$/i,
			exclude: /node_modules/,
			use: [
				{
					loader: "url-loader",
					options: {
						limit: config.inlineImageLimit,
						fallback: "file-loader",
						publicPath: `/_next/static/images/`,
						outputPath: `static/images/`,
						name: "[name]-[hash].[ext]",
					},
				},
			],
		});

		// // shader support
		config.module.rules.push({
			test: /\.(glsl|vs|fs|vert|frag)$/,
			exclude: /node_modules/,
			use: ["raw-loader", "glslify-loader"],
		});

		config.module.rules.push({
			test: /\.(glb|gltf)$/,
			exclude: /node_modules/,
			use: [
				{
					loader: "file-loader",
					options: {
						publicPath: `/_next/static/models/`,
						outputPath: `static/models/`,
						name: process.env.NODE_ENV === "development" ? "[name].[ext]" : "[name]-[hash].[ext]",
					},
				},
			],
		});

		// WalletConnect Web3Modal
		config.externals.push("pino-pretty", "lokijs", "encoding");

		// Important: return the modified config
		return config;
	},
};

const Config = withPlugins(
	[
		[withTM, ["gsap"]],
		[withBundleAnalyzer, { enabled: process.env.ANALYZE === "true" }],
	],
	nextConfig
);

export default Config;
