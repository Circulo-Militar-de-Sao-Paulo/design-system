import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: [
		"../src/stories/*.mdx",
		"../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		{
			name: "@storybook/addon-essentials",
			options: {
				backgrounds: false,
			},
		},
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@storybook/addon-themes",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	core: {
		builder: "@storybook/builder-vite",
	},
};
export default config;
