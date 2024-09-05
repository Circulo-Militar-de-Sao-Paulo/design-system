import type { Meta, StoryObj } from "@storybook/react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./accordion";

const meta: Meta<typeof Accordion> = {
	component: Accordion,
};

type Story = StoryObj<typeof Accordion>;

/**
 * Note que se usarmos `collapsible`, é possível que o conteúdo do item seja fechado após ser aberto
 * clicando nele novamente
 */
export const Single: Story = {
	render: () => (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Item 1</AccordionTrigger>
				<AccordionContent>Content 1</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Item 2</AccordionTrigger>
				<AccordionContent>Content 2</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Item 3</AccordionTrigger>
				<AccordionContent>Content 3</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export const Multiple: Story = {
	render: () => (
		<Accordion type="multiple">
			<AccordionItem value="item-1">
				<AccordionTrigger>Item 1</AccordionTrigger>
				<AccordionContent>Content 1</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Item 2</AccordionTrigger>
				<AccordionContent>Content 2</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Item 3</AccordionTrigger>
				<AccordionContent>Content 3</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export default meta;
