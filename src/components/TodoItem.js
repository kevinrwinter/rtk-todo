import React from "react";
import { useDispatch } from "react-redux";

import { deleteTask } from "../redux/tasksSlice";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    // Display each task ...
    <li className="task-item">
      <div>{title}</div>
      <div>
        <button
          className="remove-task-button"
          onClick={() => {
            // ... and call the deleteTask action just like we called the addTask action (in AddTodo.js)
            removeTask();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
