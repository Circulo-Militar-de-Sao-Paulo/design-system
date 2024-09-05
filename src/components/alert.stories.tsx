import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertDescription, AlertTitle } from "./alert";
import { IconAlertCircle, IconRocket } from "./icons";

const meta: Meta<typeof Alert> = {
	component: Alert,
};

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
	render: () => (
		<Alert>
			<IconRocket />
			<AlertTitle>Default</AlertTitle>
			<AlertDescription>Alert description</AlertDescription>
		</Alert>
	),
};

export const Destructive: Story = {
	render: () => (
		<Alert variant="destructive">
			<IconAlertCircle />
			<AlertTitle>Destructive</AlertTitle>
			<AlertDescription>Alert description</AlertDescription>
		</Alert>
	),
};

export default meta;
