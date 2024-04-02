// TaskList.js
// This file defines the TaskList component responsible for displaying the list of tasks.

// Importing necessary modules from React and Redux
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskCompleted, deleteTask } from "./tasksSlice";

// Functional component for the TaskList
function TaskList() {
  // Accessing tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Function to handle toggling task completion status
  const handleToggleTaskCompleted = (taskId) => {
    dispatch(toggleTaskCompleted(taskId));
  };

  // Function to handle deleting a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Rendering the task list
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            {/* Displaying task text with option to toggle completion status */}
            <span
              onClick={() => handleToggleTaskCompleted(task.id)}
              style={{ cursor: "pointer" }}
            >
              <span
                className={`task-text ${
                  task.completed ? "completed-text" : ""
                }`}
              >
                <span className="ramji">{task.text}</span>
              </span>
            </span>
            {/* Buttons to delete task and toggle completion status */}
            <span className="segment">
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              <button onClick={() => handleToggleTaskCompleted(task.id)}>
                {task.completed ? "Completed" : "Complete"}
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList; // Exporting the TaskList component for use in other parts of the application
