import React from "react";

import Todo from "./Todo";
import "./styles.css";

const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

// don't change the Component name "App"
export default function App() {
  return (
    <div>
      {DUMMY_TODOS.map((item, i) => (
        <Todo key={i} item={item}></Todo>
      ))}
    </div>
  );
}
