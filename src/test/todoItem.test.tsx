import TodoList from "../component/TodoItem";
import { it, describe, expect } from "vitest";
describe("TodoItem 테스트", () => {
  it("TodoItem 스냅샷 테스트", () => {
    const todoItem = TodoList({ todoText: "test", isDone: false, readOnly: false });
    expect(todoItem).toMatchSnapshot();
  });
});
