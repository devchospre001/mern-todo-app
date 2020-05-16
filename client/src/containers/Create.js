import React from "react";
import "../style/todos/todos.scss";
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTodo } from '../actions/Create';

const Create = ({ insertTodo }) => {
  return (
    <div>
      <button onClick={insertTodo} className="insert-todo">
        Create
      </button>
      <p></p>
    </div>
  );
}

// Create.propTypes = {
//     insertTodo: PropTypes.func.isRequired,
// }

const mapStateToProps = (state) => {
    return {
        content: state.todos.content
    }
}

export default connect(mapStateToProps)(Create);
