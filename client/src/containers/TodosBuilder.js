import React, { useState, useEffect } from "react";
import Create from "./Create";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function TodosBuilder() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {}, []);

  const addTodo = () => {
    if (!todos.find((todo) => todo.content === input)) {
      if (input == "") {
        toast.error(
          "ERROR: Content adding failed! You need to enter some text to the input first!",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } else {
        setTodos(
          [
            ...todos,
            { id: Date.now(), content: input, done: false, isVisible: true },
          ],
          setInput("")
        );
        toast.success("SUCCESS: Content adding successful!", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo();
  };

  let renderListHandler = todos.map((todo, index) => (
    <li className="item" key={todo.id}>
      <span className="bolder-number">{index + 1}.</span> {todo.content}
    </li>
  ));

  let todosLeft = todos.filter((todo) => !todo.done).length;

  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="row-title">
          <h1 className="main-title">
            <span className="color-t">T</span>
            <span className="color-o">O</span>
            <span className="color-dash">-</span>
            <span className="color-d">D</span>
            <span className="color-o2">O</span>
          </h1>
          <h2>( {todosLeft} todo's left )</h2>
        </div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            className="text-input"
            value={input}
            onChange={inputChangeHandler}
          />
        </form>
        <Create insertTodo={addTodo} />
        <div className="unordered-list-container">
          <ul className="list-items">{renderListHandler}</ul>
        </div>
      </div>
    </div>
  );
}

export default TodosBuilder;
