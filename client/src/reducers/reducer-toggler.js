import { TOGGLE_TODO } from "../constants/toggle-todo";

const toggler = (state = [], action) => {
  if (action.type === TOGGLE_TODO) {
    return state.map((todo) =>
      todo.id === action.id ? { ...todo, done: !todo.done } : todo
    );
  }
  return state;
};

export default toggler;
