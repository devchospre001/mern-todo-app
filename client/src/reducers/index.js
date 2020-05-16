import { CREATE_TODO } from "../actions/constants/create-todo";

const todos = [];

// const todosState = (state = todos, action) => {
//     switch(action.type) {
//         case CREATE_TODO:
//             return [
//                 ...state,
//                 {
//                     id: action.id,
//                     content: action.content,
//                     done: false
//                 }
//             ]
//         default:
//             return state;
//     }
// }

const todosState = (state = todos, action) => {
    switch(action.type) {
        case CREATE_TODO:
            return [
                ...state,
                {
                    id: 1,
                    content: 'Hello from REDUX to-do\'s!',
                    done: false, 
                }
            ]
    }
}

export default todosState;