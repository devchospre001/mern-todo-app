import { CREATE_TODO } from "../constants/create-todo";
import { UPDATE_TODO } from "../constants/update-todo";
import { DELETE_TODO } from "../constants/delete-todo";

const todos = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        action.payload
      ];
    case UPDATE_TODO:
      return state.map(todo => {
          if(todo.id === action.payload.id) {
              return {
                  ...todo,
                  content: action.payload.content,
                  done: action.payload.done
              }
          }
      })
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todos;