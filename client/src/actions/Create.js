import { CREATE_TODO } from "../constants/create-todo";

export const createTodo = (id, content, done) => ({
  type: CREATE_TODO,
  payload: {
    id,
    content,
    done
  },
});
