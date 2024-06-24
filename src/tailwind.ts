import { Config } from "tailwindcss";
import tailwindThemer from "tailwindcss-themer";
import tailwindAnimate from "tailwindcss-animate";
import {
	DefaultThemeConfig,
	ThemeConfig,
} from "tailwindcss-themer/lib/utils/optionsUtils";

/**
 * Open Color (v1.9.1)
 *
 * @see https://yeun.github.io/open-color
 */
const openColor = {
	white: "#ffffff",
	black: "#000000",
	gray: {
		50: "#f8f9fa",
		100: "#f1f3f5",
		200: "#e9ecef",
		300: "#dee2e6",
		400: "#ced4da",
		500: "#adb5bd",
		600: "#868e96",
		700: "#495057",
		800: "#343a40",
		900: "#212529",
	},
	red: {
		50: "#fff5f5",
		100: "#ffe3e3",
		200: "#ffc9c9",
		300: "#ffa8a8",
		400: "#ff8787",
		500: "#ff6b6b",
		600: "#fa5252",
		700: "#f03e3e",
		800: "#e03131",
		900: "#c92a2a",
	},
	pink: {
		50: "#fff0f6",
		100: "#ffdeeb",
		200: "#fcc2d7",
		300: "#faa2c1",
		400: "#f783ac",
		500: "#f06595",
		600: "#e64980",
		700: "#d6336c",
		800: "#c2255c",
		900: "#a61e4d",
	},
	grape: {
		50: "#f8f0fc",
		100: "#f3d9fa",
		200: "#eebefa",
		300: "#e599f7",
		400: "#da77f2",
		500: "#cc5de8",
		600: "#be4bdb",
		700: "#ae3ec9",
		800: "#9c36b5",
		900: "#862e9c",
	},
	violet: {
		50: "#f3f0ff",
		100: "#e5dbff",
		200: "#d0bfff",
		300: "#b197fc",
		400: "#9775fa",
		500: "#845ef7",
		600: "#7950f2",
		700: "#7048e8",
		800: "#6741d9",
		900: "#5f3dc4",
	},
	indigo: {
		50: "#edf2ff",
		100: "#dbe4ff",
		200: "#bac8ff",
		300: "#91a7ff",
		400: "#748ffc",
		500: "#5c7cfa",
		600: "#4c6ef5",
		700: "#4263eb",
		800: "#3b5bdb",
		900: "#364fc7",
	},
	blue: {
		50: "#e7f5ff",
		100: "#d0ebff",
		200: "#a5d8ff",
		300: "#74c0fc",
		400: "#4dabf7",
		500: "#339af0",
		600: "#228be6",
		700: "#1c7ed6",
		800: "#1971c2",
		900: "#1864ab",
	},
	cyan: {
		50: "#e3fafc",
		100: "#c5f6fa",
		200: "#99e9f2",
		300: "#66d9e8",
		400: "#3bc9db",
		500: "#22b8cf",
		600: "#15aabf",
		700: "#1098ad",
		800: "#0c8599",
		900: "#0b7285",
	},
	teal: {
		50: "#e6fcf5",
		100: "#c3fae8",
		200: "#96f2d7",
		300: "#63e6be",
		400: "#38d9a9",
		500: "#20c997",
		600: "#12b886",
		700: "#0ca678",
		800: "#099268",
		900: "#087f5b",
	},
	green: {
		50: "#ebfbee",
		100: "#d3f9d8",
		200: "#b2f2bb",
		300: "#8ce99a",
		400: "#69db7c",
		500: "#51cf66",
		600: "#40c057",
		700: "#37b24d",
		800: "#2f9e44",
		900: "#2b8a3e",
	},
	lime: {
		50: "#f4fce3",
		100: "#e9fac8",
		200: "#d8f5a2",
		300: "#c0eb75",
		400: "#a9e34b",
		500: "#94d82d",
		600: "#82c91e",
		700: "#74b816",
		800: "#66a80f",
		900: "#5c940d",
	},
	yellow: {
		50: "#fff9db",
		100: "#fff3bf",
		200: "#ffec99",
		300: "#ffe066",
		400: "#ffd43b",
		500: "#fcc419",
		600: "#fab005",
		700: "#f59f00",
		800: "#f08c00",
		900: "#e67700",
	},
	orange: {
		50: "#fff4e6",
		100: "#ffe8cc",
		200: "#ffd8a8",
		300: "#ffc078",
		400: "#ffa94d",
		500: "#ff922b",
		600: "#fd7e14",
		700: "#f76707",
		800: "#e8590c",
		900: "#d9480f",
	},
};

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
					100: openColor.gray[50],
					200: openColor.gray[100],
					300: openColor.gray[200],
					400: openColor.gray[300],
					content: openColor.gray[800],
				},
				primary: {
					DEFAULT: openColor.blue[500],
					content: openColor.white,
				},
				secondary: {
					DEFAULT: openColor.indigo[500],
					content: openColor.white,
				},
				accent: {
					DEFAULT: openColor.pink[500],
					content: openColor.white,
				},
				neutral: {
					DEFAULT: openColor.gray[400],
					content: openColor.gray[800],
				},
				success: {
					DEFAULT: openColor.green[500],
					content: openColor.white,
				},
				info: {
					DEFAULT: openColor.cyan[500],
					content: openColor.white,
				},
				warning: {
					DEFAULT: openColor.yellow[500],
					content: openColor.black,
				},
				error: {
					DEFAULT: openColor.red[500],
					content: openColor.white,
				},
			},
		},
	};

	export const dark: CustomTheme = {
		name: "dark",
		extend: {
			colors: {
				base: {
					100: openColor.gray[900],
					200: openColor.gray[800],
					300: openColor.gray[700],
					400: openColor.gray[600],
					content: openColor.gray[200],
				},
				primary: {
					DEFAULT: openColor.blue[300],
					content: openColor.white,
				},
				secondary: {
					DEFAULT: openColor.indigo[300],
					content: openColor.white,
				},
				accent: {
					DEFAULT: openColor.pink[300],
					content: openColor.white,
				},
				neutral: {
					DEFAULT: openColor.gray[500],
					content: openColor.gray[200],
				},
				success: {
					DEFAULT: openColor.green[300],
					content: openColor.white,
				},
				info: {
					DEFAULT: openColor.cyan[300],
					content: openColor.white,
				},
				warning: {
					DEFAULT: openColor.yellow[300],
					content: openColor.black,
				},
				error: {
					DEFAULT: openColor.red[300],
					content: openColor.white,
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
