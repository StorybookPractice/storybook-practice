import type { Meta, StoryObj } from "@storybook/react";
import TodoItem from "../component/TodoItem";

const meta = {
  title: "Todo/TodoItem",
  component: TodoItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TodoItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todoText: "",
    isDone: false,
    readOnly: false,
  },
};

export const CompleteTodo: Story = {
  args: {
    todoText: "오늘 할 일 완료!",
    isDone: true,
    readOnly: true,
  },
};

export const IncompleteTodo: Story = {
  args: {
    todoText: "아직 할 일 못 했음 ㅠㅠ",
    isDone: false,
    readOnly: true,
  },
};
