import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertTitle, AlertDescription } from "@/components/alert";
import {
	CircleCheckBig,
	CircleX,
	InfoIcon,
	Settings,
	TriangleAlert,
} from "lucide-react";

const meta: Meta<typeof Alert> = {
	component: Alert,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
	render: () => (
		<Alert>
			<Settings size={20} />
			<AlertTitle>Neutro</AlertTitle>
			<AlertDescription>Esse é um alerta neutro</AlertDescription>
		</Alert>
	),
};

export const Info: Story = {
	render: () => (
		<Alert variant="info">
			<InfoIcon size={20} />
			<AlertTitle>Info</AlertTitle>
			<AlertDescription>Esse é um alerta de informação</AlertDescription>
		</Alert>
	),
};

export const Success: Story = {
	render: () => (
		<Alert variant="success">
			<CircleCheckBig size={20} />
			<AlertTitle>Successo</AlertTitle>
			<AlertDescription>Esse é um alerta de sucesso</AlertDescription>
		</Alert>
	),
};

export const Warning: Story = {
	render: () => (
		<Alert variant="warning">
			<TriangleAlert size={20} />
			<AlertTitle>Aviso</AlertTitle>
			<AlertDescription>Esse é um alerta de aviso</AlertDescription>
		</Alert>
	),
};

export const Error: Story = {
	render: () => (
		<Alert variant="error">
			<CircleX size={20} />
			<AlertTitle>Erro</AlertTitle>
			<AlertDescription>Esse é um alerta de erro</AlertDescription>
		</Alert>
	),
};
