import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './todoTypes';

function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text
    }
}

function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}
function updateTodo(text,id) {
    return {
        type: UPDATE_TODO,
        payload: {
            text,
            id
        }
    }
}
export {
    addTodo,
    removeTodo,
    updateTodo
}