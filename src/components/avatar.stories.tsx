import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta: Meta<typeof Avatar> = {
	component: Avatar,
};

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	render: () => (
		<Avatar>
			<AvatarImage src="/logo.svg" />
			<AvatarFallback>CM</AvatarFallback>
		</Avatar>
	),
};

export const Fallback: Story = {
	render: () => (
		<Avatar>
			<AvatarImage src="/inexistente.png" />
			<AvatarFallback>CM</AvatarFallback>
		</Avatar>
	),
};

export default meta;
