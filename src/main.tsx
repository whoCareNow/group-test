import React from "react";
import ReactDOM from "react-dom/client";
import App from "./features/App/App";
import Todo from "./features/TodoList";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
