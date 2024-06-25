import { CustomTheme } from "./types";
import colors from "./colors";

export default [
	{
		name: "light",
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
					DEFAULT: colors.gray[100],
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
	},

	{
		name: "dark",
		extend: {
			colors: {
				base: {
					100: colors.gray[900],
					200: colors.gray[800],
					300: colors.gray[700],
					400: colors.gray[600],
					content: colors.gray[100],
				},
				primary: {
					DEFAULT: colors.indigo[300],
					content: colors.white,
				},
				secondary: {
					DEFAULT: colors.yellow[300],
					content: colors.black,
				},
				accent: {
					DEFAULT: colors.emerald[300],
					content: colors.white,
				},
				neutral: {
					DEFAULT: colors.gray[800],
					content: colors.gray[100],
				},
				success: {
					DEFAULT: colors.green[300],
					content: colors.white,
				},
				info: {
					DEFAULT: colors.blue[300],
					content: colors.white,
				},
				warning: {
					DEFAULT: colors.yellow[300],
					content: colors.black,
				},
				error: {
					DEFAULT: colors.red[300],
					content: colors.white,
				},
			},
		},
	},
] satisfies CustomTheme[];
