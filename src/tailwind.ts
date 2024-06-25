import { Config } from "tailwindcss";
import tailwindThemer from "tailwindcss-themer";
import tailwindAnimate from "tailwindcss-animate";
import {
	DefaultThemeConfig,
	ThemeConfig,
} from "tailwindcss-themer/lib/utils/optionsUtils";
import colors from "./colors";

type CustomTheme = ThemeConfig & {
	extend: {
		/**
		 *
		 * # Cores de background
		 *
		 * O base-100 é usado para o background da página, enquanto base-200, base-300 e base-400
		 * são usados para componentes acima de base-100 (como cards, modals, navbars, sidebars,
		 * dropdowns, popovers, etc.)
		 *
		 * # Cores semânticas
		 *
		 * Primary, secondary e accent devem seguir a regra de 60-30-10
		 *
		 * - primary: cor principal (60%)
		 * - secondary: cor secundária (30%)
		 * - accent: cor de destaque (10%)
		 * - neutral: cor para componentes desabilitados ou de baixa importância
		 *
		 * @see https://www.freecodecamp.org/news/the-60-30-10-rule-in-design
		 *
		 * # Cores de feedback
		 *
		 * Para feedbacks de sucesso, informação, aviso e erro (buttons, alerts, ...)
		 */
		colors: {
			// Cores de background

			base: {
				100: string;
				200: string;
				300: string;
				400: string;
				content: string;
			};

			// Cores semânticas

			primary: {
				DEFAULT: string;
				content: string;
			};
			secondary: {
				DEFAULT: string;
				content: string;
			};
			accent: {
				DEFAULT: string;
				content: string;
			};
			neutral: {
				DEFAULT: string;
				content: string;
			};

			// Cores de feedback

			success: {
				DEFAULT: string;
				content: string;
			};
			info: {
				DEFAULT: string;
				content: string;
			};
			warning: {
				DEFAULT: string;
				content: string;
			};
			error: {
				DEFAULT: string;
				content: string;
			};
		};
	};
};

/**
 * Defina aqui todos os temas customizados para o design system
 *
 * @see https://github.com/RyanClementsHax/tailwindcss-themer
 */
namespace Themes {
	// Tema padrão (light), caso nenhuma classe de tema seja aplicada
	export const defaultTheme: DefaultThemeConfig = {
		extend: {
			colors: {
				base: {
					100: colors.gray[50],
					200: colors.gray[100],
					300: colors.gray[200],
					400: colors.gray[300],
					content: colors.gray[900],
				},
				primary: {
					DEFAULT: colors.indigo[500],
					content: colors.white,
				},
				secondary: {
					DEFAULT: colors.yellow[500],
					content: colors.black,
				},
				accent: {
					DEFAULT: colors.emerald[700],
					content: colors.white,
				},
				neutral: {
					DEFAULT: colors.gray[50],
					content: colors.gray[900],
				},
				success: {
					DEFAULT: colors.green[700],
					content: colors.white,
				},
				info: {
					DEFAULT: colors.blue[600],
					content: colors.white,
				},
				warning: {
					DEFAULT: colors.yellow[500],
					content: colors.black,
				},
				error: {
					DEFAULT: colors.red[500],
					content: colors.white,
				},
			},
		},
	};
}

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
			defaultTheme: Themes.defaultTheme,
			themes: [],
		}),
	],
} satisfies Config;
