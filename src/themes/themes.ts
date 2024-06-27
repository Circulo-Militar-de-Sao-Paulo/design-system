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
					300: colors.gray[150],
					400: colors.gray[200],
					content: colors.gray[950],
				},
				primary: {
					DEFAULT: colors.cmspPrimary[600],
					content: colors.cmspPrimary[100],
				},
				secondary: {
					DEFAULT: colors.cmspSecondary[400],
					content: colors.cmspSecondary[900],
				},
				accent: {
					DEFAULT: colors.cmspAccent[800],
					content: colors.cmspAccent[100],
				},
				neutral: {
					DEFAULT: colors.gray[150],
					content: colors.gray[900],
				},
				success: {
					DEFAULT: colors.green[650],
					content: colors.green[100],
				},
				info: {
					DEFAULT: colors.blue[650],
					content: colors.blue[100],
				},
				warning: {
					DEFAULT: colors.yellow[650],
					content: colors.yellow[100],
				},
				error: {
					DEFAULT: colors.red[650],
					content: colors.red[100],
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
					200: colors.gray[850],
					300: colors.gray[800],
					400: colors.gray[750],
					content: colors.gray[50],
				},
				primary: {
					DEFAULT: colors.cmspPrimary[600],
					content: colors.cmspPrimary[100],
				},
				secondary: {
					DEFAULT: colors.cmspSecondary[400],
					content: colors.cmspSecondary[900],
				},
				accent: {
					DEFAULT: colors.cmspAccent[800],
					content: colors.cmspAccent[100],
				},
				neutral: {
					DEFAULT: colors.gray[800],
					content: colors.gray[100],
				},
				success: {
					DEFAULT: colors.green[600],
					content: colors.green[50],
				},
				info: {
					DEFAULT: colors.blue[600],
					content: colors.blue[50],
				},
				warning: {
					DEFAULT: colors.yellow[600],
					content: colors.yellow[50],
				},
				error: {
					DEFAULT: colors.red[600],
					content: colors.red[50],
				},
			},
		},
	},
] satisfies CustomTheme[];
