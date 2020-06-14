import React from "react";
import Todo from "./Todo";
import "./TodoContainer.css";
function TodoContainer(props) {
  return (
    <div className="TodoContainer">
      {props.Todos.map((todo) => (
        <Todo title={todo} />
      ))}
    </div>
  );
}
export default TodoContainer;
