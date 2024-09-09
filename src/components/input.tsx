import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	description?: string;
	message?: string;
	messageType?: "error" | "warning" | "success";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type,
			label,
			description,
			message,
			messageType = "error",
			...props
		},
		ref,
	) => {
		return (
			<div className="flex flex-col gap-1">
				{label && <Label htmlFor={label}>{label}</Label>}

				{description && (
					<span className="text-sm text-muted-foreground">
						{description}
					</span>
				)}

				<input
					id={label}
					type={type}
					className={cn(
						"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
						message &&
							messageType === "error" &&
							"border-destructive",
						message &&
							messageType === "warning" &&
							"border-warning",
						message &&
							messageType === "success" &&
							"border-success",
						className,
					)}
					ref={ref}
					{...props}
				/>

				{message && (
					<span
						className={cn(
							"text-xs",
							message &&
								messageType === "error" &&
								"text-destructive",
							message &&
								messageType === "warning" &&
								"text-warning",
							message &&
								messageType === "success" &&
								"text-success",
						)}
					>
						{message}
					</span>
				)}
			</div>
		);
	},
);
Input.displayName = "Input";

export { Input };
