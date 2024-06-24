import type { Config } from "tailwindcss";
import { designPreset } from "@/tailwind";

const config = {
	content: ["./src/**/*.{ts,tsx}"],

	presets: [designPreset],
} satisfies Config;

export default config;
