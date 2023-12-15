import type { Meta, StoryObj } from "@storybook/react";
import TodoList from "../component/TodoList";

const meta = {
  title: "Todo/TodoList",
  component: TodoList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TodoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todoItems: [
      {
        todoText: "노트북 챙기기",
        isDone: true,
        readOnly: true,
      },
      {
        todoText: "정신 챙기기",
        isDone: true,
        readOnly: true,
      },
      {
        todoText: "CMC 컨퍼런스 가기",
        isDone: false,
        readOnly: true,
      },
      {
        todoText: "저녁 맛있는거 먹기",
        isDone: false,
        readOnly: true,
      },
    ],
  },
};
