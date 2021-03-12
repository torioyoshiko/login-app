export const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newState = state.concat(action.payload)
            return newState;
        case "REMOVE_TODO":
            return state.filter((todo, index)=> {
                return index !== action.payload
            });
        case "SET_TODOS":
            return action.payload;
        default:
            return state;
    }
}