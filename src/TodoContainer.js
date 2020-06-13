import React from "react";
import Todo from "./Todo";

function TodoContainer(props) {
  return (
    <div>
      {props.Todos.map((todo) => (
        <Todo title={todo} />
      ))}
    </div>
  );
}

export default TodoContainer;
