// index.js
// This file serves as the entry point for the React application.
// It renders the root component of the application and provides Redux store to the application using Provider.

// Importing necessary modules from React, ReactDOM, and Redux
import { StrictMode } from "react"; // StrictMode provides additional checks and warnings for better development practices
import { createRoot } from "react-dom/client"; // createRoot is used to render React components in concurrent mode
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Provider component from react-redux library makes Redux store available to all components
import store from "./store"; // Importing the Redux store from the store file. Adjust the import path if necessary
import App from "./App"; // Importing the root component of the application

// Rendering the root component of the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
