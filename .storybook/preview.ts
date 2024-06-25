import type { Preview } from "@storybook/react";
import "../src/global.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { convertThemesToRecord } from "../src/tailwind";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		withThemeByClassName({
			themes: convertThemesToRecord(),
			defaultTheme: "light",
		}),
	],
};

export default preview;
