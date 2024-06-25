import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-0.5 transition duration-100 easy-in-out",
	{
		variants: {
			variant: {
				primary: "bg-primary text-primary-content hover:bg-primary/80",
				secondary:
					"bg-secondary text-secondary-content hover:bg-secondary/80",
				accent: "bg-accent text-accent-content hover:bg-accent/80",

				error: "bg-error text-error-content hover:bg-error/80",
				info: "bg-info text-info-content hover:bg-info/80",
				success: "bg-success text-success-content hover:bg-success/80",
				warning: "bg-warning text-warning-content hover:bg-warning/80",

				ghost: "hover:bg-neutral/70 hover:text-neutral-content",
			},
			size: {
				sm: "h-9 rounded-md px-3",
				md: "h-10 px-4 py-2",
				lg: "h-11 rounded-md px-8",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
