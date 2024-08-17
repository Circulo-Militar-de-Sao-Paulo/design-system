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
		<div className="absolute top-0 flex h-screen w-screen flex-col">
			{header && <header className="bg-red-500">{header}</header>}
			<div className="flex grow">
				{sidebarLeft && (
					<aside className="bg-blue-500">{sidebarLeft}</aside>
				)}
				<div className="flex grow flex-col">
					{subheader && <nav>{subheader}</nav>}
					<main className="grow bg-gray-300">{children}</main>
					{subfooter && <nav>{subfooter}</nav>}
				</div>
				{sidebarRight && (
					<aside className="bg-blue-500">{sidebarRight}</aside>
				)}
			</div>
			{footer && <footer className="bg-green-500">{footer}</footer>}
		</div>
	);
}
