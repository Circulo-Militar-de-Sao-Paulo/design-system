import "../src/index.css";

import { Description, Stories, Subtitle, Title } from "@storybook/blocks";
import type { Preview } from "@storybook/react";

const preview: Preview = {
	tags: ["autodocs"],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
					<Stories />
				</>
			),
		},
		backgrounds: {
			disable: true,
		},
	},
};

export default preview;
