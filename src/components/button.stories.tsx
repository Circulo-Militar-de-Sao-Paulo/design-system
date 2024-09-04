import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: "Primary",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Ghost",
	},
};

export const Link: Story = {
	args: {
		variant: "link",
		children: "Ghost",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Ghost",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Ghost",
	},
};

export default meta;
