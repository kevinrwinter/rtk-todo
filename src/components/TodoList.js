import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

const TodoList = () => {
  // Access the state using useSelector...
  const todos = useSelector((state) => {
    return state.tasks;
  });

  return (
    <ul className="tasks-list">
      {/* ... and map over the todo list to display items */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </ul>
  );
};

export default TodoList;
