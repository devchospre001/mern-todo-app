import { combineReducers } from "redux";
import todos from "./reducer-todos";
import toggler from "./reducer-toggler";

const rootReducer = combineReducers({
  todos,
  toggler,
});

const initialState = {
  todos: [],
};

export default rootReducer;
