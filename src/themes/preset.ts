import tailwindThemer from "tailwindcss-themer";
import tailwindAnimate from "tailwindcss-animate";
import themes from "./themes";
import { Config } from "tailwindcss";

/**
 * Configuração base do Tailwind CSS que deve ser usada como preset em projetos que utilizam este
 * design system
 *
 * @see https://tailwindcss.com/docs/presets
 */
export const designPreset = {
	content: [],

	// Configurações aplicadas a todos os temas customizados
	theme: {
		container: {
			center: true,
			padding: "2rem",
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

	plugins: [
		tailwindAnimate,
		tailwindThemer({
			themes,
		}),
	],
} satisfies Config;

export function convertThemesToRecord(): Record<string, string> {
	const r: Record<string, string> = {};

	for (const theme of themes) {
		r[theme.name] = theme.name;
	}

	return r;
}
