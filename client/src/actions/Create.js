import { CREATE_TODO } from './constants/create-todo';

export const createTodo = content => ({
    type: CREATE_TODO,
    id: Date.now(),
    content
})