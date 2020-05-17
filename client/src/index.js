import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import { createTodo } from "./actions/Create";
import { updateTodo } from "./actions/Update";
import { deleteTodo } from "./containers/Delete";

const store = createStore(rootReducer);
store.dispatch(createTodo(1, "Hello", false));
store.dispatch(updateTodo(1, 'Hello from Redux'));
// store.dispatch(deleteTodo(1));
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
