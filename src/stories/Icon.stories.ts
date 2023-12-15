import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../component/Icon";
import { COLORS } from "../constants";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Todo/Icon",
	component: Icon,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		type: {
			options: ["CHECK", "TRASH", "ADD", "CIRCLE"],
			control: { type: "select" },
		},
		size: {
			control: { type: "range", min: 12, max: 120, step: 12 },
		},
		fill: {
			control: { type: "color" },
		},
	},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Check: Story = {
	args: {
		type: "CHECK",
		size: 24,
		fill: COLORS.ORANGE,
	},
};

export const Trash: Story = {
	args: {
		type: "TRASH",
		size: 24,
		fill: COLORS.ORANGE,
	},
};

export const Add: Story = {
	args: {
		type: "ADD",
		size: 24,
		fill: COLORS.ORANGE,
	},
};

export const Circle: Story = {
	args: {
		type: "CIRCLE",
		size: 24,
		fill: COLORS.ORANGE,
	},
};
