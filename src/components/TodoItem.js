import React from "react";
import styles from "./TodoItem.module.css";

function TodoItem({ todo, onRemove, onComplete }) {
  return (
    <li className={styles.item}>
      {/* 3. strike through the completed task */}
      <label className={styles.task}>{todo.text}</label>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
      <button onClick={() => onComplete(todo.id)}>Complete</button>
    </li>
  );
}

export default TodoItem;
