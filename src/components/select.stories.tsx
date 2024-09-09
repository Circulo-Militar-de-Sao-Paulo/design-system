import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./select";

const meta: Meta<typeof Select> = {
	component: Select,
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	args: {
		dialogTitle: "Padrão",
		dialogDescription: "Selecione uma opção abaixo",
		items: [{ name: "Opa", fields: [] }],
	},
};

export const WithLabel: Story = {
	args: {
		label: "Senha",
		placeholder: "Insira sua senha",
		dialogTitle: "Padrão",
	},
};

export const WithDescription: Story = {
	args: {
		label: "Matrícula",
		description: "A matrícula só pode conter números",
		placeholder: "Insira sua matrícula",
	},
};

export const Disabled: Story = {
	args: {
		label: "Nome",
		placeholder: "Insira seu nome",
		disabled: true,
	},
};

export const WithErrorMessage: Story = {
	args: {
		label: "Email",
		placeholder: "Insira seu email",
		message: "Email inválido",
		messageType: "error",
	},
};

export const WithWarningMessage: Story = {
	args: {
		label: "Email",
		placeholder: "Insira seu email",
		message: "Email não confirmado",
		messageType: "warning",
	},
};

export const WithSuccessMessage: Story = {
	args: {
		label: "Email",
		placeholder: "Insira seu email",
		message: "Email confirmado",
		messageType: "success",
	},
};

export default meta;
