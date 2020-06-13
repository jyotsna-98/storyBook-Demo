import React from "react";
import { useState } from "react";
import TodoContainer from "./TodoContainer";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const submitBtn = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (e) => {
    e.preventDefault();
    let index = e.target.value;
    todos.slice(index, 1);
    setInput(todos);
  };

  return (
    <div>
      <form>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
        ></input>
        <button type="submit" onClick={submitBtn} disabled={!input}>
          Add Todo
        </button>

        <TodoContainer Todos={todos} />

        {/* {        
        todos.map((todo,i)=>(                  
          <TodoContainer
          key={i}
          value={i}
          title={todo}
          deleteTodo={deleteTodo}
          ></TodoContainer>
         ))} */}
      </form>
    </div>
  );
}

export default App;
