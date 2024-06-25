import type { Config } from "tailwindcss";
import { designPreset } from "./src/themes/preset";

const config = {
	content: ["./src/**/*.{ts,tsx}"],

	presets: [designPreset],
} satisfies Config;

export default config;
