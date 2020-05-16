import React, { useState } from "react";
import Aux from "../../HOC/Auxiliary";
import "../../style/todos/todos.scss";
import TodosBuilder from "../../containers/TodosBuilder";

export default function Todos() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const deleteTodo = (id) => {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const setUpdate = (content, id) => {
    let filter = todos.map((todo) =>
      !todo.id !== id ? todo.content === content : console.error("error")
    );
    setTodos(filter);

    setTodos(filter);
  };

  return (
    <Aux>
      {/* <div className="main-container">
        <div className="sub-container">
          
          <input
            onChange={onInputChange}
            value={input}
            type="text"
            className="text-input"
            placeholder="Enter your to-do here."
          /> */}
      <TodosBuilder />
      {/* <ul className="list-items">
            {todos.map((todo) => (
              <div><input type="text" value={todo.content} onChange={(e) => setUpdate(e.target.value, todo.id)} className="item" key={todo.id}/> <button onClick={setUpdate}>Set Update</button> <button value="Delete" onClick={() => deleteTodo(todo.id)}>Delete ToDo</button>              </div>
            ))}
          </ul> */}
      {/* </div> */}
      {/* </div> */}
    </Aux>
  );
}
