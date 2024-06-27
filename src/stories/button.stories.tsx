import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";

const meta = {
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Primário",
	},
};

export const Secondary: Story = {
	args: {
		children: "Secundário",
		variant: "secondary",
	},
};

export const Accent: Story = {
	args: {
		children: "Acento",
		variant: "accent",
	},
};

export const Error: Story = {
	args: {
		children: "Erro",
		variant: "error",
	},
};

export const Info: Story = {
	args: {
		children: "Informação",
		variant: "info",
	},
};

export const Success: Story = {
	args: {
		children: "Sucesso",
		variant: "success",
	},
};

export const Warning: Story = {
	args: {
		children: "Aviso",
		variant: "warning",
	},
};

export const Ghost: Story = {
	args: {
		children: "Fantasma",
		variant: "ghost",
	},
};
