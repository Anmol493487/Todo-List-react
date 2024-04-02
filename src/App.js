// App.js
// This file serves as the entry point for our React application.
// It renders the main structure of the application, including the header,
// task input component, and task list component.

// Importing necessary modules from React and other files
import React from "react";
import TaskInput from "./TaskInput"; // Importing the component responsible for inputting tasks
import TaskList from "./TaskList"; // Importing the component responsible for displaying the task list
import "./App.css"; // Importing the CSS file for styling the application

// Functional component for the main App
function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1> {/* Header displaying the title of the application */}
      <TaskInput /> {/* Component for inputting tasks */}
      <TaskList /> {/* Component for displaying the task list */}
    </div>
  );
}

export default App; // Exporting the App component to make it available for use in other parts of the application
