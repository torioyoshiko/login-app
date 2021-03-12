import firebase from "../utils/firebaseApp";
const db = firebase.firestore();


const saveTodosToDb = (store, todos) => {
    console.log(store.getState().user.user.uid)
    db.collection("userTodos").doc(store.getState().user.user.uid).set({
        todos: todos
    })
}

export const todoPersistor = store => next => action => {
    let result = next(action);

    if(action.type === 'ADD_TODO' || action.type === 'REMOVE_TODO') {
        console.log(store.getState())
        saveTodosToDb(store, store.getState().todos)
    }

    return result;
}