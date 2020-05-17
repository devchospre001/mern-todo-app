import { TOGGLE_TODO } from '../constants/toggle-todo';

export const toggleTodo = (filter) => ({
    type: TOGGLE_TODO,
    payload: {
        filter
    }
})