import { combineReducers } from 'redux'
import {todos} from "./todos.reducer";
import user from "./user.reducer";

export default combineReducers({user: user, todos: todos})