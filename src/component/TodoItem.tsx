import { useState } from "react";
import { COLORS } from "../constants";
import Icon from "./Icon";
import "../stories/todo-item.css";

export interface TodoItemProps {
  todoText: string;
  isDone: boolean;
  readOnly: boolean;
}

function TodoItem({ todoText, isDone, readOnly }: TodoItemProps) {
  const [addTodoText, setAddTodoText] = useState<string>("");
  const defaultColor = isDone ? "#ffffff" : COLORS.ORANGE;
  const oppositeColor = isDone ? COLORS.ORANGE : "#ffffff";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddTodoText(e.target.value);
  };
  return (
    <div className="storybook-todo-item--container" style={{ border: `1px solid ${COLORS.ORANGE}`, backgroundColor: oppositeColor }}>
      <div className="storybook-todo-item--wrap-content">
        <div className="storybook-todo-item--icon">
          {isDone && <Icon type="CHECK" size={16} fill="#ffffff" />}
          {!isDone && <Icon type="CIRCLE" size={16} fill={defaultColor} />}
        </div>
        <input
          type="text"
          value={readOnly ? todoText : addTodoText}
          readOnly={readOnly}
          onChange={handleInputChange}
          placeholder="할 일을 작성해 주세요."
          className="storybook-todo-item--content"
          style={{
            backgroundColor: oppositeColor,
            color: isDone ? "#ffffff" : "#000000",
          }}
        />
      </div>
      <Icon type="TRASH" size={16} fill={defaultColor} />
    </div>
  );
}

export default TodoItem;
