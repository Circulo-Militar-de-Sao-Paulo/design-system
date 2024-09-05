import type { Meta, StoryObj } from "@storybook/react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogTitle,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger,
} from "./alert-dialog";
import { Button } from "./Button";

/**
 * AlertDialog é um modal de alerta que previne o usuário de interagir com o restante da aplicação
 * até que ele tome uma ação, que pode ser confirmá-la ou cancelá-la
 */
const meta: Meta<typeof AlertDialog> = {
	component: AlertDialog,
};

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
	render: () => (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button>Open alert dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Título do alerta</AlertDialogTitle>
					<AlertDialogDescription>
						Tem certeza de que deseja continuar?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction>Sim!</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
};

export default meta;
