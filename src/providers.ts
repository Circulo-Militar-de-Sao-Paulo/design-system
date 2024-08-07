import "dayjs/locale/ru";
import {
	MantineColorsTuple,
	MantineProviderProps,
	createTheme,
} from "@mantine/core";
import { DatesProviderProps } from "@mantine/dates";

const primary: MantineColorsTuple = [
	"#f0effa",
	"#dddbef",
	"#b8b3e1",
	"#9289d4",
	"#7265c8",
	"#5e4fc2",
	"#5344c0",
	"#4435a9",
	"#3c2f97",
	"#322886",
];

const secondary: MantineColorsTuple = [
	"#fffbe1",
	"#fff6cc",
	"#ffeb9b",
	"#ffe064",
	"#ffd738",
	"#ffd11c",
	"#ffce09",
	"#e3b600",
	"#c9a100",
	"#ae8b00",
];

const accent: MantineColorsTuple = [
	"#ebfff3",
	"#d5fee6",
	"#a5fdca",
	"#72fdab",
	"#50fd92",
	"#3efd82",
	"#36fe78",
	"#2be267",
	"#1ec85a",
	"#00ad4a",
];

/**
 * Props do MantineProvider
 *
 * @example
 * ```tsx
 * <MantineProvider {...mantineProvider}>
 * ```
 */
export const mantineProvider: MantineProviderProps = {
	theme: createTheme({
		colors: { primary, secondary, accent },
		primaryColor: "primary",
	}),
};

/**
 * Props do DatesProvider
 *
 * @example
 * ```tsx
 * <DatesProvider {...datesProvider}>
 * ```
 */
export const datesProvider: DatesProviderProps = {
	settings: {
		locale: "ru",
		firstDayOfWeek: 1, // Segunda-feira
	},
};
