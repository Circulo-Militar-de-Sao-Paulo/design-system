import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";

const meta: Meta<typeof Input> = {
	component: Input,
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithLabel: Story = {
	args: {
		type: "password",
		label: "Senha",
		placeholder: "Insira sua senha",
	},
};

export const WithDescription: Story = {
	args: {
		label: "Matrícula",
		description: "A matrícula só pode conter números",
		placeholder: "Insira sua matrícula",
	},
};

export const WithErrorMessage: Story = {
	args: {
		label: "Email",
		placeholder: "Insira seu email",
		value: "email@invalido",
		message: "Email inválido",
		messageType: "error",
	},
};

export const WithWarningMessage: Story = {
	args: {
		label: "Email",
		placeholder: "Insira seu email",
		value: "email@nao-confirmado.com",
		message: "Email não confirmado",
		messageType: "warning",
	},
};

export const WithSuccessMessage: Story = {
	args: {
		label: "Email",
		placeholder: "Insira seu email",
		value: "email@valido.com",
		message: "Email confirmado",
		messageType: "success",
	},
};

export default meta;
