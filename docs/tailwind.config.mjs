import { tailwindConfig } from "@cmsp/design-system";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		tailwindConfig.content,
	],
	theme: {
		extend: {},
	},
	plugins: [tailwindConfig.plugin],
};
