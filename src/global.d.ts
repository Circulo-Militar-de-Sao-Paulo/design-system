declare type SemanticColor =
	| "primary"
	| "secondary"
	| "accent"
	| "destructive"
	| "info"
	| "success"
	| "warning";

declare type Size = "xs" | "sm" | "md" | "lg" | "xl";

declare type CVA<Intent extends string> = {
	intent: Record<Intent, string>;
	size: Record<Size, string>;
	color: Record<SemanticColor, string>;
};
