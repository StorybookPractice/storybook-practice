import type { Meta, StoryObj } from "@storybook/react";
import ColorPicker from "../component/ColorPicker";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/ColorPicker",
	component: ColorPicker,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		selectedColor: {
			options: ["ORANGE", "GREEN", "BLUE", "PURPLE", "PINK"],
			control: { type: "select" },
		},
	},
} satisfies Meta<typeof ColorPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		selectedColor: "ORANGE",
	},
};