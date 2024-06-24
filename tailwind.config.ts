import type { Config } from "tailwindcss";
import openColorPreset from "@/open-color";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				background: "rgb(var(--background))",
				foreground: "rgb(var(--foreground))",

				primary: {
					DEFAULT: "rgb(var(--primary))",
					foreground: "rgb(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "rgb(var(--secondary))",
					foreground: "rgb(var(--secondary-foreground))",
				},
				accent: {
					DEFAULT: "rgb(var(--accent))",
					foreground: "rgb(var(--accent-foreground))",
				},
				muted: {
					DEFAULT: "rgb(var(--muted))",
					foreground: "rgb(var(--muted-foreground))",
				},

				destructive: {
					DEFAULT: "rgb(var(--destructive))",
					foreground: "rgb(var(--destructive-foreground))",
				},
				info: {
					DEFAULT: "rgb(var(--info))",
					foreground: "rgb(var(--info-foreground))",
				},
				success: {
					DEFAULT: "rgb(var(--success))",
					foreground: "rgb(var(--success-foreground))",
				},
				warning: {
					DEFAULT: "rgb(var(--warning))",
					foreground: "rgb(var(--warning-foreground))",
				},

				popover: {
					DEFAULT: "rgb(var(--popover))",
					foreground: "rgb(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "rgb(var(--card))",
					foreground: "rgb(var(--card-foreground))",
				},

				border: "rgb(var(--border))",
				input: "rgb(var(--input))",
				ring: "rgb(var(--ring))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
	presets: [openColorPreset],
} satisfies Config;

export default config;
