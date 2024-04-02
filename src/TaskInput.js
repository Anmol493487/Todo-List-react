// TaskInput.js
// This file defines the TaskInput component responsible for allowing users to input new tasks.

// Importing necessary modules from React and Redux
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./tasksSlice"; // Importing the action creator for adding a new task

// Functional component for the TaskInput
function TaskInput() {
  // State variable to store the value of the input field
  const [task, setTask] = useState("");

  // Redux dispatcher for dispatching actions
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Checking if the input field is not empty or only contains whitespace
    if (task.trim()) {
      // Dispatching the addTask action with the task text as payload
      dispatch(addTask(task));
      // Clearing the input field after adding the task
      setTask("");
    }
  };

  // Function to handle key press events (Enter key) for adding a task
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask(); // Calling handleAddTask function when Enter key is pressed
    }
  };

  // Rendering the task input field and add task button
  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput; // Exporting the TaskInput component for use in other parts of the application
