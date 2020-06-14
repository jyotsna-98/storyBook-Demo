import React from "react";

import TodoContainer from "../TodoContainer";
export default {
  title: "TodoContainer",
  component:TodoContainer,
};


export const NormalTodo = () => (
  <TodoContainer
    Todos={["teach react", "take out dogs", 
    "take out the cats"]}
  />
);

