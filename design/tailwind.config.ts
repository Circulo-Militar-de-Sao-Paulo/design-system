import { tailwindConfig } from "./lib/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["components/**/*.{ts,tsx}"],
	plugins: [tailwindConfig.plugin],
};
