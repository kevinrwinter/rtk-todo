import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  // Slice name
  name: "tasks",

  // Initial state
  initialState: [],

  // Object of reducers
  reducers: {
    // Each reducer has access to the state and the action
    addTask: (state, action) => {
      const newTask = {
        // id: new Date(),
        id: Math.random(),

        name: action.payload.task,
      };
      state.push(newTask);
    },

    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
