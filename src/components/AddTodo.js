import React, { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      onAddTodo({ id: Date.now(), text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
