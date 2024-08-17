"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
	Button as AriaButton,
	composeRenderProps,
	type ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	[
		"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors",
		/* Disabled */
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		/* Focus Visible */
		"data-[focus-visible]:ring-ring data-[focus-visible]:outline-none data-[focus-visible]:ring-1",
		/* Resets */
		"focus-visible:outline-none",
		/* Pressed */
		"data-[pressed]:scale-95 data-[pressed]:transform",
	],
	{
		variants: {
			variant: {
				primary:
					"bg-primary text-primary-foreground data-[hovered]:bg-primary/80 shadow",
				secondary:
					"bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80 shadow-sm",
				tertiary:
					"bg-tertiary text-tertiary-foreground data-[hovered]:bg-tertiary/80 shadow-sm",
				info: "bg-info text-info-foreground data-[hovered]:bg-info/80 shadow-sm",
				success:
					"bg-success text-success-foreground data-[hovered]:bg-success/80 shadow-sm",
				warning:
					"bg-warning text-warning-foreground data-[hovered]:bg-warning/80 shadow-sm",
				error: "bg-error text-error-foreground data-[hovered]:bg-error/90 shadow-sm",
				outline:
					"border-input bg-background data-[hovered]:bg-accent data-[hovered]:text-accent-foreground border shadow-sm",

				ghost: "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
			},
			size: {
				sm: "h-8 rounded-md px-3 text-xs",
				md: "h-9 px-4 py-2",
				lg: "h-10 rounded-md px-8",
				xl: "h-12 rounded-md px-10",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

interface ButtonProps
	extends AriaButtonProps,
		VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
	return (
		<AriaButton
			className={composeRenderProps(className, (className) =>
				cn(
					buttonVariants({
						variant,
						size,
						className,
					}),
				),
			)}
			{...props}
		/>
	);
};

export { Button, buttonVariants };
export type { ButtonProps };
