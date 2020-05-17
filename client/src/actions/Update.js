import { UPDATE_TODO } from '../constants/update-todo';

export const updateTodo = (id, content, done) => ({
    type: UPDATE_TODO,
    payload: {
        id,
        content,
        done: false,
    }
})