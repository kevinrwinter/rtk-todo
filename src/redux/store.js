import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";

// configueStore is an abstraction over the standard Redux createStore function adding some defaults easing our setup process
export default configureStore({
  reducer: {
    // Here we pass the slice reducer we created
    tasks: taskReducer,
  },
});
