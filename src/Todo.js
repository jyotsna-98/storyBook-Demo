import React from "react";
import "./Todo.css";
import { useState } from "react";
import TodoContainer from "./TodoContainer";

function Todo(props){
const [input,setInput]=useState("");
const[todos,setTodos]=useState([]);

const submitBtn=(e)=>{
e.preventDefault();
setTodos([...todos,input]);
setInput("");
}

const deleteTodo=(e)=>{
    e.preventDefault();
    let index=e.target.value;
    todos.slice(index,1);
    setInput(todos);
    
}
return(
<div className="todo">
<div className="todo__header"><h1>{props.heading}</h1></div>
<form>
    <input  
        value={input}
         onChange={(e)=>{
        setInput(e.target.value);
         }}
      type="text">

    </input>
    <button type="submit"
    onClick="submitBtn"
    disabled={!input}>
        Add Todo 
    </button>
{        
        todos.map((todo,i)=>(                  
          <TodoContainer
          key={i}
          value={i}
          title={todo}
          deleteTodo={deleteTodo}
          ></TodoContainer>
         ))}
</form>
</div>
);
}
export default Todo;
