import { DELETE_TODO } from '../constants/delete-todo';

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {
        id
    }
})