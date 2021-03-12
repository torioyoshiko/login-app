import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import firebaseApp from "../utils/firebaseApp";
import firebase from "firebase";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const loginUser = async () => {
        await firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        await firebaseApp.auth().signInWithEmailAndPassword(email, password);
        history.push("/list");
    }

    const newUser = () => {
        history.push("/")
    }

    return (
        <div className='container'>
            <div className='main'>
                <p className='text'>Welcome back</p>
                <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='input-form'/>
                <input placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)}
                       className='input-form'/>
                <button className='button' onClick={loginUser}>Log in</button>
                <p className='login-text'>New user?</p>
                <button className='button' onClick={newUser}>Sign in</button>
            </div>
        </div>
    )
}

export default LoginPage;
