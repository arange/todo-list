import React, { useState } from "react";
import { TodoList, AddTodo } from "./components";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    // 1. Add new task to todos
  };

  const removeTodo = (id) => {
    // 2. Remove task from todos
  };

  const completeTodo = (id) => {
    // 3. Complete task
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onRemoveTodo={removeTodo}
        onCompleteTodo={completeTodo}
      />
    </div>
  );
}

export default TodoApp;
