import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onRemoveTodo, onCompleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemoveTodo}
          onComplete={onCompleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
