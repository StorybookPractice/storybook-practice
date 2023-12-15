import TodoItem, { TodoItemProps } from "./TodoItem";
import "../stories/todo-item.css";

interface TodoListProp {
  todoItems: TodoItemProps[];
}

export default function TodoList({ todoItems }: TodoListProp) {
  return (
    <>
      {todoItems.map((todoItem: TodoItemProps) => (
        <div key={`${todoItem.todoText}-wrap`} className="storybook-todo-list--container">
          <TodoItem key={`${todoItem.todoText}-component`} todoText={todoItem.todoText} isDone={todoItem.isDone} readOnly={todoItem.readOnly} />
        </div>
      ))}
    </>
  );
}
