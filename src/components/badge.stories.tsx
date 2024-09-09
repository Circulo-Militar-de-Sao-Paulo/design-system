import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
	component: Badge,
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	render: () => <Badge>Default</Badge>,
};

export const Secondary: Story = {
	render: () => <Badge variant="secondary">Secondary</Badge>,
};

export default meta;
