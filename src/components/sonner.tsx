import { useTheme } from "next-themes";
import { Toaster } from "sonner";

type ToasterProps = React.ComponentProps<typeof Toaster>;

const Sooner = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();

	return (
		<Toaster
			theme={theme as ToasterProps["theme"]}
			className="toaster group"
			toastOptions={{
				classNames: {
					toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-content group-[.toaster]:border-border group-[.toaster]:shadow-lg",
					description: "group-[.toast]:text-muted-content",
					actionButton:
						"group-[.toast]:bg-primary group-[.toast]:text-primary-content",
					cancelButton:
						"group-[.toast]:bg-muted group-[.toast]:text-muted-content",
				},
			}}
			{...props}
		/>
	);
};

export { Sooner };
