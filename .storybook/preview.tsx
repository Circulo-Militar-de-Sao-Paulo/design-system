import "../src/index.css";

import { Title, Subtitle, Description, Stories } from "@storybook/blocks";
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
	},
};

export default preview;
