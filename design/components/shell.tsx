import { cn } from "@/lib/utils";
import React from "react";

export type ShellProps = {
	header?: React.ReactNode;
	subheader?: React.ReactNode;
	footer?: React.ReactNode;
	subfooter?: React.ReactNode;
	sidebarLeft?: React.ReactNode;
	sidebarRight?: React.ReactNode;
	classNames?: {
		header?: string;
		subheader?: string;
		footer?: string;
		subfooter?: string;
		sidebarLeft?: string;
		sidebarRight?: string;
	};
	children: React.ReactNode;
};

export function Shell({
	header,
	subheader,
	footer,
	subfooter,
	sidebarLeft,
	sidebarRight,
	classNames,
	children,
}: ShellProps) {
	return (
		<div className="flex h-screen w-screen flex-col">
			{header && (
				<header
					className={cn(
						"bg-overlay text-overlay-foreground border-b p-4",
						classNames?.header,
					)}
				>
					{header}
				</header>
			)}

			<div className="flex grow overflow-auto">
				{sidebarLeft && (
					<aside
						className={cn(
							"bg-overlay text-overlay-foreground w-64 shrink-0 overflow-y-auto border-r p-2",
							classNames?.sidebarLeft,
						)}
					>
						{sidebarLeft}
					</aside>
				)}

				<div className="flex grow flex-col overflow-auto">
					{subheader && (
						<nav
							className={cn(
								"border-b p-3",
								classNames?.subheader,
							)}
						>
							{subheader}
						</nav>
					)}

					<main className="grow overflow-auto">{children}</main>

					{subfooter && (
						<nav
							className={cn(
								"border-t p-3",
								classNames?.subfooter,
							)}
						>
							{subfooter}
						</nav>
					)}
				</div>

				{sidebarRight && (
					<aside
						className={cn(
							"bg-overlay text-overlay-foreground w-64 shrink-0 overflow-y-auto border-l p-2",
							classNames?.sidebarRight,
						)}
					>
						{sidebarRight}
					</aside>
				)}
			</div>

			{footer && (
				<footer
					className={cn(
						"bg-overlay text-overlay-foreground border-t p-4",
						classNames?.footer,
					)}
				>
					{footer}
				</footer>
			)}
		</div>
	);
}
