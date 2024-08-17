import React from "react";

export type ShellProps = {
	header?: React.ReactNode;
	subheader?: React.ReactNode;
	footer?: React.ReactNode;
	subfooter?: React.ReactNode;
	sidebarLeft?: React.ReactNode;
	sidebarRight?: React.ReactNode;
	children: React.ReactNode;
};

export function Shell({
	header,
	subheader,
	footer,
	subfooter,
	sidebarLeft,
	sidebarRight,
	children,
}: ShellProps) {
	return (
		<div className="flex h-screen w-screen flex-col">
			{header && <header className="border-b p-4">{header}</header>}

			<div className="flex grow overflow-auto">
				{sidebarLeft && (
					<aside className="w-64 shrink-0 overflow-y-auto border-r p-2">
						{sidebarLeft}
					</aside>
				)}

				<div className="flex grow flex-col overflow-auto">
					{subheader && (
						<nav className="border-b p-3">{subheader}</nav>
					)}

					<main className="grow overflow-auto">{children}</main>

					{subfooter && (
						<nav className="border-t p-3">{subfooter}</nav>
					)}
				</div>

				{sidebarRight && (
					<aside className="overflow-y-auto border-l p-2">
						{sidebarRight}
					</aside>
				)}
			</div>

			{footer && <footer className="border-t p-4">{footer}</footer>}
		</div>
	);
}
