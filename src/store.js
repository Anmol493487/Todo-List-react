// store.js
// This file is responsible for creating and configuring the Redux store for the application.

// Importing necessary module from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importing reducer function from tasksSlice file
import tasksReducer from "./tasksSlice";

// Creating and configuring the Redux store
export default configureStore({
  reducer: {
    tasks: tasksReducer // Assigning tasksReducer to the 'tasks' slice of the store
  }
});
