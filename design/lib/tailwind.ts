import animate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindPlugin from "tailwindcss/plugin";

export const tailwindConfig = {
	content: "./node_modules/@cmsp/design-system/dist/**/*.mjs",
	plugin: tailwindPlugin(function () {}, {
		darkMode: ["class"],
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
					border: "hsl(var(--border))",
					input: "hsl(var(--input))",
					ring: "hsl(var(--ring))",
					background: "hsl(var(--background))",
					foreground: "hsl(var(--foreground))",
					primary: {
						DEFAULT: "hsl(var(--primary))",
						foreground: "hsl(var(--primary-foreground))",
					},
					secondary: {
						DEFAULT: "hsl(var(--secondary))",
						foreground: "hsl(var(--secondary-foreground))",
					},
					tertiary: {
						DEFAULT: "hsl(var(--tertiary))",
						foreground: "hsl(var(--tertiary-foreground))",
					},
					info: {
						DEFAULT: "hsl(var(--info))",
						foreground: "hsl(var(--info-foreground))",
					},
					success: {
						DEFAULT: "hsl(var(--success))",
						foreground: "hsl(var(--success-foreground))",
					},
					warning: {
						DEFAULT: "hsl(var(--warning))",
						foreground: "hsl(var(--warning-foreground))",
					},
					error: {
						DEFAULT: "hsl(var(--error))",
						foreground: "hsl(var(--error-foreground))",
					},
					muted: {
						DEFAULT: "hsl(var(--muted))",
						foreground: "hsl(var(--muted-foreground))",
					},
					accent: {
						DEFAULT: "hsl(var(--accent))",
						foreground: "hsl(var(--accent-foreground))",
					},
					popover: {
						DEFAULT: "hsl(var(--popover))",
						foreground: "hsl(var(--popover-foreground))",
					},
					overlay: {
						DEFAULT: "hsl(var(--overlay))",
						foreground: "hsl(var(--overlay-foreground))",
					},
				},
				borderRadius: {
					lg: `var(--radius)`,
					md: `calc(var(--radius) - 2px)`,
					sm: "calc(var(--radius) - 4px)",
				},
				fontFamily: {
					sans: [...fontFamily.sans],
				},
				keyframes: {
					"accordion-down": {
						from: { height: "0" },
						to: {
							height: "var(--radix-accordion-content-height)",
						},
					},
					"accordion-up": {
						from: {
							height: "var(--radix-accordion-content-height)",
						},
						to: { height: "0" },
					},
				},
				animation: {
					"accordion-down": "accordion-down 0.2s ease-out",
					"accordion-up": "accordion-up 0.2s ease-out",
				},
			},
		},
		plugins: [animate],
	}),
};
