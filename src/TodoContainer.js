import React from 'react';


 TodoContainer=({title,deleteTodo})=> {
  <div className="todo">
    <h2>title</h2>
  <button className="deleteBtn"
        onClick={deleteTodo}
            >DELETE
        </button>
  </div>
}

export default TodoContainer;
