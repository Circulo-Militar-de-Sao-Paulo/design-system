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
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
		/* Focus Visible */
		"data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring ",
		/* Resets */
		"focus-visible:outline-none",
		/* Pressed */
		"data-[pressed]:transform data-[pressed]:scale-95",
	],
	{
		variants: {
			variant: {
				primary:
					"bg-primary text-primary-foreground shadow data-[hovered]:bg-primary/80",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm data-[hovered]:bg-secondary/80",
				tertiary:
					"bg-tertiary text-tertiary-foreground shadow-sm data-[hovered]:bg-tertiary/80",
				info: "bg-info text-info-foreground shadow-sm data-[hovered]:bg-info/80",
				success:
					"bg-success text-success-foreground shadow-sm data-[hovered]:bg-success/80",
				warning:
					"bg-warning text-warning-foreground shadow-sm data-[hovered]:bg-warning/80",
				error: "bg-error text-error-foreground shadow-sm data-[hovered]:bg-error/90",
				outline:
					"border border-input bg-background shadow-sm  data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",

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
	}
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
					})
				)
			)}
			{...props}
		/>
	);
};

export { Button, buttonVariants };
export type { ButtonProps };
