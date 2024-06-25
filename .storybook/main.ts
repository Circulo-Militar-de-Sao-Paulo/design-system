import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: [
		"../src/stories/*.mdx",
		"../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@storybook/addon-themes",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	viteFinal: (config, { configType }) => {
		if (configType === "PRODUCTION") {
			config.base = "/design-system/";
		}
		return config;
	},
};
export default config;
