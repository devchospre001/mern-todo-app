import React from "react";
import { Link } from "react-router-dom";
import Aux from "../../HOC/Auxiliary";
import "../../style/todos-overview/todos-overview.scss";
import image from "../../assets/images/todo.png";

export default function TodosOverview() {
  return (
    <Aux>
      <div className="main-container">
        <div className="sub-container">
          <h1 className="main-title">
              <span className="color-t">T</span>
              <span className="color-o">O</span>
              <span className="color-dash">-</span>
              <span className="color-d">D</span>
              <span className="color-o2">O</span>
          </h1>
          <Link to="/todos-start" className="todos-start">
            Start
          </Link>
          <Link to="/todos-support" className="todos-support">
            Support
          </Link>
        </div>
        <div className="box">
          <img
            className="image-todos"
            src={image}
            width="200px"
            height="200px"
            alt="todos-logo"
          />
        </div>
      </div>
    </Aux>
  );
}
