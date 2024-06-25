import { ThemeConfig } from "tailwindcss-themer/lib/utils/optionsUtils";

export type CustomTheme = ThemeConfig & {
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

export type ThemeName = "light" | "dark";
