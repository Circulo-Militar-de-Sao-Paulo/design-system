import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "./aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
	component: AspectRatio,
};

type Story = StoryObj<typeof AspectRatio>;

export const TresPorQuatro: Story = {
	name: "3/4",
	render: () => (
		<div className="w-48">
			<AspectRatio ratio={3 / 4}>
				<img
					src="/clube.jpg"
					className="w-full h-full rounded object-cover"
				/>
			</AspectRatio>
		</div>
	),
};

export const DezesseisPorNove: Story = {
	name: "16/9",
	render: () => (
		<div className="w-96">
			<AspectRatio ratio={16 / 9}>
				<img
					src="/clube.jpg"
					className="w-full h-full rounded object-cover"
				/>
			</AspectRatio>
		</div>
	),
};

export default meta;
