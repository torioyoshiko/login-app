import './css/list.css'
import React, {useEffect, useState} from 'react';
import firebase from "../utils/firebaseApp";
import {useHistory} from "react-router-dom";
import { connect } from 'react-redux';
import {addTodo, removeTodo, setTodos} from '../actions/todos.actions';

const mapStateToProps = (state) => {
    return {todos: state.todos, user: state.user}
}

const List = (props) => {
    const history = useHistory();
    const [todo, setTodo] = useState('');
    const db = firebase.firestore();

    const getInfo = async () => {
        if (props.user.user) {
            const todoList = db.collection("userTodos").doc(props.user.user.uid);
            const doc = await todoList.get()
            if (doc.exists) {
                props.dispatch(setTodos(doc.data().todos))
            } else {
                props.dispatch(setTodos([]))
            }
        }
    }

    useEffect(() => {
        getInfo();
    }, [props.user])

    if (props.user.loaded === false) {
        return null
    }

    if (!props.user.user) {
        history.push(process.env.PUBLIC_URL + '/')
        return null;
    }

    const signOut = async() => {
        await firebase.auth().signOut()
    }

    const onTodoChange = (input) => {
        setTodo(input);
    }

    const addToTodos = (todo) => {
        props.dispatch(addTodo(todo))
    }

    const onRemoveTodo = (index) => {
        props.dispatch(removeTodo(index))
    }

    return (
        <div className='main-list'>
            <div className='profile-info'>
                <p className='text-profile'>Logged in as {firebase.auth().currentUser.email}</p>
                <p className='text-profile'>{props.state}</p>
                <button className='button-profile' onClick={signOut}>Sign Out</button>
            </div>
            <div className='write-task'>
                <input
                    onChange={(e) => onTodoChange(e.target.value)}
                    className='list-input'
                    placeholder='Write your task here'
                    value={todo}
                />
                <button onClick={() => addToTodos(todo)} className='create-button first'>Create</button>
            </div>
            <div className='list'>
                <p className='main-word'>Tasks:</p>
                {props.todos.map((todo, index) =>
                    <div key={index} className='single-task'>
                        <p className='task'>{todo}</p>
                        <button onClick={() => onRemoveTodo(index)} className='list-button'>✓</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(List);
