import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="todo">
      <h1 className="todo__header">
         {props.title} </h1>
    </div>
  );
}

export default Todo;
