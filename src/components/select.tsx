import { cn } from "@/lib/utils";
import { IconSelector } from "@tabler/icons-react";
import { Label } from "./label";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./dialog";

export type SelectItem<N extends string> = {
	name: string;
	fields: {
		icon: React.ReactNode;
		name: N; // Usado também para mostrar o valor selecionado
		value: string;
	}[];
};

export type SelectProps<N extends string> = {
	label?: string;
	description?: string;
	placeholder?: string;
	message?: string;
	messageType?: "error" | "warning" | "success";
	disabled?: boolean;
	dialogTitle: string;
	dialogDescription?: string;
	items: SelectItem<N>[];
};

export function Select<N extends string>({
	label,
	description,
	placeholder,
	message,
	messageType = "error",
	disabled,
	dialogTitle,
	dialogDescription,
	items,
}: SelectProps<N>) {
	return (
		<div className="flex flex-col gap-1">
			{label && <Label htmlFor={label}>{label}</Label>}

			{description && (
				<span className="text-sm text-muted-foreground">
					{description}
				</span>
			)}

			<Dialog>
				<DialogTrigger asChild>
					<button
						disabled={disabled}
						className={cn(
							"relative flex justify-between items-center text-muted-foreground h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
							message &&
								messageType === "error" &&
								"border-destructive",
							message &&
								messageType === "warning" &&
								"border-warning",
							message &&
								messageType === "success" &&
								"border-success",
						)}
					>
						{placeholder && (
							<span className="text-muted-foreground">
								{placeholder}
							</span>
						)}

						<span className="absolute right-0">
							<IconSelector />
						</span>
					</button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{dialogTitle}</DialogTitle>
						{dialogDescription && (
							<DialogDescription>
								{dialogDescription}
							</DialogDescription>
						)}
					</DialogHeader>
				</DialogContent>
			</Dialog>

			{message && (
				<span
					className={cn(
						"text-xs",
						message &&
							messageType === "error" &&
							"text-destructive",
						message && messageType === "warning" && "text-warning",
						message && messageType === "success" && "text-success",
					)}
				>
					{message}
				</span>
			)}
		</div>
	);
}
