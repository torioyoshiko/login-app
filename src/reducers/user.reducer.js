const user = (state = {user: null, loaded: false}, action) => {
    switch (action.type) {
        case "SET_USER":
            return  {user: action.payload, loaded: true};
        default:
            return state;
    }
}

export default user;