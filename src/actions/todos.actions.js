export const addTodo = (newTodo) => {
    return {
        type: "ADD_TODO",
        payload: newTodo
    }
}

export const removeTodo = (index) => {
    return {
        type: "REMOVE_TODO",
        payload: index
    }
}

export const setTodos = (todos) => {
    return {
        type: "SET_TODOS",
        payload: todos
    }
}