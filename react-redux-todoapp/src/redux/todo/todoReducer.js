import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './todoTypes';

let id = 0;
const initState = {
    todos: [
        { id: id++, text: "Learn React" },
        { id: id++, text: "Learn Redux" },
        { id: id++, text: "Learn NodeJS" }
    ]
}
const todoReducer = (state = initState, action) => {

    console.log(action.payload)
    switch (action.type) {
        case ADD_TODO: return {
            ...state,
            todos: [...state.todos, { id: id++, text: action.payload }]
        }
        case REMOVE_TODO: return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload)

        }
        case UPDATE_TODO: return {
            ...state,

            todos: [action.payload, ...state.todos.filter((todo) => todo.id !== action.payload.id)]
        }
        default: return state;
    }
}

export default todoReducer;