// features/tasksSlice.js
// This file defines a Redux slice for managing tasks in the application.

// Importing necessary module from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for tasks using createSlice function
const tasksSlice = createSlice({
  name: "tasks", // Name of the slice
  initialState: JSON.parse(localStorage.getItem("tasks")) || [], // Initial state fetched from localStorage or an empty array
  reducers: {
    // Reducer function to add a new task
    addTask(state, action) {
      state.push({ id: Date.now(), text: action.payload, completed: false }); // Pushing a new task object with provided text and default completion status
      localStorage.setItem("tasks", JSON.stringify(state)); // Updating localStorage with the updated state
    },
    // Reducer function to toggle completion status of a task
    toggleTaskCompleted(state, action) {
      const taskId = action.payload; // Extracting the task ID from the action payload
      const taskToUpdate = state.find((task) => task.id === taskId); // Finding the task in the state array
      if (taskToUpdate) {
        taskToUpdate.completed = !taskToUpdate.completed; // Toggling the completion status of the task
        localStorage.setItem("tasks", JSON.stringify(state)); // Updating localStorage with the updated state
      }
    },
    // Reducer function to delete a task
    deleteTask(state, action) {
      const taskId = action.payload; // Extracting the task ID from the action payload
      const filteredTasks = state.filter((task) => task.id !== taskId); // Filtering out the task to be deleted
      localStorage.setItem("tasks", JSON.stringify(filteredTasks)); // Updating localStorage with the filtered state
      return filteredTasks; // Returning the filtered state
    }
  }
});

// Exporting action creators and reducer from the slice
export const { addTask, toggleTaskCompleted, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer; // Exporting the reducer function
